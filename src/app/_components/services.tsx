"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal. Corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duartion: "1h",
      price: "R$50",
      icon: <Scissors />,
      linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações."
  },
  {
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duartion: "1h",
    price: "R$45",
    icon: <Syringe />,
    linkText: "Olá, vi no site sobre consulta veterinária e gostaria de mais informações."
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais,",
    duartion: "2h",
    price: "R$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre táxi pet e gostaria de mais informações."
  },
  {
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros e confortáveis.",
    duartion: "A Combinar",
    price: "A Combinar",
    icon: <Hotel />,
    linkText: "Olá, vi no site sobre hotel para pets e gostaria de mais informações."
  },
];

export function Services() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel ({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  }); 
  
  return(
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold mb-12">
          Serviços
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div>
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1 select-none">{item.title}</h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}