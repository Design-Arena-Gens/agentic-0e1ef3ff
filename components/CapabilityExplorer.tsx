"use client";

import { useMemo, useState } from "react";

type Capability = {
  title: string;
  description: string;
  highlights: string[];
  sample: string;
};

const capabilities: Capability[] = [
  {
    title: "Deep Project Analysis",
    description:
      "Audit complex repositories, map unknown codebases, and surface the highest leverage improvements with clear reasoning.",
    highlights: [
      "Architectural and dependency mapping",
      "Risk-driven code reviews with remediation guidance",
      "Knowledge-base synthesis across docs, issues, and commits",
    ],
    sample:
      "Create an architecture map of the payments service, highlight fragile modules, and propose a migration path toward event sourcing.",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Design, implement, and wire up cohesive frontend, backend, and data layers ready for deployment.",
    highlights: [
      "Next.js, React, Vue, Astro, and vanilla web apps",
      "API design with REST, GraphQL, tRPC, or direct DB access",
      "Auth, file storage, and third-party integrations",
    ],
    sample:
      "Ship a billing dashboard: API routes, subscription table visualizations, invoice PDF export, and a responsive UI with dark mode.",
  },
  {
    title: "AI & Automation",
    description:
      "Prototype and productionize AI-assisted workflows, agents, and evaluation harnesses.",
    highlights: [
      "OpenAI, Anthropic, local models, and vector DB orchestration",
      "Guardrails, evaluation suites, and telemetry instrumentation",
      "Chat UX, streaming responses, and multimodal inputs",
    ],
    sample:
      "Stand up a retrieval-augmented support assistant with Slack handoffs, analytics, and automated regression tests.",
  },
  {
    title: "Developer Experience",
    description:
      "Level-up teams with automation, test coverage, and documentation that keeps momentum high.",
    highlights: [
      "CI/CD pipelines, caching, and artifact workflows",
      "Robust unit, integration, and end-to-end test suites",
      "Playbooks, onboarding docs, and architecture decision records",
    ],
    sample:
      "Refine the monorepo: add preview deployments, accelerate linting, and document the release playbook for new contributors.",
  },
  {
    title: "Data & Insights",
    description:
      "Model, explore, and visualize data to unblock product and business decisions.",
    highlights: [
      "SQL, ORMs, ELT pipelines, and analytics modeling",
      "Interactive dashboards, notebooks, and reporting automation",
      "Experiment design, instrumentation, and KPI tracking",
    ],
    sample:
      "Design the product analytics stack, instrument critical funnels, and craft a live dashboard for weekly reviews.",
  },
];

export function CapabilityExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCapability = useMemo(
    () => capabilities[activeIndex],
    [activeIndex]
  );

  return (
    <section className="w-full rounded-3xl border border-black/5 bg-white/80 p-8 shadow-lg shadow-indigo-700/5 backdrop-blur-lg transition hover:border-indigo-200 hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-black/60 dark:hover:border-indigo-400/40">
      <header className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-indigo-500 dark:text-indigo-300">
            Capability Navigator
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Choose a focus area to see how I move from idea to delivery.
          </h2>
        </div>
      </header>

      <div className="mt-6 flex flex-wrap gap-3">
        {capabilities.map((capability, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={capability.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                isActive
                  ? "border-indigo-500 bg-indigo-500 text-white shadow-sm shadow-indigo-400/40"
                  : "border-zinc-200/80 bg-white/40 text-zinc-600 hover:border-indigo-200 hover:text-indigo-600 dark:border-white/10 dark:bg-transparent dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              }`}
            >
              {capability.title}
            </button>
          );
        })}
      </div>

      <article className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {activeCapability.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {activeCapability.description}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            {activeCapability.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-zinc-200/60 bg-white/60 p-4 shadow-sm shadow-indigo-200/20 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-400 dark:bg-indigo-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-indigo-300/60 bg-indigo-50/70 p-6 text-sm text-indigo-900 shadow-inner dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-100">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500/80 dark:text-indigo-200/70">
              Sample Prompt
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed">
              {activeCapability.sample}
            </p>
          </div>
          <p className="mt-6 text-xs text-indigo-600/80 dark:text-indigo-200/80">
            Tip: Layer in context like architecture diagrams, requirements, and
            constraints. I will stitch it together and surface trade-offs
            before shipping code.
          </p>
        </div>
      </article>
    </section>
  );
}
