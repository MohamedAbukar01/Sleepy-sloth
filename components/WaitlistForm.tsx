"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "already" | "error";

export function WaitlistForm({
  variant = "hero",
  id,
}: {
  variant?: "hero" | "band";
  id?: string;
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
        body: JSON.stringify({ email, hp_field: hp }),
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

  const isBand = variant === "band";
  const inputId = id ?? `waitlist-${variant}`;

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isBand
          ? "mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          : "flex w-full max-w-md flex-col gap-3 sm:flex-row"
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
        placeholder="you@cozy.email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="w-full flex-1 rounded-full border border-night-700 bg-night-900/70 px-5 py-3 text-moon-100 placeholder:text-moon-100/40 focus:border-lavender-400 focus:outline-none focus:ring-2 focus:ring-lavender-400/40"
      />
      {/* Honeypot */}
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
        className="rounded-full bg-peach-300 px-6 py-3 font-medium text-night-950 transition hover:bg-peach-200 disabled:opacity-60"
      >
        {status === "loading" ? "Saving…" : "Save my spot"}
      </button>

      <p
        id={`${inputId}-status`}
        role="status"
        aria-live="polite"
        className={`sr-only ${status !== "idle" ? "not-sr-only sm:absolute sm:-bottom-7 sm:left-0 sm:text-sm" : ""}`}
      >
        {message}
      </p>

      {status !== "idle" && status !== "loading" && (
        <p
          className={`mt-1 w-full text-sm sm:mt-0 sm:basis-full ${
            status === "error"
              ? "text-peach-300"
              : "text-moon-100/80"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
