"use client";
import React, { useState } from "react";
import { Package, ArrowRight, X, Minus, Plus } from "lucide-react";

// ---- Same design tokens as HeroBanner ----
// paper:  #F1E8D6  (aged kraft paper)
// ink:    #2B2620  (warm near-black)
// stamp:  #A13D2E  (rubber-stamp red)
// moss:   #5F6F52  (produce-crate green)

const PRODUCTS = [
  {
    id: 1,
    name: "Heirloom Tomatoes",
    vendor: "Bramblewood Farm",
    price: 6.5,
    unit: "/ lb",
    grade: "A+",
  },
  {
    id: 2,
    name: "Raw Wildflower Honey",
    vendor: "Two Bee Apiary",
    price: 12,
    unit: "/ jar",
    grade: "A+",
  },
  {
    id: 3,
    name: "Sourdough Loaf",
    vendor: "Ember & Rye",
    price: 8,
    unit: "/ loaf",
    grade: "A",
  },
  {
    id: 4,
    name: "Cultured Butter",
    vendor: "Moss Creek Dairy",
    price: 9.5,
    unit: "/ block",
    grade: "A+",
  },
];

function StampBadge({ grade }) {
  return (
    <div
      className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#A13D2E]/70"
      style={{ transform: "rotate(8deg)" }}
    >
      <span
        className="text-xs font-bold text-[#A13D2E]"
        style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
      >
        {grade}
      </span>
    </div>
  );
}

// ---- Buy-now modal, shared across product cards ----
function BuyNowModal({ product, onClose }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your checkout / order logic
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#2B2620]/50 backdrop-blur-[2px]"
      />

      <div className="relative w-full max-w-md border border-[#2B2620]/10 bg-[#FDFBF5] p-7 shadow-[6px_8px_0_0_rgba(43,38,32,0.15)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#2B2620 0.6px, transparent 0.6px)",
            backgroundSize: "5px 5px",
          }}
        />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-[#2B2620]/40 transition-colors hover:text-[#2B2620]"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-[#5F6F52]">
          {product.vendor}
        </p>
        <h2
          className="relative mt-2 text-2xl uppercase text-[#2B2620]"
          style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
        >
          {product.name}
        </h2>
        <p className="relative mt-2 text-sm leading-relaxed text-[#2B2620]/60">
          Pay now, pick up or get it delivered within 48 hours.
        </p>

        <form onSubmit={handleSubmit} className="relative mt-6 flex flex-col gap-5">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wide text-[#2B2620]/50">
              Full name
            </label>
            <input
              required
              type="text"
              placeholder="Jordan Ellis"
              className="mt-1.5 w-full border border-[#2B2620]/15 bg-transparent px-3 py-2.5 text-sm text-[#2B2620] outline-none placeholder:text-[#2B2620]/30 focus:border-[#A13D2E]"
            />
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-wide text-[#2B2620]/50">
              Delivery address
            </label>
            <input
              required
              type="text"
              placeholder="221 Market St"
              className="mt-1.5 w-full border border-[#2B2620]/15 bg-transparent px-3 py-2.5 text-sm text-[#2B2620] outline-none placeholder:text-[#2B2620]/30 focus:border-[#A13D2E]"
            />
          </div>

          <div className="flex items-center justify-between border-t border-dashed border-[#2B2620]/15 pt-5">
            <span className="font-mono text-[11px] uppercase tracking-wide text-[#2B2620]/50">
              Quantity {product.unit}
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-7 w-7 items-center justify-center border border-[#2B2620]/20 text-[#2B2620] transition-colors hover:border-[#2B2620]"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span
                className="w-4 text-center text-sm text-[#2B2620]"
                style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
              >
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="flex h-7 w-7 items-center justify-center border border-[#2B2620]/20 text-[#2B2620] transition-colors hover:border-[#2B2620]"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wide text-[#2B2620]/50">
              Total
            </span>
            <span
              className="text-xl text-[#2B2620]"
              style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
            >
              ${(product.price * qty).toFixed(2)}
            </span>
          </div>

          <button
            type="submit"
            className="group relative mt-1 flex items-center justify-center gap-3 bg-[#2B2620] py-3.5 pl-6 pr-5 text-sm uppercase tracking-wide text-[#F1E8D6] transition-colors duration-200 hover:bg-[#A13D2E]"
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)",
            }}
          >
            Confirm order
            <ArrowRight
              strokeWidth={2}
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

function ProductCard({ product, onBuyNow }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm border border-[#2B2620]/10 bg-[#FDFBF5] transition-shadow duration-300 hover:shadow-[4px_5px_0_0_rgba(43,38,32,0.08)]">
      {/* Crate-style image area */}
      <div className="relative flex h-44 items-center justify-center border-b border-dashed border-[#2B2620]/15 bg-[#F1E8D6]">
        <Package strokeWidth={1} className="h-10 w-10 text-[#2B2620]/20" />
        <StampBadge grade={product.grade} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="font-mono text-[10px] uppercase tracking-wide text-[#5F6F52]">
          {product.vendor}
        </p>
        <h3 className="mt-1 text-base text-[#2B2620]">{product.name}</h3>

        <div className="mt-auto flex items-center justify-between pt-4">
          <p
            className="text-lg text-[#2B2620]"
            style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
          >
            ${product.price.toFixed(2)}
            <span className="ml-1 text-xs text-[#2B2620]/40">
              {product.unit}
            </span>
          </p>

          <button
            onClick={() => onBuyNow(product)}
            className="group/btn relative flex items-center gap-1.5 bg-[#2B2620] py-2 pl-3 pr-2.5 text-[11px] uppercase tracking-wide text-[#F1E8D6] transition-colors duration-200 hover:bg-[#A13D2E]"
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 8px) 0,100% 50%,calc(100% - 8px) 100%,0 100%)",
            }}
          >
            Add
            <ArrowRight
              strokeWidth={2}
              className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductSection() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section className="relative w-full bg-[#F1E8D6] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-2 border-b border-dashed border-[#2B2620]/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F6F52]">
              Packed this morning
            </p>
            <h2
              className="mt-2 text-3xl uppercase text-[#2B2620] sm:text-4xl"
              style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
            >
              Today's Crate
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#2B2620]/55">
            Four items, straight off the truck. Stock changes daily — what
            you see is what's left.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyNow={setActiveProduct}
            />
          ))}
        </div>
      </div>

      <BuyNowModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}