"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="w-full h-24 padding-x absolute z-10">
      <nav className="max-w-[1440px] w-full h-full mx-auto flex justify-between items-center ">
         <Link href="/" className="flex justify-center items-center">
            <Image src="/irover-logo.png" alt="Irover logo" width="118" height="18" className="object-contain"  />
         </Link>
         <CustomButton 
            title="I Like It" 
            containerStyles={`text-primary-color transition-all max-sm:text-sm duration-400 font-bold rounded-full bg-white sm:min-w-[130px] ${toggle ? 'shadow-white shadow-lg' : ''}`}
            handleClick={() => setToggle(!toggle)}
          />
      </nav>
    </header>
  )
}

export default Navbar;