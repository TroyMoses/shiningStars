'use client'

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import BelowHero from "@/components/BelowHero";
import SchoolsPage from "../components/Schools/Schools";
import ScrollToTop from "@/components/ScrollToTop";
import ExploreBugema from "@/components/ExploreBugema";
import { Inter } from "next/font/google";
import Welcome from "@/components/Welcome/Welcome";
import Events from "@/components/Events";
import News from "@/components/News";
import Whatsup from "@/components/whatsup/whatsup";
import Calender from "@/components/calender/calender";
import WebsiteShowcase from "@/components/Welcome/Wel";
import FeatureShowcase from "@/components/Brands";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <BelowHero />
      <Welcome />
      <WebsiteShowcase />
      <ExploreBugema />
      <Events />
      <News />
      {/* <FeatureShowcase /> */}
      <Contact />
      <Whatsup />
      <ScrollToTop />
    </>
  );
}
