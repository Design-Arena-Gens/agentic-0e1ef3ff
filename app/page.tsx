import Link from "next/link";
import { CapabilityExplorer } from "@/components/CapabilityExplorer";

export default function Home() {
  const fastWins = [
    {
      title: "Ship production-ready code",
      body: "Design features, implement full stacks, write tests, and harden edge cases until the build passes.",
    },
    {
      title: "Investigate and diagnose",
      body: "Trace bugs across services, inspect logs, and propose resilient fixes with rollback strategies.",
    },
    {
      title: "Reason before acting",
      body: "Surface trade-offs, outline plans, and document decisions so every change has clear intent.",
    },
  ];

  const workflow = [
    {
      label: "1. Orient",
      detail:
        "Absorb context, flag unknowns, and align on constraints while mapping the existing system.",
    },
    {
      label: "2. Design",
      detail:
        "Draft solution options, evaluate trade-offs, and lock an execution plan with milestones.",
    },
    {
      label: "3. Build",
      detail:
        "Pair implementation with tests, docs, and migration paths so the work lands cleanly in main.",
    },
    {
      label: "4. Iterate",
      detail:
        "Review metrics, gather feedback, and keep refining until the solution holds up in production.",
    },
  ];

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
      <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-indigo-100/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 shadow-sm shadow-indigo-200/40 backdrop-blur">
            Autonomous Coding Agent
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
              I convert ambiguous ideas into production-grade software.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Drop me into your repo, share the problem, and I will design, build,
              test, document, and hand back solutions that are ready to merge. I
              work end-to-end—from greenfield explorations to hardening legacy systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#capabilities"
              className="group inline-flex items-center gap-2 rounded-full border border-indigo-500 bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/40 transition hover:translate-y-0.5 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
              See capabilities
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur transition hover:border-indigo-200 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-indigo-400"
            >
              View sample deployments
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/70 p-8 shadow-xl shadow-indigo-100/60 backdrop-blur dark:border-white/10 dark:bg-white/10">
          <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-indigo-400/20 blur-3xl" />
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Quick snapshot
          </h2>
          <ul className="mt-6 space-y-5 text-sm text-zinc-600 dark:text-zinc-300">
            {fastWins.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-indigo-100/70 bg-indigo-50/80 p-4 shadow-sm shadow-indigo-200/30 transition hover:border-indigo-200 hover:shadow-indigo-300/40 dark:border-white/10 dark:bg-indigo-500/10"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                  {item.title}
                </p>
                <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-200">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="capabilities" className="space-y-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            What you can rely on me for
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            From discovery to delivery, I keep shipping momentum high. Browse a few focus
            areas below, or drop a prompt that blends them together—I thrive in multidisciplinary work.
          </p>
        </div>
        <CapabilityExplorer />
      </section>

      <section className="space-y-10 rounded-3xl border border-black/5 bg-white/80 p-10 shadow-lg shadow-indigo-200/30 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            How I deliver outcomes
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Expect structured thinking, transparent progress, and documentation that helps
            teams move faster long after handoff.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {workflow.map((step) => (
            <li
              key={step.label}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-md shadow-indigo-100/40 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-indigo-300/40 dark:border-white/10 dark:bg-white/10"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-500 dark:text-indigo-300">
                {step.label}
              </span>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-200">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl border border-dashed border-indigo-300/60 bg-indigo-50/60 p-6 text-sm text-indigo-900 shadow-inner dark:border-indigo-400/40 dark:bg-indigo-500/10 dark:text-indigo-100">
          <p>
            Need something different? Point me at your toughest backlog item,
            request a ground-up prototype, or ask for a deep technical brief. I&apos;ll
            handle the rest and document every decision for effortless review.
          </p>
        </div>
      </section>
    </main>
  );
}
