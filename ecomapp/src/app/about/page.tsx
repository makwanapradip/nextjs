"use client";

import React from "react";
import { Sprout, Handshake, Truck, ArrowRight } from "lucide-react";

// ---- Same design tokens as HeroBanner / ProductSection ----
// paper:  #F1E8D6  (aged kraft paper)
// ink:    #2B2620  (warm near-black)
// stamp:  #A13D2E  (rubber-stamp red)
// moss:   #5F6F52  (produce-crate green)

const VALUES = [
  {
    icon: Sprout,
    title: "Grown, not manufactured",
    copy: "Every item on the shelf came from soil, an oven, or a workbench — never a factory line.",
  },
  {
    icon: Handshake,
    title: "Fair from the start",
    copy: "Vendors set their own prices. We take one flat cut, published on every listing.",
  },
  {
    icon: Truck,
    title: "Days, not weeks",
    copy: "Most crates leave the vendor's hands and reach your door within 48 hours.",
  },
];

const TEAM = [
  { name: "Maren Osei", role: "Founder & Buyer", grade: "01" },
  { name: "Callum Reyes", role: "Vendor Relations", grade: "02" },
  { name: "Priya Nandakumar", role: "Logistics", grade: "03" },
  { name: "Theo Lindqvist", role: "Quality Checks", grade: "04" },
];

function ValueCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-start border border-[#2B2620]/10 bg-[#FDFBF5] p-6">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#A13D2E]/70"
        style={{ transform: "rotate(-6deg)" }}
      >
        <Icon strokeWidth={1.5} className="h-5 w-5 text-[#A13D2E]" />
      </div>
      <h3 className="mt-5 text-lg text-[#2B2620]">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#2B2620]/60">
        {item.copy}
      </p>
    </div>
  );
}

function TeamTag({ person }) {
  return (
    <div className="relative pt-3">
      <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[#2B2620]/25" />
      <div className="border border-[#2B2620]/10 bg-[#FDFBF5] p-5">
        <p
          className="font-mono text-[11px] text-[#A13D2E]"
          style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
        >
          NO. {person.grade}
        </p>
        <h4 className="mt-2 text-base text-[#2B2620]">{person.name}</h4>
        <p className="mt-0.5 text-xs uppercase tracking-wide text-[#2B2620]/50">
          {person.role}
        </p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <main className="w-full bg-[#F1E8D6]">
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#2B2620 0.6px, transparent 0.6px)",
            backgroundSize: "5px 5px",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-[#2B2620]/40" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#5F6F52]">
              Our story
            </p>
          </div>
          <h1
            className="text-5xl font-bold uppercase leading-[0.95] tracking-tight text-[#2B2620] sm:text-6xl"
            style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
          >
            We're just the
            <br />
            <span className="text-[#A13D2E]">middle crate.</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-2 border-[#2B2620]/15 pl-4 text-base leading-relaxed text-[#2B2620]/65 sm:text-lg">
            We started this stall in a farmers' market parking lot,
            fielding calls from three growers who couldn't sell fast enough
            and neighbors who couldn't buy fresh enough. Six years later,
            same idea, bigger truck.
          </p>
        </div>
      </section>

      {/* ---- Pull-quote / narrative ---- */}
      <section className="border-y border-dashed border-[#2B2620]/15 px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-2xl leading-snug text-[#2B2620] sm:text-3xl"
            style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
          >
            "If it wouldn't sell at a real market stall, it doesn't sell
            here."
          </p>
          <p className="mt-4 text-sm uppercase tracking-wide text-[#2B2620]/50">
            — Maren Osei, Founder
          </p>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F6F52]">
            How we operate
          </p>
          <h2
            className="mt-2 text-3xl uppercase text-[#2B2620] sm:text-4xl"
            style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
          >
            Three rules we don't bend
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((item) => (
              <ValueCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Team ---- */}
      <section className="border-t border-dashed border-[#2B2620]/15 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F6F52]">
            Behind the counter
          </p>
          <h2
            className="mt-2 text-3xl uppercase text-[#2B2620] sm:text-4xl"
            style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
          >
            The crew
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person) => (
              <TeamTag key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Closing CTA ---- */}
      <section className="px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 border border-[#2B2620]/10 bg-[#FDFBF5] p-10 sm:flex-row sm:items-center">
          <div>
            <h2
              className="text-2xl uppercase text-[#2B2620] sm:text-3xl"
              style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
            >
              See what's in today's crate
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#2B2620]/60">
              New stock every morning, gone by evening. No subscriptions,
              no minimums.
            </p>
          </div>

          <a
            href="/"
            className="group relative flex shrink-0 items-center gap-3 bg-[#2B2620] py-3.5 pl-6 pr-5 text-sm uppercase tracking-wide text-[#F1E8D6] transition-colors duration-200 hover:bg-[#A13D2E]"
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)",
            }}
          >
            Shop now
            <ArrowRight
              strokeWidth={2}
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}