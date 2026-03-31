

import React, { useState } from "react";

const offers = [
  {
    id: 1,
    title: "Real Estate Dataset",
    category: "Real Estate",
    tags: ["PROPERTY", "DATA", "LEADS"],
    description:
      "Verified real estate business contacts and property datasets collected by admin.",
    provider: "Justklick Data",
    price: "18,999",
    oldPrice: "24,999",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Hostels Database",
    category: "Hostels",
    tags: ["STAY", "DATA", "CONTACTS"],
    description:
      "Student hostels and PG database with verified details and locations.",
    provider: "Justklick Data",
    price: "2,999",
    oldPrice: "4,499",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Hospitals Data",
    category: "Healthcare",
    tags: ["MEDICAL", "DATA"],
    description:
      "Hospitals and clinics dataset with verified healthcare contacts.",
    provider: "Justklick Data",
    price: "3,499",
    oldPrice: "5,200",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Overseas Consultants Data",
    category: "Overseas",
    tags: ["ABROAD", "STUDY"],
    description:
      "Overseas education consultants and visa services database for outreach.",
    provider: "Justklick Data",
    price: "4,999",
    oldPrice: "6,500",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Education Institutes Data",
    category: "Education",
    tags: ["COLLEGES", "COURSES"],
    description:
      "Schools, colleges, and institutes dataset for marketing and lead generation.",
    provider: "Justklick Data",
    price: "5,499",
    oldPrice: "7,000",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
];

function SpecialOffersSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxStartIndex = offers.length - visibleCount;
  const cardWidth = 100 / visibleCount;

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-4">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#1f2340] sm:text-4xl">
            Featured Datasets
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-sm leading-7 text-[#64748b]">
            Explore admin-collected business data and purchase verified datasets
            across major categories.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${startIndex * cardWidth}%)`,
            }}
          >
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* IMAGE */}
                  <div
                    className={`h-[240px] w-full overflow-hidden ${
                      index % 2 === 0 ? "bg-[#eff6ff]" : "bg-[#fff1f2]"
                    }`}
                  >
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex min-h-[250px] flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                        {offer.category}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-[#1f2340]">
                        {offer.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {offer.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
                              tagIndex % 2 === 0
                                ? "bg-[#eff6ff] text-[#2563eb]"
                                : "bg-[#fee2e2] text-[#ef4444]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-3 text-xs leading-6 text-[#64748b]">
                        {offer.description}
                      </p>

                      <p className="mt-3 text-xs font-semibold text-[#1f2340]">
                        {offer.provider}
                      </p>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-5 flex items-center justify-between">
                      <button className="rounded-lg bg-[#2563eb] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#1d4ed8]">
                        View Dataset
                      </button>

                      <div className="text-right">
                        <span className="text-sm font-semibold text-[#1f2340]">
                          ₹{offer.price}
                        </span>
                        <span className="ml-2 text-xs text-gray-400 line-through">
                          ₹{offer.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
            disabled={startIndex === 0}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
              startIndex === 0
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-[#fecaca] text-[#ef4444] hover:bg-[#fff1f2]"
            }`}
          >
            ←
          </button>

          <button
            onClick={() =>
              setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
            }
            disabled={startIndex === maxStartIndex}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
              startIndex === maxStartIndex
                ? "cursor-not-allowed border-gray-200 text-gray-300"
                : "border-[#bfdbfe] text-[#2563eb] hover:bg-[#eff6ff]"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffersSection;