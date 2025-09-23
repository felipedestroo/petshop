import golden from "@/../public/imagens/golden.png";
import royal from "@/../public/imagens/royal.png";
import primier from "@/../public/imagens/primier.png";
import whiskas from "@/../public/imagens/whiskas.png";
import natural from "@/../public/imagens/natural.png";
import pedrigree from "@/../public/imagens/pedigree.png";
import Image from "next/image";
import { InstagramLogoIcon, TiktokLogoIcon, WhatsappLogoIcon, FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr";

const brands = [
  {name: "Royal Canin", logo: royal},
  {name: "Golden", logo: golden},
  {name: "Primier", logo: primier},
  {name: "Formula Natural", logo: natural},
  {name: "Whiskas", logo: whiskas},
  {name: "Pedrigree", logo: pedrigree},
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">Nossos parceiros</h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center" data-aos="flip-up">
                <Image 
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 mt-5 flex justify-around">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Petshop</h3>
              <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação.</p>
              <a 
                href="#"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5"/>
                Contato via Whatsapp
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
              <p>Endereço: Praça da República, 000 - São Paulo | SP</p>
              <p>Telefone: (00) 12345-6789</p>
              <p>Email: felipedestrodev@gmail.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#">
                  < InstagramLogoIcon className="w-8 h-8"/>
                </a>
                <a href="#">
                  < TiktokLogoIcon className="w-8 h-8"/>
                </a>
                <a href="#">
                  < FacebookLogoIcon className="w-8 h-8"/>
                </a>
              </div>
            </div>
        </footer>
        <div className="border-t border-white/20 pt-8 flex justify-center">
            <p>
              © Felipe Destro - 2025. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </section>
  );
}