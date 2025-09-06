import React from 'react'

export default function Techs( {tech} ) {
  return (
    <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-full cursor-pointer">
        <p className="text-sm sm:text-base md:text-lg font-[poppins] font-medium">{tech}</p>
    </div>
  )
}
