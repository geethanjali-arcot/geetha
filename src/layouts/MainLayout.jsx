

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewsletterBanner from "../components/NewsletterBanner";

export default function MainLayout() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <Navbar />

      {/* Middle content */}
      <section className="mx-auto max-w-[1300px] px-4 pt-6">
        <Outlet />
      </section>

    
        <div className="mx-auto max-w-[1350px] px-4">
          <NewsletterBanner />
        </div>
    </main>
  );
}