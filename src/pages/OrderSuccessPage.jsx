// import { useLocation, useNavigate } from "react-router-dom";

// export default function OrderSuccessPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const orderData = location.state?.orderData;

//   if (!orderData) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
//         <div className="rounded-2xl bg-white p-8 text-center shadow-md">
//           <h2 className="text-2xl font-bold text-[#0f172a]">
//             No order found
//           </h2>
//           <button
//             onClick={() => navigate("/")}
//             className="mt-5 rounded-lg bg-red-600 px-5 py-3 text-white"
//           >
//             Go Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
//       <div className="w-full max-w-[700px] rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
//         <h1 className="text-3xl font-extrabold text-green-600">
//           Order Placed Successfully
//         </h1>

//         <p className="mt-3 text-slate-600">
//           Thank you, {orderData.customer.fullName}. Your order has been placed.
//         </p>

//         <div className="mt-6 rounded-xl bg-slate-50 p-5">
//           <h2 className="mb-4 text-xl font-bold text-[#0f172a]">
//             Customer Details
//           </h2>
//           <p><strong>Name:</strong> {orderData.customer.fullName}</p>
//           <p><strong>Email:</strong> {orderData.customer.email}</p>
//           <p><strong>Phone:</strong> {orderData.customer.phone}</p>
//           <p><strong>Address:</strong> {orderData.customer.address}</p>
//           <p>
//             <strong>City/State:</strong> {orderData.customer.city},{" "}
//             {orderData.customer.state} - {orderData.customer.pincode}
//           </p>
//         </div>

//         <div className="mt-6 rounded-xl bg-slate-50 p-5">
//           <h2 className="mb-4 text-xl font-bold text-[#0f172a]">
//             Ordered Items
//           </h2>

//           {orderData.items.map((item) => (
//             <div
//               key={item.id}
//               className="mb-3 flex items-center justify-between border-b border-slate-200 pb-3"
//             >
//               <div>
//                 <p className="font-semibold text-[#0f172a]">{item.name}</p>
//                 <p className="text-slate-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//               <p className="font-bold text-[#0f172a]">
//                 ₹{item.price * item.quantity}
//               </p>
//             </div>
//           ))}

//           <div className="mt-4 flex items-center justify-between text-xl font-bold text-[#0f172a]">
//             <span>Total</span>
//             <span>₹{orderData.total}</span>
//           </div>
//         </div>

//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
//         >
//           Back To Home
//         </button>
//       </div>
//     </div>
//   );
// }

import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-[#0f172a]">
            No order found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-5 rounded-lg bg-red-600 px-5 py-3 text-white"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
      <div className="w-full max-w-[700px] rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-extrabold text-green-600">
          Order Placed Successfully
        </h1>

        <p className="mt-3 text-slate-600">
          Thank you, {orderData.customer.fullName}. Your order has been placed.
        </p>

        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <h2 className="mb-4 text-xl font-bold text-[#0f172a]">
            Customer Details
          </h2>
          <p><strong>Name:</strong> {orderData.customer.fullName}</p>
          <p><strong>Email:</strong> {orderData.customer.email}</p>
          <p><strong>Phone:</strong> {orderData.customer.phone}</p>
          <p><strong>Address:</strong> {orderData.customer.address}</p>
          <p>
            <strong>City/State:</strong> {orderData.customer.city},{" "}
            {orderData.customer.state} - {orderData.customer.pincode}
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <h2 className="mb-4 text-xl font-bold text-[#0f172a]">
            Ordered Items
          </h2>

          {orderData.items.map((item) => (
            <div
              key={item.slug}
              className="mb-3 flex items-center justify-between border-b border-slate-200 pb-3"
            >
              <div>
                <p className="font-semibold text-[#0f172a]">{item.title}</p>
                <p className="text-slate-500">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <p className="font-bold text-[#0f172a]">
                ₹{Number(item.price) * item.quantity}
              </p>
            </div>
          ))}

          <div className="mt-4 flex items-center justify-between text-xl font-bold text-[#0f172a]">
            <span>Total</span>
            <span>₹{orderData.total}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}