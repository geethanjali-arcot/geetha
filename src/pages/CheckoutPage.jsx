import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const checkoutData = useMemo(() => {
    if (location.state?.buyNowItem) {
      const item = location.state.buyNowItem;
      const subtotal = Number(item.price) * (item.quantity || 1);

      return {
        items: [{ ...item, quantity: item.quantity || 1 }],
        subtotal,
        platformFee: 0,
        total: subtotal,
        mode: "buyNow",
      };
    }

    if (location.state?.cartItems?.length) {
      return {
        items: location.state.cartItems,
        subtotal: location.state.subtotal || 0,
        platformFee: location.state.platformFee || 0,
        total: location.state.total || 0,
        mode: "cart",
      };
    }

    return null;
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    const orderData = {
      customer: formData,
      items: checkoutData.items,
      subtotal: checkoutData.subtotal,
      platformFee: checkoutData.platformFee,
      total: checkoutData.total,
      orderDate: new Date().toISOString(),
    };

    navigate("/order-success", {
      state: { orderData },
    });
  };

  if (!checkoutData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-[24px] font-bold text-[#0f172a]">
            No checkout data found
          </h2>

          <button
            onClick={() => navigate("/cart")}
            className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-red-700"
          >
            Go To Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] px-4 py-8 md:px-8 lg:py-10">
      <div className="mx-auto max-w-[1320px]">
        <h1 className="mb-8 text-[30px] font-bold leading-tight text-[#0f172a] md:mb-10 md:text-[38px]">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
          <form
            onSubmit={handlePlaceOrder}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-6 text-[24px] font-bold text-[#0f172a] md:mb-8">
              Billing Details
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="h-[54px] rounded-xl border border-gray-300 px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="h-[54px] rounded-xl border border-gray-300 px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="h-[54px] rounded-xl border border-gray-300 px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="h-[54px] rounded-xl border border-gray-300 px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="h-[54px] rounded-xl border border-gray-300 px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="h-[54px] rounded-xl border border-gray-300 px-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
              />
            </div>

            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              rows="6"
              className="mt-5 w-full rounded-xl border border-gray-300 px-4 py-4 text-[15px] text-[#0f172a] outline-none transition placeholder:text-gray-400 focus:border-red-500"
            />

            <button
              type="submit"
              className="mt-7 inline-flex min-w-[190px] items-center justify-center rounded-xl bg-red-600 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-red-700"
            >
              Place Order
            </button>
          </form>

          <div className="h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-6 text-[24px] font-bold text-[#0f172a]">
              Order Summary
            </h2>

            <div className="space-y-5">
              {checkoutData.items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[16px] font-semibold leading-7 text-[#0f172a]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] text-gray-500">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>

                  <p className="shrink-0 text-[16px] font-semibold text-[#0f172a]">
                    ₹{Number(item.price) * item.quantity}
                  </p>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-5">
                <div className="flex items-center justify-between text-[16px]">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-[#0f172a]">
                    ₹{checkoutData.subtotal}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-[16px]">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-semibold text-[#0f172a]">
                    ₹{checkoutData.platformFee}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[18px] font-bold text-[#0f172a]">
                    Total
                  </span>
                  <span className="text-[28px] font-extrabold text-[#0f172a]">
                    ₹{checkoutData.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}