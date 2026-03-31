
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getCartCount } from "../utils/cart";
// import { getWishlistCount } from "../utils/cart";
// import {
//   Search,
//   ShoppingCart,
//   User,
//   MapPin,
//   ChevronDown,
//   Heart,
// } from "lucide-react";

// export default function Navbar() {
//   const [location, setLocation] = useState("Hyderabad");
//   const [open, setOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [wishlistCount, setWishlistCount] = useState(getWishlistCount());
//   const [cartCount, setCartCount] = useState(getCartCount());
//   const [langOpen, setLangOpen] = useState(false);
//   const [language, setLanguage] = useState("EN");

//   const navigate = useNavigate();

//   const categories = [
//     "Real Estate",
//     "Hospitals",
//     "Hostels",
//     "Education",
//     "Overseas",
//   ];

//   const locations = [
//     "Hyderabad",
//     "Vijayawada",
//     "Guntur",
//     "Warangal",
//     "AP & Telangana",
//   ];

//   const languages = ["EN", "HI", "TE"];

//   useEffect(() => {
//     const updateCartCount = () => {
//       setCartCount(getCartCount());
//     };

//     window.addEventListener("cartUpdated", updateCartCount);

//     return () => {
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(`/datasets?search=${search}`);
    
//   };

//   useEffect(() => {
//   const updateWishlist = () => {
//     setWishlistCount(getWishlistCount());
//   };

//   window.addEventListener("wishlistUpdated", updateWishlist);

//   return () => {
//     window.removeEventListener("wishlistUpdated", updateWishlist);
//   };
// }, []);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#0f1535] text-white shadow-lg">
//       <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-lg font-black">
//             JK
//           </div>
//           <div>
//             <h1 className="text-[18px] font-black">Justklick</h1>
//             <p className="text-[11px] text-gray-300">Business Data Platform</p>
//           </div>
//         </Link>

//         {/* LOCATION */}
//         <div className="relative hidden md:block">
//           <button
//             type="button"
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-2 rounded-xl bg-[#1b2452] px-3 py-2 text-sm"
//           >
//             <MapPin size={16} />
//             {location}
//             <ChevronDown size={14} />
//           </button>

//           {open && (
//             <div className="absolute mt-2 w-44 rounded-xl bg-white py-2 text-black shadow-xl">
//               {locations.map((loc) => (
//                 <button
//                   key={loc}
//                   type="button"
//                   onClick={() => {
//                     setLocation(loc);
//                     setOpen(false);
//                   }}
//                   className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                 >
//                   {loc}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* SEARCH */}
//         <form
//           onSubmit={handleSearch}
//           className="hidden flex-1 items-center md:flex"
//         >
//           <div className="flex w-full items-center rounded-2xl bg-white px-3 shadow-sm">
//             <Search size={18} className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search datasets (builders in Hyderabad, hospitals...)"
//               className="w-full bg-transparent px-2 py-3 text-sm text-black outline-none"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </form>

//         {/* RIGHT SIDE ICONS */}
//         <div className="flex items-center gap-3">
//           {/* FAVOURITES */}
//           <Link
//             to="/wishlist"
//             className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4f6] text-[#1f2937] transition hover:bg-[#e5e7eb]"
//           >
//             <Heart size={20} strokeWidth={2} />
//             <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#ff7a45] px-1 text-[11px] font-semibold text-white">
//               {wishlistCount}
//             </span>
//           </Link>

//           {/* CART */}
//           <Link
//             to="/cart"
//             className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4f6] text-[#1f2937] transition hover:bg-[#e5e7eb]"
//           >
//             <ShoppingCart size={20} strokeWidth={2} />
//             <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#ff7a45] px-1 text-[11px] font-semibold text-white">
//               {cartCount}
//             </span>
//           </Link>

//           {/* USER */}
//           <Link
//             to="/login"
//             className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d1d5db] text-[#374151] transition hover:bg-[#c4c9d1]"
//           >
//             <User size={20} strokeWidth={2} />
//           </Link>

//           {/* LANGUAGE DROPDOWN */}
//           <div className="relative">
//             <button
//               type="button"
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex h-12 items-center gap-2 rounded-2xl bg-[#f3f4f6] px-4 text-sm font-semibold text-[#1f2937] transition hover:bg-[#e5e7eb]"
//             >
//               {language}
//               <ChevronDown size={16} className="text-green-600" />
//             </button>

//             {langOpen && (
//               <div className="absolute right-0 mt-2 w-24 rounded-xl bg-white py-2 text-black shadow-xl">
//                 {languages.map((lang) => (
//                   <button
//                     key={lang}
//                     type="button"
//                     onClick={() => {
//                       setLanguage(lang);
//                       setLangOpen(false);
//                     }}
//                     className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
//                   >
//                     {lang}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* CATEGORY MENU */}
//       <div className="border-t border-[#1d2656]">
//         <div className="mx-auto flex max-w-[1400px] gap-6 overflow-x-auto px-4 py-3">
//           {categories.map((cat) => (
//             <Link
//               key={cat}
//               to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
//               className="whitespace-nowrap text-sm font-medium transition hover:text-red-400"
//             >
//               {cat}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCartCount, getWishlistCount } from "../utils/cart";
import {
  Search,
  ShoppingCart,
  User,
  MapPin,
  ChevronDown,
  Heart,
} from "lucide-react";

export default function Navbar() {
  const [location, setLocation] = useState("Hyderabad");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [wishlistCount, setWishlistCount] = useState(getWishlistCount());
  const [cartCount, setCartCount] = useState(getCartCount());
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navigate = useNavigate();

  const categories = [
    "Real Estate",
    "Hospitals",
    "Hostels",
    "Education",
    "Overseas",
  ];

  const locations = [
    "Hyderabad",
    "Vijayawada",
    "Guntur",
    "Warangal",
    "AP & Telangana",
  ];

  const languages = ["EN", "HI", "TE"];

  useEffect(() => {
    const updateCounts = () => {
      setCartCount(getCartCount());
      setWishlistCount(getWishlistCount());
    };

    updateCounts();

    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("wishlistUpdated", updateCounts);

    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("wishlistUpdated", updateCounts);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/datasets?search=${search}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f1535] text-white shadow-lg">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-lg font-black">
            JK
          </div>
          <div>
            <h1 className="text-[18px] font-black">Justklick</h1>
            <p className="text-[11px] text-gray-300">Business Data Platform</p>
          </div>
        </Link>

        <div className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-xl bg-[#1b2452] px-3 py-2 text-sm"
          >
            <MapPin size={16} />
            {location}
            <ChevronDown size={14} />
          </button>

          {open && (
            <div className="absolute mt-2 w-44 rounded-xl bg-white py-2 text-black shadow-xl">
              {locations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setLocation(loc);
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSearch}
          className="hidden flex-1 items-center md:flex"
        >
          <div className="flex w-full items-center rounded-2xl bg-white px-3 shadow-sm">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search datasets (builders in Hyderabad, hospitals...)"
              className="w-full bg-transparent px-2 py-3 text-sm text-black outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center gap-3">
          <Link
            to="/wishlist"
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4f6] text-[#1f2937] transition hover:bg-[#e5e7eb]"
          >
            <Heart size={20} strokeWidth={2} />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#ff7a45] px-1 text-[11px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4f6] text-[#1f2937] transition hover:bg-[#e5e7eb]"
          >
            <ShoppingCart size={20} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#ff7a45] px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d1d5db] text-[#374151] transition hover:bg-[#c4c9d1]"
          >
            <User size={20} strokeWidth={2} />
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex h-12 items-center gap-2 rounded-2xl bg-[#f3f4f6] px-4 text-sm font-semibold text-[#1f2937] transition hover:bg-[#e5e7eb]"
            >
              {language}
              <ChevronDown size={16} className="text-green-600" />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-xl bg-white py-2 text-black shadow-xl">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setLanguage(lang);
                      setLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-[#1d2656]">
        <div className="mx-auto flex max-w-[1400px] gap-6 overflow-x-auto px-4 py-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
              className="whitespace-nowrap text-sm font-medium transition hover:text-red-400"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}