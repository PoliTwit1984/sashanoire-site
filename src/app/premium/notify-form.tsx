"use client";

export default function NotifyForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors"
      />
      <button
        type="submit"
        className="bg-accent text-black font-semibold px-6 py-3 rounded-full hover:bg-accent-dark transition-colors text-sm whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
