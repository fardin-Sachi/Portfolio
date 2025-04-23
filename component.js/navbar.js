"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const navItems = [
    // {
    //     title: "Home",
    //     path: "/",
    // },
    // {
    //     title: "About",
    //     path: "#about",
    // },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Education",
        path: "#education",
    },
    {
        title: "Skills",
        path: "#skills",
    },
    {
        title: "Activities",
        path: "#activities",
    },
    {
        title: "Certification",
        path: "#certification",
    },
    // {
    //     title: "Contact Me",
    //     path: "#contact",
    // },
    {
        title: "Resume",
        path: "https://drive.google.com/file/d/1xuE2z4uBoFkh6ayIMs9KpXpu0IkGX7cl/view?usp=sharing",
    },

]
export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            // const clickedInsideDropdownBars = document.getElementById("dropped_bars")
            // ?.contains(event.target)

            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    const id = entry.target.id
                    window.history.replaceState(null, null, `#${id}`)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.6,
        })
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section))

        return() => {
            observer.disconnect()
        }
    }, [])
  return (
    <header className="fixed top-0 z-50 w-full lg:backdrop-blur-lg">
        <nav className="py-4 px-6 sm:px-8 md:px-10">
            <div className="lg:hidden flex justify-end">
                <button
                    className={`text-xl font-bold cursor-pointer transform transition-transform duration-500 ${isDropdownOpen? `rotate-90` : `rotate-0`}`}
                    onClick={() => setIsDropdownOpen((prevState) => !prevState) }
                >
                    ☰
                </button>
            </div>

            {/* Dropdown menu for small screens */}
            {isDropdownOpen && (
                <div 
                    ref={dropdownRef} 
                    className="lg:hidden absolute top-14 right-4 w-auto bg-white shadow-lg rounded-lg py-4 px-6"
                >
                    <ul 
                        // id="dropped_bars" 
                        className="flex flex-col gap-y-2"
                    >
                        <Link 
                            href="/" 
                            onClick={() => setIsDropdownOpen(false)} className="cursor-pointer"
                        >
                            <li className="text-center font-[pT_Serif_Caption] font-medium text-md hover:bg-gray-100 py-2">
                                About me
                            </li>
                        </Link>
                        {navItems.map((item) => (
                            <Link 
                                key={item.title} 
                                href={item.path} 
                                onClick={() => setIsDropdownOpen(false)}>
                                <li
                                    className="text-center font-[pT_Serif_Caption] font-medium text-md hover:bg-gray-100 py-2"
                                >
                                        {item.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}

            {/* Horizontal menu for larger screens */}
            <div className="hidden lg:flex justify-center">
                <ul className="flex gap-x-10">
                    {navItems.map(item => 
                        <li key={item.title} 
                            className="text-lg font-[pT_Serif_Caption] font-semibold hover:scale-120 transition-transform duration-200">
                            <Link href={item.path}>
                                    {item.title}
                            </Link>
                    </li>
                    )}
                </ul>
            </div>
        </nav>
    </header>
  )
}
