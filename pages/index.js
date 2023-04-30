import Image from "next/image";
import { Inter } from "next/font/google";
import SEOHead from "../components/SEO/SEOHead";
import globalMeta from "../globalMeta";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const structuredLd = JSON.stringify({
    "@context": globalMeta.canonicalUrl + "/",
    description:
      "Sixteen Sands is the premier provider of unmanned vehicle and satellite image-based agricultural data insights.",
  });

  return (
    <>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="SixteenSands | Home "
        description="Sixteen Sands is the premier provider of unmanned vehicle and satellite image-based agricultural data insights."
        ogType="website"
      />
      <main>
        <Header />
        <Hero />
      </main>
    </>
  );
}
