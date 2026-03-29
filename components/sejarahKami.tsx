"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
type Bubble = {
  size: number
  left: number
  duration: number
}
export default function SejarahKami() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const data: Bubble[] = []

    for (let i = 0; i < 50; i++) {
      data.push({
        size: Math.random() * 20 + 10,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 5,
      })
    }

    console.log(Math.random())

    setBubbles(data)
  }, [])

  return (
    <div id="tentangKami" className="w-full border border-red-500 ">



      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 px-6 text-center shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Sigmalinks Research
        </h1>
        <p className="text-lg mt-3 max-w-2xl mx-auto">
          Menavigasi Masa Depan Maritim dan Logistik Global Melalui Riset Berbasis Data
        </p>
      </div>



      {/* Gambar dan Konten */}
      <div className="  bg-gradient-to-br from-blue-50 via-white to-blue-400 flex flex-wrap md:flex-nowrap p-8 items-center gap-8 max-w-7xl mx-auto">
    
        {/* Gambar */}
        <div className="relative  w-[100%] md:w-1/3 h-72 rounded-xl overflow-hidden shadow-md">
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
            SigmaLinks Research adalah lembaga riset independen dan multidisiplin yang berdedikasi untuk menjembatani kesenjangan antara teori akademis dan praktik industri di sektor kemaritiman, transportasi laut, kepelabuhanan, dan logistik.Di tengah dinamika rantai pasok global yang terus berkembang, keputusan yang tepat membutuhkan landasan data yang kuat dan analisis yang tajam. SigmaLinks Research hadir sebagai mitra strategis bagi akademisi, praktisi industri, dan pengambil kebijakan. Kami menggabungkan ketajaman metodologi riset dengan pemahaman mendalam tentang operasional maritim untuk menghasilkan wawasan yang tidak hanya inovatif secara akademis, tetapi juga aplikatif dan berdampak nyata bagi ekosistem logistik yang berkelanjutan.
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

        <div className="  grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Visi */}
          <div className=" z-10 card shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi pusat unggulan (Center of Excellence) riset dan inovasi maritim berbasis data terdepan, yang mentransformasi ketajaman akademis menjadi solusi industri strategis dan kebijakan publik yang berdampak tinggi demi ekosistem logistik global yang berkelanjutan.
            </p>
          </div>

          <div id="Bubble" className=" z-[-10px] absolute top-49 left-0 right-0 h-full  overflow-hidden">
            {bubbles.map((b, i) => (
              <span
                key={i}
                className="absolute bottom-0 bg-blue-600 rounded-full opacity-30 animate-bubble"
                style={{
                  width: b.size,
                  height: b.size,
                  left: `${b.left}%`,
                  animationDuration: `${b.duration}s`,
                }}
              />
            ))}
          </div>

          <div id="Bubble" className=" mt-96 z-0 absolute top-300 left-0 right-0 h-full  overflow-hidden">
            {bubbles.map((b, i) => (
              <span
                key={i}
                className="absolute bottom-0 bg-blue-600 rounded-full opacity-30 animate-bubble"
                style={{
                  width: b.size,
                  height: b.size,
                  left: `${b.left}%`,
                  animationDuration: `${b.duration}s`,
                }}
              />
            ))}
          </div>

          {/* Misi */}
          <div className="bg-white card-dua  shadow-lg rounded-2xl p-8 hover:shadow-xl transition">
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
