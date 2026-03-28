"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function SejarahKami() {
  return (
    <div id="tentangKami" className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 px-6 text-center shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
         Sigmalinks Research
        </h1>
        <p className="text-lg mt-3 max-w-2xl mx-auto">
        Navigating Global the Future of Maritime
        </p>
      </div>

      {/* Gambar dan Konten */}
      <div className="flex flex-wrap md:flex-nowrap bg-white p-8 items-center gap-8 max-w-7xl mx-auto">
        {/* Gambar */}
        <div className="relative w-[100%] md:w-1/3 h-72 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/12.png"
            alt="Logo ATT"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Teks */}
        <div className="w-full text-gray-700">
          <p className=" text-lg ">
             SigmaLinks Research bridges the gap between academic rigor and industry practice, delivering actionable insights for the maritime, port, and transportation sectors
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="bg-gray-50 py-16 px-6 mt-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Visi <span className="text-blue-600">&</span> Misi SigmaLinks Research
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Landasan kami menjadi pusat unggulan (Center of Excellence) riset dan inovasi .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Visi */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
           Menjadi pusat unggulan (Center of Excellence) riset dan inovasi maritim berbasis data terdepan, yang mentransformasi ketajaman akademis menjadi solusi industri strategis dan kebijakan publik yang berdampak tinggi demi ekosistem logistik global yang berkelanjutan.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Misi</h3>
            <ul className="space-y-3 text-gray-700 text-left">
              {[
                "Keunggulan Akademis (Academic Excellence) Meningkatkan kualitas dan kuantitas publikasi ilmiah kemaritiman Indonesia di kancah global melalui pendampingan riset yang ketat, metodologi inovatif, dan kolaborasi dengan institusi internasional bereputasi tinggi.",
                "Inovasi Industri Berbasis Data (Data-Driven Industrial Innovation) Mengembangkan produk dan layanan intelijen maritim mutakhir—seperti pemodelan prediktif dan analitik big data—untuk menjembatani kesenjangan antara teori akademis dan tantangan nyata di sektor pelayaran, pelabuhan, dan logistik.",
                "Pengembangan Ekosistem Talenta (Talent Ecosystem Development) Membangun dan membina komunitas peneliti maritim yang unggul melalui program pelatihan lanjutan, dan kemitraan strategis guna mencetak generasi penerus analis data dan ahli maritim.",
                "Advokasi Kebijakan Berbasis Bukti (Evidence-Based Policy Advocacy) Menjadi mitra strategis bagi pemerintah dan pemangku kepentingan industri dalam merumuskan kebijakan maritim yang berlandaskan data, guna mendorong efisiensi logistik, keselamatan navigasi, dan praktik pengiriman yang berkelanjutan.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-500 w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
