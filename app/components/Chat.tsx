"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import {Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";

import { MessageCard } from '@/components';

const Chat = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [seved, setSeved] = useState("");
    const [theWritten, setTheWritten] = useState("");

    const rangeroverMsg = "Did you like me? 🥹";

    useEffect(() => {
        setSeved( localStorage.getItem("userMessage") || "" );
    },[])

    useEffect(() => {
        if (showAlert) {
          const timer = setTimeout(() => {
            setShowAlert(false);
          }, 5000);
    
          return () => clearTimeout(timer); // Cleanup timer on unmount
        }
      }, [showAlert])

    const chekMsg = (msg: string) => (
        msg.toLowerCase().includes('no')? true : false
    )

    const sendMsg = () => {
        if(!chekMsg(theWritten)){
            localStorage.setItem("userMessage", theWritten);
        }else{
            localStorage.setItem("userMessage", "Yea I really like you dear 🥹");
        }
    }

  return (
    <section className="h-screen w-screen mt-5 relative flex items-center justify-center">
        {/* Background Circle */}
        <div className="h-full w-full absolute -z-10 inset-0">
            <Image
                src="/chat-bg.jpg"
                alt="Range Rover"
                fill
                className="object-cover"
            />
        </div>

        {/* Background Blur */}
        <div className="w-full h-full absolute -z-10 backdrop-blur-xs" />
        {/* Chat Container */}
        <div className="h-screen w-screen sm:w-sm md:h-[96%] [box-shadow:0_0_20px_8px_#fff] sm:shadow-none overflow-hidden sm:rounded-2xl border-4 border-white flex flex-col backdrop-grayscale-100">
            {/* Chat background */}
            <div className="h-screen overflow-hidden w-full inset-0 absolute -z-10 backdrop-blur-sm" >
                <Image
                src="/chat-bg.jpg"
                alt="Range Rover"
                fill
                className="object-cover"
            />
            </div>
            {/* Header Section */}
            <div className="flex justify-between items-center px-4 py-2 bg-white text-primary-color">
                <div className="flex items-center gap-2">
                    <div className="h-16 w-16 rounded-full border-4 border-primary-color relative">
                        <Image
                            src="/chat-bg.jpg"
                            alt="Range Rover"
                            fill
                            className="object-cover inset-0 rounded-full"
                        />
                        <div className='absolute w-[10px] h-[10px] rounded-full bg-green-500 border-[1px] border-white bottom-[2px] right-[2px]'/>
                    </div>
                    <p className='text-primary-color text-lg font-semibold'>Range Rover</p>
                </div>
                <h3 className='text-primary-color text-lg font-bold'>Chat</h3>
            </div>

            {/* Chat Messages Section */}
            <div className="flex-1 ">
                <MessageCard message={rangeroverMsg} fromUser={false} />
                {seved && (
                    <MessageCard message={seved} fromUser={true} />
                )} 
            </div>

            {/* Input Section */}
            <div className="justify-self-end w-full h-18 p-2 gap-1 flex bg-white ">
                <input
                    type="text" 
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-full"  
                    placeholder="Don't even think about writing 'No' "
                    value={theWritten}
                    onChange={(e) => {
                        setTheWritten(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        if(!seved){
                            sendMsg();
                        } else {
                            setShowAlert(true)
                        }
                    }}
                    className="bg-white text-primary-color p-4 rounded-full cursor-pointer"
                >
                    Send
                </button>
            </div>
        </div>

        <div className="w-screen fixed top-0 left-0 flex justify-center">
                <AnimatePresence>
                    {showAlert && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            
                            <Alert className="w-fit h-fit px-6 py-4 mt-6 shadow-lg">
                                <AlertTitle>It is just for fun baby</AlertTitle>
                                <AlertDescription className="font-semibold text-gray-400">Sorry dud this are not social media😅</AlertDescription>
                            </Alert>
                          </motion.div>
                    )}
                </AnimatePresence>
        </div>
    </section>
  )
}

export default Chat;