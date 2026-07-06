import React from "react";
import { ArrowRight } from "lucide-react";

// ---- Design tokens ----
// paper:  #F1E8D6  (aged kraft paper)
// ink:    #2B2620  (warm near-black)
// stamp:  #A13D2E  (rubber-stamp red)
// moss:   #5F6F52  (produce-crate green) 
// gold:   #C9A876  (kraft cardboard)

export default function HeroBanner() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#F1E8D6] px-6 sm:px-12 lg:px-20">
      {/* Halftone paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#2B2620 0.6px, transparent 0.6px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* Deckled / torn bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-[#FDFBF5]"
        style={{
          clipPath:
            "polygon(0% 100%,0% 30%,3% 60%,6% 20%,9% 70%,12% 10%,15% 55%,18% 25%,21% 65%,24% 15%,27% 50%,30% 20%,33% 60%,36% 10%,39% 55%,42% 25%,45% 70%,48% 15%,51% 50%,54% 20%,57% 65%,60% 10%,63% 55%,66% 25%,69% 70%,72% 15%,75% 50%,78% 20%,81% 60%,84% 10%,87% 55%,90% 25%,93% 65%,96% 15%,100% 50%,100% 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.4fr_0.6fr]">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-[#2B2620]/40" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#5F6F52]">
              Est. at the market, since day one
            </p>
          </div>

          <h1
            className="max-w-2xl text-[13vw] font-bold uppercase leading-[0.88] tracking-tight text-[#2B2620] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
          >
            Fresh
            <br />
            <span className="text-[#A13D2E]">Goods,</span>
            <br />
            No Middlemen
          </h1>

          <p className="mt-8 max-w-md border-l-2 border-[#2B2620]/15 pl-4 text-base leading-relaxed text-[#2B2620]/65 sm:text-lg">
            Every crate is packed by the person who grew it, made it, or
            baked it. We just carry it to your door.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Ticket-stub CTA */}
            <a
              href="#shop"
              className="group relative flex items-center gap-3 bg-[#2B2620] py-3.5 pl-6 pr-5 text-sm uppercase tracking-wide text-[#F1E8D6] transition-colors duration-200 hover:bg-[#A13D2E]"
              style={{
                clipPath:
                  "polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)",
              }}
            >
              Shop this week's crate
              <ArrowRight
                strokeWidth={2}
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#vendors"
              className="flex items-center gap-2 border-b border-[#2B2620]/30 py-3.5 text-sm uppercase tracking-wide text-[#2B2620] transition-colors duration-200 hover:border-[#2B2620]"
            >
              Meet the vendors
            </a>
          </div>
        </div>

        {/* Right: rotated inspection stamp — signature element */}
        <div className="flex justify-start lg:justify-center">
          <div
            className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full sm:h-48 sm:w-48"
            style={{ transform: "rotate(-10deg)" }}
          >
            <div className="absolute inset-0 rounded-full border-[3px] border-[#A13D2E] opacity-80" />
            <div className="absolute inset-[10px] rounded-full border border-dashed border-[#A13D2E] opacity-60" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
              <defs>
                <path
                  id="stampCircleTop"
                  d="M 20,100 A 80,80 0 0 1 180,100"
                />
                <path
                  id="stampCircleBottom"
                  d="M 30,130 A 70,70 0 0 0 170,130"
                />
              </defs>
              <text fill="#A13D2E" fontSize="14" letterSpacing="3" fontFamily="ui-monospace, monospace">
                <textPath href="#stampCircleTop" startOffset="50%" textAnchor="middle">
                  QUALITY CHECKED
                </textPath>
              </text>
              <text fill="#A13D2E" fontSize="12" letterSpacing="3" fontFamily="ui-monospace, monospace">
                <textPath href="#stampCircleBottom" startOffset="50%" textAnchor="middle">
                  · FARM TO DOOR ·
                </textPath>
              </text>
            </svg>
            <span
              className="text-3xl font-bold text-[#A13D2E]"
              style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
            >
              A+
            </span>
          </div>
        </div>
      </div>

      {/* Bottom-left crate count, staples the page to its content */}
      <div className="absolute bottom-8 left-6 hidden items-baseline gap-2 sm:left-12 sm:flex lg:left-20">
        <span
          className="text-2xl text-[#2B2620]"
          style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
        >
          128
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wide text-[#2B2620]/50">
          crates packed this morning
        </span>
      </div>
    </section>
  );
}