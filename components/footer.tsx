// components/Footer.tsx
import React from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-gradient-to-br from-blue-600 to-blue-400 text-white pt-12 pb-6 mt-16 shadow-inner shadow-black/20"
    >
      <div className="w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo & Deskripsi */}
        <div className="space-y-3 flex justify-center items-center flex-col">
          <Image
            src="/images/14.png"
            alt="Logo sigmalinks"
            width={200}
            height={200}
            className="object-contain max-h-60 rounded-lg "
            priority
          />
          <p className="text-sm text-gray-100">
              Sigmalinks Research
          </p>
        </div>

        {/* Admin Kontak */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold underline underline-offset-4 decoration-white/40">
            Admin Kontak
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin: 0878-4181-2901
              </a>
            </li>
           
            <li className="flex items-center gap-2">
              <FaInstagram className="text-green-400" />
              <a
                href="https://facebook.com/atayaagungpratama"
                target="_blank"
                rel="noopener noreferrer"
              >
                SigmalinksResearch
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" />
              <a
                href="mailto:ptatayaagungpratamaesp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               SigmalinksResearch@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Lokasi & Map */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-300" />
            Alamat Kami
          </h3>
          <p className="text-sm text-gray-100">
           Aida Green Residence C4, Sudiang, Makassar
          </p>
          <div className="rounded-xl overflow-hidden border border-white/30 shadow-md">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.76286847727!2d119.45381997324694!3d-5.141834351991667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2d33d7ca299%3A0x1a868188211204c7!2sAida%20Green%20Residence!5e0!3m2!1sen!2sid!4v1774625291166!5m2!1sen!2sid"
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          
          </div>
       
        </div>

        {/* Quotes / Slogan */}
        {/* <div className="space-y-3">
          <h3 className="text-xl font-semibold">🚀 Visi Kami</h3>
          <p className="text-sm italic text-gray-100">
            Menjadi perusahaan service AC terpercaya dan terdepan di Indonesia,
            yang selalu mengutamakan kualitas, inovasi, dan kepuasan pelanggan.
          </p>
        </div> */}

        {/* Marketplace */}
        {/* <div className="space-y-3">
          <h3 className="text-xl font-semibold text-center">Jangkauan Kami</h3>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/shopee.jpg"
                alt="Shopee"
                width={50}
                height={50}
                className="rounded-lg bg-white p-1"
              />
            </a>
            <a
              href="https://tokopedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/tokopedia.png"
                alt="Tokopedia"
                width={80}
                height={80}
                className="rounded-lg bg-white p-1"
              />
            </a>
            <a
              href="https://lazada.co.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/padi.png"
                alt="Lazada"
                width={150}
                height={150}
                className="rounded-lg bg-white p-1"
              />
            </a>
            <a
              href="https://lazada.co.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/prolog.jpg"
                alt="Lazada"
                width={150}
                height={150}
                className="rounded-lg bg-white p-1"
              />
            </a>
          </div>
        </div> */}
      </div>

      {/* Footer bottom */}
      <p className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()}{" "}
        <strong className="text-white">Sigmalinks Research</strong>. All rights
        reserved.
      </p>
    </footer>
  );
}
