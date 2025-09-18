'use client';
import React from "react";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  // nav classes
  const navItemClass = "text-white text-xl uppercase font-medium flex justify-center items-center cursor-pointer hover:text-[#FF671D]";

  // footer classes
  const footerItemClass = "col-span-1 flex justify-center items-center cursor-pointer group relative overflow-hidden uppercase text-3xl font-bold px-8 py-4";
  const footerBgClass = "absolute left-0 bottom-0 w-full h-0 bg-[#FF671D] transition-all duration-300 group-hover:h-full z-0";
  const footerTextClass = "text-center relative z-10 transition-colors duration-300 group-hover:text-white";

  return (
    <div className="relative min-h-screen font-poppins">
      {/* BACKGROUND IMAGE + FILTER*/}
      <Image 
        src="/paint.jpg"
        alt="Logo"
        width={10000}
        height={10000}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#323E48] opacity-60 z-0 pointer-events-none" />

      {/* NAV BAR */}
        <nav className="flex w-full transition-all duration-500 min-h-[8vh]">
          <input type="checkbox" id="toggleNav" className="hidden peer" />
            <div className="bg-[#323E48] transition-all duration-500 peer-checked:w-[90%] w-[10%] flex items-center px-8 py-2 overflow-hidden rounded-r-2xl" style={{ minWidth: 0 }} >
              <div className="flex space-x-8 text-white text-sm w-[800px] min-w-max">
                <div className={navItemClass}>Home</div>
                <div className={navItemClass}>About Us</div>
                <div className={navItemClass}>Events & News</div>
                <div className={navItemClass}>Contact Us</div>
                <div className={navItemClass}>NYC</div>
            </div>
            </div>
          <label
            htmlFor="toggleNav" className=" w-[10%] cursor-pointer flex items-center justify-center z-10" style={{ minWidth: '80px' }}>
            <div className="flex justify-center items-center -translate-x-[110%]">
              <Image
                src="/logo2.svg"
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </label>
        </nav>
          

      {/* BODY */}
      {/* <main className="pt-[10vh] pb-[12vh] min-h-[78vh] w-full flex flex-col items-center justify-center">
        <div className="z-10">
        <div className="bg-[#FF671D] flex items-center justify-center p-10 rounded-l-3xl rounded-br-3xl shadow-lg cursor-pointer z-30">
          <Image
              src="/logo-wordmark.svg"
              alt="Logo"
              width={500}
              height={500}
              className="object-contain"
              
            />
        </div>
        <div className="text-white font-bold bg-[#323E48] rounded-b-3xl p-2 pt-3 -translate-y-[20%] z-20">vision</div>
         <div className="text-[#323E48] font-bold bg-white rounded-b-3xl p-2 pt-3 -translate-y-[20%] z-10">mission</div>
        </div>
      </main> */}
      <main className="pt-[10vh] pb-[12vh] min-h-[78vh] w-full flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="bg-[#FF671D] flex items-center justify-center p-10 rounded-l-3xl rounded-br-3xl shadow-lg cursor-pointer z-30">
            <Image
              src="/logo-wordmark.svg"
              alt="Logo"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="text-white font-bold bg-[#323E48] rounded-b-3xl p-4 pt-6 mt-[-15px] w-full shadow-lg z-20 cusror-pointer">
            vision
          </div>
          <div className="text-[#323E48] font-bold bg-white rounded-b-3xl p-4 pt-6 mt-[-20px] w-full shadow-lg z-10 cursor-pointer">
            mission
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 w-full bg-[#323E48] grid grid-cols-3 z-10">
        <div className={footerItemClass}>
          <span className={footerBgClass} />
          <span className={footerTextClass}>creative services</span>
        </div>
        <div className={footerItemClass}>
          <span className={footerBgClass} />
          <span className={footerTextClass}>teen jobs</span>
        </div>
        <div className={footerItemClass}>
          <span className={footerBgClass} />
          <span className={footerTextClass}>take a tour</span>
        </div>
      </footer>
    </div>
  );
}
