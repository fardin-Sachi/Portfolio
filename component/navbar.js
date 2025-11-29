"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    id: 1,
    title: "About",
    path: "#about",
  },
  {
    id: 2,
    title: "Experience",
    path: "#experience",
  },
  {
    id: 3,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 4,
    title: "Education",
    path: "#education",
  },
  {
    id: 5,
    title: "Skills",
    path: "#skills",
  },
  {
    id: 6,
    title: "Certification",
    path: "#certification",
  },
  {
    id: 7,
    title: "Activities",
    path: "#activities",
  },
  // {
  //     title: "Contact Me",
  //     path: "#contact",
  // },
  {
    id: 8,
    title: "Resume",
    path: "https://drive.google.com/file/d/16OtUnClwn8gfM5tSQnIvr3hTpO5dsN8k/view?usp=sharing",
  },
];
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // const clickedInsideDropdownBars = document.getElementById("dropped_bars")
      // ?.contains(event.target)

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="fixed top-0 z-50 w-full lg:backdrop-blur-lg">
      <nav className="py-4 px-6 sm:px-8 md:px-10">

        <div ref={dropdownRef} className="lg:hidden absolute top-5 right-8">
          <button
            className={`text-2xl font-bold cursor-pointer transform transition-transform duration-500 ${
              isDropdownOpen ? `rotate-90` : `rotate-0`
            }`}
            onClick={() => setIsDropdownOpen((prevState) => !prevState)}
          >
            ☰
          </button>

          {/* Dropdown menu for small screens */}
          {isDropdownOpen && (
            <div className="absolute top-8 right-1 w-auto bg-white shadow-lg rounded-lg py-4 px-6">
              <ul className="flex flex-col gap-y-2 w-full ">
                {navItems.map((item) => (
                  <Link href={item.path} key={item.id}>
                    <li
                      className="text-center font-[pT_Serif_Caption] font-medium text-md hover:bg-gray-100 py-2 cursor-pointer"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Horizontal menu for larger screens */}
        <div className="hidden lg:flex justify-center">
          <ul className="flex gap-x-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-lg font-[pT_Serif_Caption] font-semibold hover:scale-120 transition-transform duration-200"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
