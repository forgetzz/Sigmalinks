"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/12.jpeg"
          alt="Inovasi Service AC"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Navigating Global {" "}
          <span className="text-blue-300"> the Future of</span>{" "}
          Maritime
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
        SigmaLinks Research bridges the gap between academic rigor and industry practice, delivering actionable insights for the maritime, port, and transportation sectors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://wa.me/+6287841812901">
            <Button
              size="lg"
              className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              Konsultasi sekarang <FaWhatsapp className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#layanan">
            <Button

              variant="outline"
              size="lg"
              className="text-black border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-xl"
            >
              Lihat Sevice <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
