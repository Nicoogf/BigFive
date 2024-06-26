import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Faatures";
import Faqs from "./components/Faqs";
import Pricing from "./components/Pricing";
import Cta from "./components/cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
        <Navbar />
        <Hero />
        <div className="px-[20px] lg:container lg:px-20 mx-auto ">
         <Features />
         <Faqs />
         <Pricing />
         <Cta />
         <Footer />
        </div>
       
    </main>
  );
}
