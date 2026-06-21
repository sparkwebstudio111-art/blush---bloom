
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#050505] via-[#171717] to-[#6f5312] backdrop-blur-2xl border-b border-yellow-500/20 shadow-[0_10px_40px_rgba(255,193,7,0.12)]">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="flex items-center justify-between h-24">

            {/* ================= LOGO ================= */}

            <NavLink
              to="/"
              className="flex items-center gap-3 group"
            >
              <div
                className=" 
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-yellow-500/20
                  to-amber-500/10
                  border
                  border-yellow-500/20
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-105
                "
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>

    <h1
  className="
    font-['Cormorant_Garamond']
    text-2xl hidden sm:block
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-semibold
    tracking-wide
    text-white
    leading-none
  "
>
  Blush{" "}
  <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
    &
  </span>{" "}
  Bloom
</h1>

<p
  className="
    font-['Poppins']
    text-[8px]
    sm:text-[9px]
    md:text-[10px]
    lg:text-xs
    uppercase
    tracking-[3px]
    sm:tracking-[4px]
    md:tracking-[5px]
    lg:tracking-[6px]
    text-yellow-200/70
    mt-1 hidden sm:block
  "
>
  Luxury Beauty Studio
</p>

              </div>

            </NavLink>

            {/* ================= DESKTOP MENU ================= */}

            <div
              className="
                hidden
                md:flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-500/10
                bg-white/5
                backdrop-blur-xl
                p-2
                shadow-[0_10px_30px_rgba(255,193,7,0.08)]
              "
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                      relative
                      px-6
                      py-3
                      rounded-full
                      font-['Poppins']
                      text-[15px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
                          : "text-gray-300 hover:text-yellow-300"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {!isActive && (
                        <span
                          className="
                            absolute
                            left-1/2
                            -translate-x-1/2
                            bottom-2
                            h-[2px]
                            w-0
                            bg-yellow-400
                            transition-all
                            duration-300
                            group-hover:w-3/4
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ================= MOBILE BUTTON ================= */}

            <button
              onClick={() => setIsOpen(true)}
              className="
                md:hidden
                w-11
                h-11
                rounded-full
                border
                border-yellow-500/20
                bg-white/5
                flex
                items-center
                justify-center
                transition
                hover:bg-yellow-500
                hover:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>

          </div>

        </div>

      </nav>

      {/* ================= OVERLAY ================= */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* ================= MOBILE DRAWER ================= */}

      <div
       className={`fixed top-0 right-0 h-screen w-[82%] max-w-sm bg-[#111111] border-l border-yellow-500/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
  isOpen ? "translate-x-0" : "translate-x-full"
}`}
      >

        {/* ================= DRAWER HEADER ================= */}

      <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-5 bg-black/30 backdrop-blur-xl border-b border-yellow-500/10">
          <div className="flex items-center gap-3 min-w-0">
<div
  className="
    w-12 h-12
    sm:w-14 sm:h-14
    md:w-16 md:h-16
    rounded-xl sm:rounded-2xl
    bg-gradient-to-br
    from-yellow-500/20
    to-amber-500/10
    border border-yellow-400/20
    flex items-center justify-center
    shadow-lg hidden
    shrink-0
  "
>
  <img
    src={logo}
    alt="Logo"
    className="
      w-6 h-6 
      sm:w-8 sm:h-8
      md:w-10 md:h-10
      object-contain
    "
  />
</div>

            <div className="min-w-0">

            <h2
  className="
    font-['Cormorant_Garamond']
    text-2xl
    sm:text-3xl
    font-semibold
    text-white
    leading-none
  "
>
  Blush & Bloom
</h2>

         <p
  className="
    text-[9px]
    sm:text-[10px]
    uppercase
    tracking-[3px]
    sm:tracking-[5px]
    text-yellow-300/70
    mt-1
  "
>
  Luxury Beauty Studio
</p>

            </div>

          </div>

          <button
            onClick={() => setIsOpen(false)}
           className="
w-11 h-11
rounded-2xl
bg-white/5
border border-white/10
text-white
flex items-center justify-center
transition-all duration-300
hover:bg-yellow-400
hover:text-black
hover:rotate-90
"
          >
            ✕
          </button>

        </div>

        {/* ================= MOBILE NAVIGATION ================= */}

      <div className="px-5 pt-8 pb-40 space-y-3">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
        className={({ isActive }) => `
group
flex
items-center
justify-between
rounded-2xl
px-5
py-4
text-[15px]
sm:text-base
font-medium
transition-all
duration-300

${
  isActive
    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-xl scale-[1.02]"
    : "bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] hover:text-yellow-300"
}
`}
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>

                  {isActive && (
                   <span className="w-2 h-2 rounded-full bg-current">
                      
                    </span>
                  )}
                </>
              )}
            </NavLink>

          ))}

        </div>

       
        {/* ================= BOTTOM LUXURY CARD ================= */}

{/* <div className="absolute bottom-5 left-5 right-5">
          <div
           className="
    rounded-[28px]
    bg-gradient-to-br
    from-yellow-500/15
    via-amber-500/10
    to-black/40
    border border-yellow-500/20
    backdrop-blur-2xl
    p-6
    shadow-2xl
  "
          >
            <p className="text-[10px] uppercase tracking-[5px] text-yellow-300">
  Exclusive Luxury
</p>

           <h3 className="mt-2 font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-white font-semibold">
  Glow With Confidence
</h3>

          <p className="mt-3 text-sm leading-7 text-gray-300">
  Discover premium skincare, bridal artistry, flawless makeup,
  luxury hair styling, and beauty experiences tailored exclusively
  for you.
</p>

       <button
  className="
    mt-5
    w-full
    py-3.5
    rounded-full
    bg-gradient-to-r
    from-yellow-400
    via-amber-400
    to-yellow-500
    text-black
    font-semibold
    transition-all
    duration-300
    hover:scale-[1.03]
    hover:shadow-[0_10px_30px_rgba(250,204,21,0.3)]
  "
>
  Book Appointment
</button>

          </div>

        </div> */}

      </div>

    </>
  );
};

export default Navbar;
