"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Package,
  ArrowRight,
  ChevronRight,
  Minus,    
  Plus,
  X,
} from "lucide-react";

// ---- Same design tokens as HeroBanner / ProductSection ----
// paper:  #F1E8D6  (aged kraft paper)
// ink:    #2B2620  (warm near-black)
// stamp:  #A13D2E  (rubber-stamp red)
// moss:   #5F6F52  (produce-crate green)

// In a real app this would come from a database or CMS —
// keeping it local here so the page works standalone.
const PRODUCTS = {
  1: {
    id: 1,
    name: "Heirloom Tomatoes",
    vendor: "Bramblewood Farm",
    price: 6.5,
    unit: "/ lb",
    grade: "A+",
    description:
      "Picked ripe at first light, these heirloom tomatoes are grown without synthetic fertilizer on a three-acre plot outside town. Expect uneven shapes, deep color, and a lot more flavor than anything shrink-wrapped.",
    origin: "Bramblewood Farm, 14 mi away",
  },
  2: {
    id: 2,
    name: "Raw Wildflower Honey",
    vendor: "Two Bee Apiary",
    price: 12,
    unit: "/ jar",
    grade: "A+",
    description:
      "Unfiltered and unheated, so the pollen and natural enzymes stay intact. Flavor shifts jar to jar depending on what was blooming that week.",
    origin: "Two Bee Apiary, 22 mi away",
  },
  3: {
    id: 3,
    name: "Sourdough Loaf",
    vendor: "Ember & Rye",
    price: 8,
    unit: "/ loaf",
    grade: "A",
    description:
      "48-hour fermented sourdough, baked in small batches each morning. Crackling crust, open crumb, no commercial yeast.",
    origin: "Ember & Rye Bakery, downtown",
  },
  4: {
    id: 4,
    name: "Cultured Butter",
    vendor: "Moss Creek Dairy",
    price: 9.5,
    unit: "/ block",
    grade: "A+",
    description:
      "Cultured for 18 hours before churning, giving it a slightly tangy, deeply rich flavor you won't find in the grocery-aisle stuff.",
    origin: "Moss Creek Dairy, 9 mi away",
  },
};

function BuyNowModal({ product, onClose }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default function ProductDetails({ params }) {
  const { pid } = use(params);
  const product = PRODUCTS[pid];
  const [modalOpen, setModalOpen] = useState(false);

  if (!product) {
    notFound();
  }

  return (
    <main className="relative w-full bg-[#F1E8D6] px-6 py-16 sm:px-12 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#2B2620 0.6px, transparent 0.6px)",
          backgroundSize: "5px 5px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-[#2B2620]/45">
          <Link href="/" className="hover:text-[#2B2620]">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="hover:text-[#2B2620]">Products</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#2B2620]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Image / crate area */}
          <div className="relative flex h-96 items-center justify-center border border-dashed border-[#2B2620]/15 bg-[#FDFBF5]">
            <Package strokeWidth={1} className="h-16 w-16 text-[#2B2620]/15" />
            <div
              className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#A13D2E]/70"
              style={{ transform: "rotate(8deg)" }}
            >
              <span
                className="text-sm font-bold text-[#A13D2E]"
                style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
              >
                {product.grade}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col items-start">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5F6F52]">
              {product.vendor}
            </p>
            <h1
              className="mt-3 text-4xl uppercase text-[#2B2620] sm:text-5xl"
              style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
            >
              {product.name}
            </h1>

            <p
              className="mt-6 text-3xl text-[#2B2620]"
              style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
            >
              ${product.price.toFixed(2)}
              <span className="ml-2 text-base text-[#2B2620]/40">
                {product.unit}
              </span>
            </p>

            <p className="mt-6 max-w-md border-l-2 border-[#2B2620]/15 pl-4 text-sm leading-relaxed text-[#2B2620]/65">
              {product.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wide text-[#2B2620]/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5F6F52]" />
              {product.origin}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="group relative mt-10 flex items-center gap-3 bg-[#2B2620] py-3.5 pl-6 pr-5 text-sm uppercase tracking-wide text-[#F1E8D6] transition-colors duration-200 hover:bg-[#A13D2E]"
              style={{
                clipPath:
                  "polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)",
              }}
            >
              Buy now
              <ArrowRight
                strokeWidth={2}
                className="h-4  w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>

      <BuyNowModal product={modalOpen ? product : null} onClose={() => setModalOpen(false)} />
    </main>
  );
}