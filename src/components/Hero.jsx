import { useEffect, useState } from "react";

const slides = [
  {
    tag: "REAL ESTATE",
    title: "Find Your Dream Property",
    subtitle: "trusted listings and premium spaces",
    desc: "Explore villas, apartments, open plots, and commercial properties in prime locations.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "HOSTELS",
    title: "Comfortable Hostel Stays",
    subtitle: "safe and affordable rooms",
    desc: "Discover boys hostels, girls hostels, PG rooms, and student stay options near your location.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "OVERSEAS",
    title: "Study Abroad Guidance",
    subtitle: "your journey starts here",
    desc: "Get support for admissions, visas, test preparation, and overseas education planning.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "HOSPITALS",
    title: "Trusted Healthcare Services",
    subtitle: "quality care for every need",
    desc: "Access hospitals, clinics, diagnostics, and health check packages from trusted providers.",
    img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tag: "EDUCATION INSTITUTES",
    title: "Build Your Future",
    subtitle: "schools, colleges, and training",
    desc: "Explore institutes, coaching centres, degree colleges, and professional learning programs.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${
              current === index
                ? "translate-x-0 scale-110"
                : "translate-x-4 scale-100"
            }`}
          />

          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

          <div className="relative flex h-full flex-col justify-center px-12 py-10 text-white">
            <div className="max-w-lg space-y-4">
              <p
                className={`text-sm tracking-[4px] text-green-300 transition-all duration-700 ${
                  current === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {slide.tag}
              </p>

              <h1
                className={`text-[52px] font-semibold leading-tight transition-all duration-700 delay-100 ${
                  current === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {slide.title}
              </h1>

              <p
                className={`text-[20px] text-gray-200 transition-all duration-700 delay-200 ${
                  current === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {slide.subtitle}
              </p>

              <p
                className={`text-sm leading-relaxed text-gray-300 transition-all duration-700 delay-300 ${
                  current === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {slide.desc}
              </p>

              <div
                className={`mt-6 flex items-center gap-4 transition-all duration-700 delay-500 ${
                  current === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <button className="rounded-xl bg-[#16a34a] px-6 py-3 text-white shadow-md transition hover:bg-[#15803d]">
                  Explore now →
                </button>

                <button className="rounded-xl border border-white/40 px-6 py-3 text-white transition hover:bg-white/10">
                  View all categories
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-12 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}