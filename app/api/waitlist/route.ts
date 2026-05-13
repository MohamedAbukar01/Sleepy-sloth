import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (parsed.data.hp_field) {
    // Honeypot was filled — pretend success, drop the row.
    return NextResponse.json({ ok: true, already: false });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: parsed.data.email, source: "landing" });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, already: true });
    }
    console.error("[waitlist] insert failed", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Try again in a moment." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, already: false });
}
