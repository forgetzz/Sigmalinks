import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import { LayananKami } from "@/components/Layanan";

import Navbar from "@/components/navbar";
import { Roadmap } from "@/components/Roadmap";

import SejarahKami from "@/components/sejarahKami";
import Team from "@/components/Team";


export default function Home() {
  return (
    // We'll wrap everything in a div that sets the overall page background
    // and adds a bit of top padding to ensure content isn't right at the edge of the browser.
    <div className=" bg-gradient-to-br from-blue-300 via-white to-blue-600 min-h-screen">
      <Navbar /> {/* Navbar typically has its own styling */}
      <main>
        {" "}
        {/* Use <main> for semantic content */}
        {/* Each section component should ideally manage its own internal padding */}
        <HeroSection />
        {/* Adding margin between sections for visual separation */}
        <div className=" px-1">
          {" "}
          {/* Adjust this margin as needed */}
          <SejarahKami />
        </div>
        <div className="px-1">
          {" "}
          {/* Adjust this margin as needed */}
          <LayananKami />
        </div>
        <div className=" px-1">
          {" "}
          {/* Adjust this margin as needed */}
          <Roadmap />
        </div>
        <div className="px-1">
          {" "}
          {/* Adjust this margin as needed */}
       <Team/>
        </div>




      </main>
      <Footer />
    </div>
  );
}
