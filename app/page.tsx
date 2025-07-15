import { Navbar, Hero, AboutCar, Chat, SelectModel, TestDriveBooking, Footer } from "@/components";

export default async function Home() {

  await new Promise((res) => setTimeout(res, 3000));

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