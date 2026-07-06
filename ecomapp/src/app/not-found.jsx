import Link from "next/link";
import { PackageX, ArrowRight, Home } from "lucide-react";

// ---- Same design tokens as HeroBanner / ProductSection ----
// paper:  #F1E8D6  (aged kraft paper)
// ink:    #2B2620  (warm near-black)
// stamp:  #A13D2E  (rubber-stamp red)
// moss:   #5F6F52  (produce-crate green)

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F1E8D6] px-6 text-center sm:px-12">
      {/* Halftone paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#2B2620 0.6px, transparent 0.6px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* Deckled / torn top edge, mirrors HeroBanner's bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-[#FDFBF5]"
        style={{
          clipPath:
            "polygon(0% 0%,0% 70%,3% 40%,6% 80%,9% 30%,12% 90%,15% 45%,18% 75%,21% 35%,24% 85%,27% 50%,30% 80%,33% 40%,36% 90%,39% 45%,42% 75%,45% 30%,48% 85%,51% 50%,54% 80%,57% 35%,60% 90%,63% 45%,66% 75%,69% 30%,72% 85%,75% 50%,78% 80%,81% 40%,84% 90%,87% 45%,90% 75%,93% 35%,96% 85%,100% 50%,100% 0%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Rotated inspection stamp, echoes HeroBanner's "A+" badge */}
        <div
          className="relative mb-8 flex h-40 w-40 shrink-0 items-center justify-center rounded-full sm:h-48 sm:w-48"
          style={{ transform: "rotate(-8deg)" }}
        >
          <div className="absolute inset-0 rounded-full border-[3px] border-[#A13D2E] opacity-80" />
          <div className="absolute inset-[10px] rounded-full border border-dashed border-[#A13D2E] opacity-60" />
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
            <defs>
              <path id="notFoundTop" d="M 20,100 A 80,80 0 0 1 180,100" />
              <path id="notFoundBottom" d="M 30,130 A 70,70 0 0 0 170,130" />
            </defs>
            <text fill="#A13D2E" fontSize="13" letterSpacing="3" fontFamily="ui-monospace, monospace">
              <textPath href="#notFoundTop" startOffset="50%" textAnchor="middle">
                OUT OF STOCK
              </textPath>
            </text>
            <text fill="#A13D2E" fontSize="12" letterSpacing="3" fontFamily="ui-monospace, monospace">
              <textPath href="#notFoundBottom" startOffset="50%" textAnchor="middle">
                · CHECK THE CRATE ·
              </textPath>
            </text>
          </svg>
          <PackageX strokeWidth={1.5} className="h-10 w-10 text-[#A13D2E]" />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#5F6F52]">
          Error 404
        </p>

        <h1
          className="mt-4 text-6xl font-bold uppercase leading-[0.9] tracking-tight text-[#2B2620] sm:text-7xl"
          style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
        >
          Empty
          <br />
          <span className="text-[#A13D2E]">Crate.</span>
        </h1>

        <p className="mt-6 max-w-md border-l-2 border-[#2B2620]/15 pl-4 text-left text-base leading-relaxed text-[#2B2620]/65 sm:text-lg">
          Whatever you were looking for isn't on this shelf. It might've
          sold out, moved, or never existed in the first place.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="group relative flex items-center justify-center gap-3 bg-[#2B2620] py-3.5 pl-6 pr-5 text-sm uppercase tracking-wide text-[#F1E8D6] transition-colors duration-200 hover:bg-[#A13D2E]"
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)",
            }}
          >
            <Home strokeWidth={2} className="h-4 w-4" />
            Back to the market
            <ArrowRight
              strokeWidth={2}
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/about"
            className="flex items-center justify-center gap-2 border-b border-[#2B2620]/30 py-3.5 text-sm uppercase tracking-wide text-[#2B2620] transition-colors duration-200 hover:border-[#2B2620]"
          >
            Read our story
          </Link>
        </div>
      </div>

      {/* Bottom-left reference number, echoes HeroBanner's crate count */}
      <div className="absolute bottom-8 left-6 hidden items-baseline gap-2 sm:left-12 sm:flex lg:left-20">
        <span
          className="text-2xl text-[#2B2620]"
          style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
        >
          404
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wide text-[#2B2620]/50">
          not found in this crate
        </span>
      </div>
    </main>
  );
}