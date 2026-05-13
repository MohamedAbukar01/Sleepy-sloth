"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "already" | "error";

export function WaitlistForm({
  variant = "default",
  id,
  source,
}: {
  variant?: "default" | "compact";
  id?: string;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, hp_field: hp, source }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        already?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      if (data.already) {
        setStatus("already");
        setMessage("You're already on the list. Sam remembers you.");
        return;
      }

      setStatus("success");
      setMessage("Sam will see you at launch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network hiccup. Try once more?");
    }
  }

  const inputId = id ?? `waitlist-${variant}`;
  const isCompact = variant === "compact";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isCompact
          ? "flex w-full max-w-md flex-col gap-2 sm:flex-row"
          : "mx-auto flex w-full max-w-md flex-col gap-2 sm:flex-row"
      }
      aria-describedby={`${inputId}-status`}
      noValidate
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="w-full flex-1 rounded-md border border-moon-100/20 bg-transparent px-4 py-2.5 text-sm text-moon-100 placeholder:text-moon-100/45 focus:border-moon-100/60 focus:outline-none focus:ring-1 focus:ring-moon-100/40"
      />
      <input
        type="text"
        name="hp_field"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`rounded-md px-5 py-2.5 text-sm font-medium transition disabled:opacity-60 ${
          isCompact
            ? "border border-moon-100/25 text-moon-100 hover:border-moon-100/60"
            : "bg-moon-100 text-night-950 hover:bg-peach-200"
        }`}
      >
        {status === "loading" ? "Saving…" : "Subscribe"}
      </button>

      {status !== "idle" && status !== "loading" && (
        <p
          id={`${inputId}-status`}
          role="status"
          aria-live="polite"
          className={`mt-1 w-full text-xs sm:mt-0 sm:basis-full ${
            status === "error" ? "text-peach-300" : "text-moss-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
