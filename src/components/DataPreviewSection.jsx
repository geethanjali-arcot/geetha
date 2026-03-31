import { useState } from "react";
import { Lock, Eye, CheckCircle2 } from "lucide-react";
import { hospitalPreviewData, hospitalFullData } from "../data/hospitalData";

export default function DataPreviewSection() {
  const [showPreview, setShowPreview] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleBuyNow = () => {
    // Here later you can integrate Razorpay / Stripe
    // For now payment success simulation
    alert("Payment successful!");
    setIsPurchased(true);
    setShowPreview(true);
  };

  const tableData = isPurchased ? hospitalFullData : hospitalPreviewData;

  return (
    <section className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-[22px] font-bold text-slate-900">
            Database Preview
          </h2>
          <p className="mt-1 text-[15px] text-slate-600">
            {isPurchased
              ? "Payment completed. Full hospital database is now visible."
              : "Click preview data to view 3 sample records. Purchase to unlock full database."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {!showPreview && (
            <button
              onClick={handlePreview}
              className="inline-flex items-center gap-2 rounded-full bg-[#e8f7ec] px-5 py-3 text-[15px] font-semibold text-green-700 transition hover:bg-[#dff1e5]"
            >
              <Eye size={18} />
              Preview Data
            </button>
          )}

          {!isPurchased && (
            <button
              onClick={handleBuyNow}
              className="inline-flex items-center gap-2 rounded-full bg-[#ef2323] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#d91d1d]"
            >
              <Lock size={18} />
              Buy Now
            </button>
          )}

          {isPurchased && (
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 text-[15px] font-semibold text-green-700">
              <CheckCircle2 size={18} />
              Full Access Enabled
            </div>
          )}
        </div>
      </div>

      {showPreview && (
        <div className="overflow-hidden rounded-[20px] border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-4 text-[14px] font700 font-semibold text-slate-700">
                    Hospital Name
                  </th>
                  <th className="px-4 py-4 text-[14px] font-semibold text-slate-700">
                    City
                  </th>
                  <th className="px-4 py-4 text-[14px] font-semibold text-slate-700">
                    Contact Person
                  </th>
                  <th className="px-4 py-4 text-[14px] font-semibold text-slate-700">
                    Phone
                  </th>
                  <th className="px-4 py-4 text-[14px] font-semibold text-slate-700">
                    Email
                  </th>
                  <th className="px-4 py-4 text-[14px] font-semibold text-slate-700">
                    Category
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-t border-slate-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    <td className="px-4 py-4 text-[14px] font-medium text-slate-900">
                      {item.hospital_name}
                    </td>
                    <td className="px-4 py-4 text-[14px] text-slate-700">
                      {item.city}
                    </td>
                    <td className="px-4 py-4 text-[14px] text-slate-700">
                      {item.contact_person}
                    </td>
                    <td className="px-4 py-4 text-[14px] text-slate-700">
                      {item.phone}
                    </td>
                    <td className="px-4 py-4 text-[14px] text-slate-700">
                      {item.email}
                    </td>
                    <td className="px-4 py-4 text-[14px] text-slate-700">
                      {item.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!isPurchased && (
            <div className="border-t border-slate-200 bg-[#fff4f4] px-5 py-4">
              <p className="text-[14px] font-medium text-red-600">
                Only 3 sample records are visible. Complete payment to unlock the full database.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}