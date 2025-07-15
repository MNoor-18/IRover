"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";

const TestDriveBooking = () => {

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showAlert])

  return (
    <div className="bg-gray-50 sm:w-lg sm:rounded-xl p-8 shadow-lg my-16 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-primary-color mb-2">Book a Test Drive</h2>
      <p className="mb-4 text-gray-600">Experience true luxury — reserve your spot now</p>
      <form onSubmit={(e) => {
          e.preventDefault();
          setShowAlert(true)
        }}
        className="flex flex-col gap-3 items-center sm:flex-row sm:justify-center"
      >
        <input
          name="phone"
          type="tel"
          placeholder="05xxxxxxxx"
          required
          pattern="[0-9]{10}"
          className="px-2 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 w-78 sm:w-64"
        />
        <button
          type="submit"
          className="bg-primary-color text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-gray-800 transition"
        >
          Book Now
        </button>
      </form>

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
            <AlertTitle>Booking Confirmed!</AlertTitle>
            <AlertDescription className="font-semibold text-gray-400">Success! But not really. This is just a mockup 😅</AlertDescription>
          </Alert>
          </motion.div>
      )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default TestDriveBooking;