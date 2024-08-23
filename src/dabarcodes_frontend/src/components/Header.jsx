// import { Link } from "react-router-dom";

// const Header = () => {
//   const navItems = [
//     { label: "Home", route: "/" },
//     { label: "About us", route: "/about" },
//     { label: "Services", route: "/services" },
//     { label: "For retailers", route: "/retailers" },
//     { label: "For suppliers", route: "/suppliers" },
//     { label: "Subscription", route: "/subscription" },
//     { label: "Testimonials", route: "/testimonials" },
//     { label: "Our Partners", route: "/partners" },
//   ];
//   return (
//     <nav className="sticky top-0 left-0 w-full h-[86px] flex items-center justify-between px-[60px] border-b-[2px] border-[#B4B1B4] z-50 ">
//       <div className="absolute inset-0 bg-white z-[-1]"></div>
//       <div className="flex items-center w-[135px] h-[41px] cursor-pointer">
//         <img src="/image.png" alt="Logo" className="w-[135px] h-[41px]" />
//       </div>

// <ul className="hidden   xl:flex gap-[40px] text-[16px] font-roboto font-normal leading-[19.2px] text-left text-black">
//   {navItems.map((el) => (
//     <li key={el.route} className="cursor-pointer ">
//       <Link to={el.route}>{el.label}</Link>
//     </li>
//   ))}
// </ul>

//       <div>
//         <button className="bg-[#0D90C1] ml-[28px] text-white px-[28px] py-[11px] rounded-[5px] ">
//           Login/Signup
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const navItems = [
//     { label: "Home", route: "/" },
//     { label: "About us", route: "/about" },
//     { label: "Services", route: "/services" },
//     { label: "For retailers", route: "/retailers" },
//     { label: "For suppliers", route: "/suppliers" },
//     { label: "Subscription", route: "/subscription" },
//     { label: "Testimonials", route: "/testimonials" },
//     { label: "Our Partners", route: "/partners" },
//   ];

//   // Handler to close the sidebar
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <nav className="sticky top-0 left-0 w-full h-[86px] flex items-center justify-between px-[60px] border-b-[2px] border-[#B4B1B4] z-50">
//       <div className="absolute inset-0 bg-white z-[-1]"></div>
//       <div className="flex items-center w-[135px] h-[41px] cursor-pointer">
//         <img src="/image.png" alt="Logo" className="w-[135px] h-[41px]" />
//       </div>

//       {/* Sidebar for all screens except xl */}
//       <div
//         className={`fixed inset-y-0 right-0 bg-white z-50 border-l border-gray-200 shadow-lg transform ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "block" : "hidden"
//         } w-full sm:w-[40%] md:w-[30%] lg:w-[25%] xl:hidden`}
//         style={{ height: "100vh" }}
//       >
//         <div className="p-4">
//           <button onClick={closeSidebar} className="text-black text-4xl">
//             &times;
//           </button>
//           <ul className="mt-8 text-center sm:text-left  flex flex-col gap-4 text-lg">
//             {navItems.map((el) => (
//               <li key={el.route} className="cursor-pointer">
//                 <Link to={el.route} onClick={closeSidebar}>
//                   {el.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-auto p-4">
//             <button className="bg-[#0D90C1] text-white px-[28px] py-[11px] rounded-[5px] w-full">
//               Login/Signup
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Button to toggle sidebar */}
//       <button
//         onClick={() => setIsSidebarOpen(true)}
//         className="xl:hidden text-black text-4xl"
//       >
//         &#9776;
//       </button>

//       {/* Full navbar for xl screens */}
//       <ul className="hidden xl:flex gap-[40px] text-[16px] font-roboto font-normal leading-[19.2px] text-left text-black">
//         {navItems.map((el) => (
//           <li key={el.route} className="cursor-pointer">
//             <Link to={el.route}>{el.label}</Link>
//           </li>
//         ))}
//       </ul>

//       {/* Button for xl screens */}
//       <div className="hidden xl:flex">
//         <button className="bg-[#0D90C1] ml-[28px] text-white px-[28px] py-[11px] rounded-[5px]">
//           Login/Signup
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref for sidebar element

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About us", route: "/about" },
    { label: "Services", route: "/services" },
    { label: "For retailers", route: "/retailers" },
    { label: "For suppliers", route: "/suppliers" },
    { label: "Subscription", route: "/subscription" },
    { label: "Testimonials", route: "/testimonials" },
    { label: "Our Partners", route: "/partners" },
  ];

  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full h-[86px] flex items-center justify-between lg:px-[60px] border-b-[2px] border-[#B4B1B4] z-50">
      <div className="absolute inset-0 bg-white z-[-1]"></div>
      {/* Button to toggle sidebar */}

      <div className="flex items-center w-[135px] h-[41px] cursor-pointer">
        <img src="/image.png" alt="Logo" className="w-[135px] h-[41px]" />
      </div>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="xl:hidden mr-4 text-black text-4xl"
      >
        &#9776;
      </button>
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 bg-white z-50 border-l border-gray-200 shadow-lg transform ${
          isSidebarOpen
            ? "translate-x-0 scale-100 opacity-100"
            : "translate-x-full scale-95 opacity-100"
        } transition-transform   duration-300 ease-in-out w-full sm:w-[40%] md:w-[50%] lg:w-[45%] xl:hidden `}
        style={{ height: "100vh" }}
      >
        <div className="p-4">
          <button onClick={closeSidebar} className="text-black text-4xl">
            &times;
          </button>
          <ul className="mt-8 text-center sm:text-left flex flex-col gap-4 text-lg ">
            {navItems.map((el) => (
              <li key={el.route} className="cursor-pointer">
                <Link to={el.route} onClick={closeSidebar}>
                  {el.label}
                  <hr className="mt-1 px-16" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-4">
            <button className="bg-[#0D90C1] hover:bg-[#0A6A9A]  text-white px-[28px] py-[11px] rounded-[5px] w-full">
              Login/Signup
            </button>
          </div>
        </div>
      </div>

      {/* Full navbar for xl screens */}
      <ul className="hidden xl:flex gap-[40px] text-[16px] font-roboto font-normal leading-[19.2px] text-left text-black">
        {navItems.map((el) => (
          <li
            key={el.route}
            className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
          >
            <Link to={el.route}>{el.label}</Link>
          </li>
        ))}
      </ul>

      {/* Button for xl screens */}
      <div className="hidden xl:flex">
        <button className="bg-[#0D90C1] hover:bg-[#0A6A9A]  ml-[28px] text-white px-[28px] py-[11px] rounded-[5px]">
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Header;
