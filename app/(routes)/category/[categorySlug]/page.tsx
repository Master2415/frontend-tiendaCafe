"use client";
// Indica que este componente se ejecuta en el cliente (necesario para usar hooks como useState, useParams)

import { useGetCategoryProduct } from "@/api/getCategoryProduct";
// Hook personalizado para obtener los productos filtrados por categoría (slug)

import { Separator } from "@/components/ui/separator";
// Componente para mostrar una línea divisoria

import { ResponseType } from "@/types/response";
// Tipo de dato de la respuesta que devuelve la API

import { useParams, useRouter } from "next/navigation";
// Hooks para acceder a los parámetros de la URL y navegar

import FiltersControlsCategory from "./components/filters-controls-category";
// Componente para aplicar filtros (en este caso por origen del café)

import SkeletonSchema from "@/components/skeletonSchema";
// Componente esqueleto que se muestra mientras se carga la información

import ProductCard from "./components/product-card";
// Componente que muestra cada producto individual en forma de tarjeta

import { ProductType } from "@/types/product";
// Tipo de datos de un producto

import { useState } from "react";
// Hook para manejar estados dentro del componente

export default function Page() {
  const params = useParams(); // Obtiene los parámetros de la URL
  const { categorySlug } = params; // Extrae el slug de la categoría (ej. "organico", "huila", etc.)

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  // Llama al hook que obtiene los productos por categoría

  const [filterOrigin, setFilterOrigin] = useState("");
  // Estado para guardar el filtro de origen (ej: "Huila", "Nariño", etc.)

  const router = useRouter(); // Hook para navegación (aunque en este componente no se usa directamente)

  // Filtra los productos por origen si se ha seleccionado uno
  const filteredProducts = result !== null && !loading &&
    (filterOrigin === ""  ? result : result.filter(
          (product: ProductType) => product.attributes.origin === filterOrigin
        ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {/* Contenedor general de la página, con márgenes internos y centrado horizontal */}

      {result !== null && !loading && result.length !== 0 && (
        <h1 className="text-3xl font-medium">
          Café {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      {/* Título dinámico que muestra el nombre de la categoría de café (ej: "Café Orgánico") */}

      <Separator />
      {/* Línea separadora visual */}

      <div className="sm:flex sm:justify-between">
        {/* Distribución en pantalla grande: filtros a la izquierda, productos a la derecha */}

        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
        {/* Componente de filtros que actualiza el estado "filterOrigin" */}

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {/* Grid de productos que se adapta según el tamaño de la pantalla */}

          {loading && <SkeletonSchema grid={3} />}
          {/* Si está cargando, muestra un esqueleto con 3 columnas */}

          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {/* Muestra cada producto filtrado en una tarjeta */}

          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
          {/* Si no hay resultados después de aplicar el filtro, muestra mensaje */}
        </div>
      </div>
    </div>
  );
}
