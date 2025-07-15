import { Navbar, Hero, AboutCar, Chat, SelectModel, TestDriveBooking, Footer } from "@/components";

export default function Home() {

  return (
    <main className="overflow-x-hidden scroll-smooth overWidth ">
      <Navbar />
      <Hero />
      <AboutCar  />
      <Chat  />
      <SelectModel  />
      <TestDriveBooking  />
      <Footer  />
    </main>
  );
};