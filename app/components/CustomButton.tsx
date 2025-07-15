'use client';

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({title, containerStyles, textStyles, rightIcon,  handleClick, btnType}:CustomButtonProps ) => {
   return (
      <button disabled={false} type={btnType || 'button'} className={`flex flex-row relative justify-center items-center py-2 px-4 sm:py-3 sm:px-6 outline-none cursor-pointer ${containerStyles}`} onClick={handleClick}>
         <span className={`flex-1 ${textStyles}`}>
            {title}
         </span>
         {rightIcon && (
            <div className="relative w-6 h-6">
               <Image
                  src={rightIcon}
                  alt="right icon"
                  fill
                  className="object-contain"
               />
            </div>
         )}
      </button>
   )
}

export default CustomButton;