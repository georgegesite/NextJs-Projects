import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col gap-10 items-center text-center">
      <div className="max-w-3xl">
        <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight !leading-tight">
          Train smarter. Race faster.
        </p>
        <p className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400">
          Get instant, science-backed pace zones from any recent race result and
          start planning your next workout in seconds.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/pace-generator"
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Try the Pace Calculator
        </Link>
        <Link
          href="/auth/login"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          Explore sign-in options
        </Link>
      </div>
    </div>
  );
}
