import React from "react";
import { Timeline } from "./ui/Timeline";


export function Roadmap() {
  const data = [
    {
      title: "2026-2027",
      content: (
        <div>
          <h1 className="mb-8 text-md font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            Fondasi & Validasi
          </h1>
          <h1 className="mb-8 text-md font-normal text-neutral-800 md:text-md dark:text-neutral-200">
           Membangun kredibilitas akademis dan infrastruktur riset
          </h1>

        </div>
      ),
    },
    {
      title: "2028-2029",
      content: (
        <div>
          <h1 className="mb-8 text-md font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            Integrasi dan Pilot
          </h1>
          <h1 className="mb-8 text-md font-normal text-neutral-800 md:text-md dark:text-neutral-200">
          Transformasi riset menjadi sistem oprasional real-time
          </h1>
      
        </div>
      ),
    },
    {
      title: "2030-2031",
      content: (
        <div>
          <h1 className="mb-4 text-md font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            Ekspansi platfrom 
          </h1>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-md text-neutral-700 md:text-md dark:text-neutral-300">
            Skalabilitas platform keseluruh perairan nasional
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
        
          </div>
        </div>
      ),
    },
    {
      title: "2032-2033",
      content: (
        <div>
          <h1 className="mb-4 text-md font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            Advanced analytics
          </h1>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-md text-neutral-700 md:text-md dark:text-neutral-300">
              Implementasi ai dan membangun ekosistem digital terintegrasi
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          
          </div>
        </div>
      ),
    },
    {
      title: "2034-2035",
      content: (
        <div>
          <h1 className="mb-4 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Center of excellence
          </h1>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-md text-neutral-700 md:text-md dark:text-neutral-300">
            Konsolidasi posisi sebagai pusat keunggulan maritim global
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="Roadmap" className="relative w-full overflow-clip">
        <h1 className=" text-center text-2xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
        Roadmap <span className="text-blue-600">Sigmalinks Research</span>
        </h1>
      <Timeline data={data} />
    </div>
  );
}