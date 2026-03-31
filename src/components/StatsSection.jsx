
import {
  Database,
  FolderKanban,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: (
        <div className="rounded-full bg-[#eff6ff] p-4">
          <Database className="h-8 w-8 text-[#2563eb]" />
        </div>
      ),
      value: "12,500+",
      label: "Verified Data Records",
    },
    {
      icon: (
        <div className="rounded-full bg-[#fff1f2] p-4">
          <FolderKanban className="h-8 w-8 text-[#ef4444]" />
        </div>
      ),
      value: "320+",
      label: "Datasets Available",
    },
    {
      icon: (
        <div className="rounded-full bg-[#eff6ff] p-4">
          <ShieldCheck className="h-8 w-8 text-[#2563eb]" />
        </div>
      ),
      value: "100%",
      label: "Admin Verified Data",
    },
    {
      icon: (
        <div className="rounded-full bg-[#fff1f2] p-4">
          <ShoppingCart className="h-8 w-8 text-[#ef4444]" />
        </div>
      ),
      value: "1,850+",
      label: "Dataset Purchases",
    },
    {
      icon: (
        <div className="rounded-full bg-[#eff6ff] p-4">
          <Users className="h-8 w-8 text-[#2563eb]" />
        </div>
      ),
      value: "950+",
      label: "Active Buyers",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#1f2340] sm:text-4xl">
            Platform Highlights
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-sm leading-7 text-[#64748b]">
            Explore trusted datasets collected and verified by admin for users
            to browse, purchase, and use for business growth.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 text-center md:grid-cols-3 lg:grid-cols-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-[20px] border border-[#e2e8f0] bg-white px-4 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4">{item.icon}</div>

              <h2 className="text-[24px] font-bold text-[#1f2340] md:text-[28px]">
                {item.value}
              </h2>

              <p className="mt-2 text-[14px] font-medium text-[#64748b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}