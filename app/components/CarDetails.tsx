"use client";

import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, Transition, TransitionChild, DialogPanel } from'@headlessui/react';

import { CarProps } from '@/types';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
    imageSrc: string;
}

const CarDetails = ({ isOpen, closeModal, car, imageSrc }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100" leave="ease-in duration-200"
            leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-25">

            </div>
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" 
                enterTo="opacity-100 scale-100" leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
              >
                <DialogPanel 
                  className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl p-6 bg-white text-left shadow-xl transition-all flex flex-col gap-5"
                >
                  <button type="button" onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-light rounded-full"
                  >
                    <Image src="/close.svg" alt="Close" width={20} height={20} className="object-contain" />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg overflow-hidden">
                      <Image src={imageSrc} alt="Car Model" fill priority className="object-contain" />
                    </div>

                    <div className="flex gap-3 *:overflow-hidden">
                      <div className="flex-1 relative w-full h-24 bg-primary-light rounded-lg">
                        <Image src="/angle-29.jpg" alt="Car Model" fill priority className="object-cover" />
                      </div>
                      
                      <div className="flex-1 relative w-full h-24 bg-primary-light rounded-lg">
                        <Image src="/angle-33.jpg" alt="Car Model" fill priority className="object-cover" />
                      </div>
                      
                      <div className="flex-1 relative w-full h-24 bg-primary-light rounded-lg">
                        <Image src="/angle-13.jpg" alt="Car Model" fill priority className="object-contain" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-bold text-center text-xl capitalize">
                        {car.model}
                      </h2>

                      <div className="mt-3 flex flex-wrap gap-4">
                        {Object.entries(car).map(([key, value]) => (
                          <div className="flex justify-between gap-5 w-full text-right" key={key}>
                            <h4 className="text-gray-500 capitalize">
                              {key.split("_").join(" ")}
                            </h4>

                            <p className="text-slate-700 font-semibold">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>

    // <div>
    //   <h2>{car.make} {car.model} Details</h2>
    //   <p>Year: {car.year}</p>
    //   <p>Transmission: {car.transmission === 'a' ? 'Automatic' : 'Manual'}</p>
    //   <p>Drive: {car.drive.toUpperCase()}</p>
    //   <p>City MPG: {car.city_mpg}</p>
    //   <button onClick={closeModal}>Close</button>
    // </div>
  )
}

export default CarDetails;