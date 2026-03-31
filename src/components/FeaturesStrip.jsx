


function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex w-full items-start gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
      
      {/* ICON */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e6f0fb] text-[#1e3a8a]">
        {icon}
      </div>

      {/* TEXT */}
      <div className="pt-1">
        <h4 className="mb-1 text-[15px] font-semibold text-[#1f2340]">
          {title}
        </h4>

        <p className="max-w-[260px] text-[13px] leading-6 text-[#64748b]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesStrip() {
  const features = [
    {
      id: 1,
      title: "Fast Data Delivery",
      description: "Instant access to purchased datasets",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Secure Payments",
      description: "Safe and encrypted transactions",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4zm-1 10l-2-2-1.5 1.5L11 15l6-6-1.5-1.5L11 12z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Premium Data",
      description: "High-quality verified business datasets",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21h4V10H2v11zm7 0h9a3 3 0 001.8-5.4l-1.2-.9a3 3 0 00-1.8-.6H14V7.5A2.5 2.5 0 0011.5 5L9 10v11z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Admin Verified",
      description: "All datasets are collected & verified by admin",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="my-16">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <FeatureItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}