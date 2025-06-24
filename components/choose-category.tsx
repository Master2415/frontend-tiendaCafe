/* eslint-disable @next/next/no-img-element */ 
// Desactiva una regla ESLint que recomienda usar el componente <Image> de Next.js

"use client"; 
// Indica que este componente debe renderizarse del lado del cliente (Client Component)

import { useGetCategories } from "@/api/getProducts"; 
// Hook personalizado para obtener las categorías desde la API
  
import Link from "next/link"; 
// Componente de Next.js para navegación entre páginas

import { ResponseType } from "@/types/response"; 
// Importa el tipo de respuesta esperada desde la API

import { CategoryType } from "@/types/category"; 
// Importa el tipo de datos de una categoría

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();
  // Llama al hook que obtiene las categorías y desestructura la respuesta en `result` y `loading`
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {/* Contenedor principal con ancho máximo, centrado horizontalmente, padding vertical y horizontal en pantallas grandes */}
      
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu tipo de café favorito
      </h3>
      {/* Título del componente, con padding y tamaño de texto grande */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Contenedor tipo grid que adapta el número de columnas según el tamaño de pantalla */}

        {!loading &&
          result !== null &&
          result.map((category: CategoryType) => (
            // Itera por cada categoría solo si ya cargó la data y no es null

            <Link
              key={category.id}
              href={`/category/${category.attributes.slug}`}
              // Genera un enlace hacia la página de la categoría usando el slug
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <img
                src={`${backendUrl}${category.attributes.mainImage.data.attributes.url}`}
                alt={category.attributes.categoryName}
                // Muestra la imagen principal de la categoría
                className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
              />
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                {category.attributes.categoryName}
              </p>
              {/* Nombre de la categoría mostrado encima de la imagen, con fondo difuminado */}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
// Exporta el componente para poder usarlo en otras partes de la aplicación
