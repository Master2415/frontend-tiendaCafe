import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Sobre Nosotros</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 text-lg">
            Bienvenido a <span className="font-bold">Master Coffee</span>, donde la pasión por el café se encuentra con la excelencia.
          </p>
          <p className="mb-4">
            Fundado por <span className="font-bold">Master2415</span>, nuestro objetivo es ofrecer una experiencia única para los verdaderos conocedores del café. Seleccionamos los granos más exquisitos de todo el mundo para llevar a tu taza un sabor inigualable.
          </p>
          <p className="mb-4">
            En Master Coffee, creemos que la calidad no es negociable. Cada lote es tostado con precisión para resaltar sus notas características, asegurando que disfrutes de la perfección en cada sorbo.
          </p>
          <p>
            Gracias por elegirnos. ¡Descubre el arte del buen café con nosotros!
          </p>
        </div>
        <div className="flex justify-center">
             <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-gray-500">Imagen de Master Coffee</span>
             </div>
        </div>
      </div>
    </div>
  );
}
