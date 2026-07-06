import { Package } from "lucide-react";

// ---- Same design tokens as HeroBanner / not-found ----
// paper:  #F1E8D6  (aged kraft paper)
// ink:    #2B2620  (warm near-black)
// stamp:  #A13D2E  (rubber-stamp red)
// moss:   #5F6F52  (produce-crate green)

export default function Loading() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F1E8D6] px-6">
      {/* Halftone paper grain, consistent with every other page */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#2B2620 0.6px, transparent 0.6px)",
          backgroundSize: "5px 5px",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Spinning dashed stamp ring, with a still inner ring for contrast */}
        <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-[#A13D2E]/60" />
          <div className="absolute inset-3 rounded-full border-[3px] border-[#A13D2E]/25" />
          <Package
            strokeWidth={1.5}
            className="h-10 w-10 animate-pulse text-[#A13D2E]"
          />
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-[#5F6F52]">
          One moment
        </p>

        <h1
          className="mt-3 flex items-baseline text-2xl uppercase text-[#2B2620] sm:text-3xl"
          style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
        >
          Packing your crate
          <span className="ml-1 flex gap-0.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#2B2620] [animation-delay:0ms]" />
            <span className="ml-1 h-1.5 w-1.5 animate-bounce rounded-full bg-[#2B2620] [animation-delay:150ms]" />
            <span className="ml-1 h-1.5 w-1.5 animate-bounce rounded-full bg-[#2B2620] [animation-delay:300ms]" />
          </span>
        </h1>
      </div>

      {/* Custom slow-spin keyframe, since Tailwind's default spin is too fast for this motif */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3.5s linear infinite;
        }
      `}</style>
    </main>
  );
}