"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { footerLinks } from "@/constants";

const Footer = () => {
  const [showDeveloperDetails, setShowDeveloperDetails] = useState(false);

  return (
    <footer className='flex flex-col mt-5 text-slate-900 border-t border-gray-100'>
      <div className="flex flex-col lg:flex-row flex-wrap items-center md:items-start justify-between gap-5 px-6 md:px-16 py-3 ">

        <div className="w-fit lg:max-w-1/3 flex flex-col lg:mb-5 sm:flex-row md:flex-col justify-start items-center sm:items-start gap-6">
          <Image src="/irover-logo.png" alt="I rover logo" width={118} height={18} className="object-contain" />
          <div>
            <h3 className="text-center sm:text-start text-lg font-bold mb-2">Range Rover Experience</h3>
            <p className="text-center sm:text-start text-base text-gray-700">
              Independent project — not affiliated with Land Rover or Jaguar Land Rover.
            </p>
          </div>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title}  className="footer__link">
              <h3 className="font-bold">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} onClick={() => {
                  if(item.title === "Developer"){
                    setShowDeveloperDetails(true);
                  }
                }} className="text-gray-500">{item.title}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center md:justify-between flex-wrap mt-5 border-t border-gray-100 sm:px-16 px-6 py-10 ">
        <p>@2025 I ROVER. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">Privacy Policy</Link>
          <Link href="/" className="text-gray-500">Terms of Use</Link>
        </div>
      </div>

      {showDeveloperDetails && (
        <div
        onClick={() => setShowDeveloperDetails(false)}
        className="w-screen h-screen z-[9999] fixed top-0 left-0 backdrop-blur-xs max-md:px-5 flex justify-center items-center"
        >
          {/* Developer Card */}
          <div onClick={(e) => e.stopPropagation()} className="w-full md:w-lg relative bg-white rounded-2xl p-6 shadow-lg">
            {/* CLOSE BOTTUN */}
            <button type="button" onClick={() => setShowDeveloperDetails(false)}
              className="absolute top-2 right-2 z-[10000] w-fit p-2 bg-primary-light rounded-full"
            >
              <div className="h-4 w-4 relative rounded-full">
               <Image src="/close.svg" alt="Close" fill className="object-contain" />
              </div>
            </button>

            {/* HEADER SIDE */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 relative overflow-hidden rounded-full border-[3px] border-purple-700">
                <Image src="/dev_avatar.jpg" alt="Avatar" fill />
              </div>
              <h3 className="text-lg font-semibold capitalize">mohammed noor</h3>
            </div>

            <hr className="border-gray-300 my-4" />
            {/* BODY SIDE */}
            <div className="text-gray-500 capitalize">
              <p>
                This website is an independent project created to showcase the design and features of the Range Rover. It is not affiliated with Land Rover or Jaguar Land Rover Limited.
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  )
}

export default Footer;