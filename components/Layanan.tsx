"use client";

import {
  Wrench,
  Sparkles,
  Settings,
  ShoppingCart,
  Truck,
  Building2,
  X,
  HomeIcon,
} from "lucide-react";
import React, { useState } from "react";
import PromoPopup from "./Promo";
import PromoPopup2 from "./promo2";
import PromoPopup3 from "./Promo3";

export function LayananKami() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const services = [
    {
      icon: (
        <button onClick={() => setOpen(!open)}>
          {" "}
          <Sparkles className="w-8 h-8 text-white" />
        </button>
      ),
      title: "Pendampingan Artikel Ilmiah Internasional (DOAJ, Copernicus)",
      desc: "Pendampingan intensif untuk publikasi global di indeks menengah seperti DOAJ dan Index Copernicus. Kami membantu menyelaraskan gaya penulisan, novelty, dan argumentasi agar relevan dengan standar internasional.   Manfaat: Memperluas jangkauan pembaca global dan meningkatkan rekam jejak publikasi."
    },
    {
      icon: (
        <button onClick={() => setOpen2(!open2)}>
          {" "}
          <HomeIcon className="w-8 h-8 text-white" />
        </button>
      ),
      title: "Pendampingan Artikel Ilmiah Nasional (SINTA)",
      desc: "Mendampingi peneliti dan akademisi dalam menyusun artikel ilmiah yang memenuhi standar jurnal nasional terakreditasi (SINTA). Kami membantu memastikan struktur, metodologi, dan kedalaman analisis sesuai pedoman publikasi nasional.Manfaat Meningkatkan peluang acceptance dan menghemat waktu penulisan"
    },
    {
      icon: <button onClick={() => setOpen3(!open3)}>
        {" "}
        <Settings className="w-8 h-8 text-white" />
      </button>,
      title: "Pendampingan Artikel Ilmiah Internasional (Scopus & WoS)",
      desc: "Layanan premium untuk menembus jurnal top-tier (Q1-Q4) yang terindeks Scopus dan Web of Science. Kami fokus pada penajaman research gap, metodologi lanjutan, dan tata bahasa akademis internasional.    Manfaat: Memaksimalkan acceptance di jurnal bereputasi tinggi dan meningkatkan sitasi"
    },
    {
      icon: <button onClick={() => setOpen3(!open3)}>
        {" "}
        <Settings className="w-8 h-8 text-white" />
      </button>,
      title: "Pengolahan dan Analisis Data",
      desc: "Bantuan profesional untuk mengolah data mentah menjadi informasi bermakna. Kami menggunakan pendekatan statistik yang tepat untuk memvalidasi hasil penelitian Anda.   Manfaat: Memastikan akurasi hasil dan memperkuat argumentasi ilmiah dengan data yang solid."
    },
    {
      icon: <button onClick={() => setOpen3(!open3)}>
        {" "}
        <Settings className="w-8 h-8 text-white" />
      </button>,
      title: "Penyusunan Code Program Statistika (R)",
      desc: "Pembuatan skrip customized menggunakan bahasa R untuk analisis komputasi tingkat lanjut dan pemodelan statistik yang kompleks. Manfaat: Otomatisasi analisis rumit, meminimalisir human error, dan visualisasi data profesional."
    },
    {
      icon: <button onClick={() => setOpen3(!open3)}>
        {" "}
        <Settings className="w-8 h-8 text-white" />
      </button>,
      title: "Screening Artikel dan Hasil Penelitian",
      desc: "Evaluasi komprehensif terhadap novelty, metode, dan kesesuaian artikel dengan scope jurnal tujuan sebelum proses submit. Manfaat: Mengidentifikasi kelemahan awal dan mengurangi risiko rejection."
    },
    {
      icon: <button onClick={() => setOpen3(!open3)}>
        {" "}
        <Settings className="w-8 h-8 text-white" />
      </button>,
      title: "Konsultasi Kenaikan Jabatan Akademik Dosen",
      desc: "Pendampingan pengajuan kenaikan jabatan sesuai regulasi terbaru (Permen No. 52/2025 & Kepmen No. 39/M/KEP/2026). Kami membantu pemahaman syarat dan penyusunan portofolio. Manfaat: Proses pengajuan lancar, hemat waktu, dan strategi pemenuhan angka kredit yang efektif."
    },
    {
      icon: <button onClick={() => setOpen3(!open3)}>
        {" "}
        <Settings className="w-8 h-8 text-white" />
      </button>,
      title: "Optimasi Tata Bahasa dan Orisinalitas",
      desc: "Layanan pendukung mencakup Grammarly (tata bahasa), Turnitin (cek plagiarisme), dan Paraphrase untuk menyempurnakan naskah Anda. Manfaat: Naskah profesional, 100% bebas plagiarisme, dan memenuhi standar proofreading."
    },
 
   
  ];

  return (
    <section id="layanan" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Layanan <span className="text-blue-600 ">Unggulan Sigmalinks Research</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Sigmalinks Research hadir sebagai mitra terpercaya Anda dalam menghasilkan karya ilmiah berkualitas tinggi dan pengembangan karier akademik. Kami menyediakan layanan komprehensif dengan pendekatan tiga tahap: Screening Awal, Revisi Artikel, dan Submit-Acceptance.

          Berikut adalah layanan profesional yang kami tawarkan:


        </p>

      </div>
    
      {/* Grid Layanan */}
      <div className="grid gap-10 grid-cols-1s md:grid-cols-3 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden"
          >
            {/* BORDER ANIMASI */}
            <div className="absolute inset-0 animate-[spin_5s_linear_infinite] 
      bg-[conic-gradient(from_0deg,transparent,blue,transparent)]">
            </div>

            {/* MASK (biar jadi border, bukan full bg) */}
            <div className="absolute inset-[1.5px] bg-white rounded-xl z-10"></div>

            {/* CONTENT */}
            <div className="relative z-20 p-4 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                {service.icon}
              </div>
              <h2 className="text-sm sm:text-base font-bold text-gray-700 mt-3" >
                {service.title}
              </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-3   ">
  {service.desc}
</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
