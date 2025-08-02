/* eslint-disable @next/next/no-img-element */
// Permite usar la etiqueta <img> en lugar del componente <Image> de Next.js

import { Expand, ShoppingCart } from "lucide-react";
// Importa iconos de la librería Lucide para mostrar acciones como "ver más" y "agregar al carrito"

import { useRouter } from "next/navigation";
// Hook de Next.js para redirigir programáticamente entre rutas

import Link from "next/link";
// Componente para crear enlaces internos en la app

import { formatPrice } from "@/lib/formatPrice";
// Función para formatear el precio (probablemente a COP, con separador de miles)

import { ProductType } from "@/types/product";
// Tipo de dato que representa un producto (incluye nombre, imágenes, origen, etc.)

import IconButton from "@/components/icon-button";
// Componente de botón con ícono, reutilizable

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// Componentes para mostrar varias imágenes del producto como un carrusel

// Props que recibe este componente
type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props; // Extrae el producto desde las props
  const router = useRouter(); // Instancia para navegación programática

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      // Enlace hacia la página del producto individual
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >
      {/* Contenedor principal con padding y efecto de sombra al pasar el cursor */}

      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        {/* Capa superior con etiquetas sobre la imagen: sabor y origen */}
        
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.taste}
        </p>
        {/* Etiqueta del sabor del café (ej: "Notas a chocolate") */}

        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
          {product.attributes.origin}
        </p>
        {/* Etiqueta del origen del café (ej: "Huila", "Nariño") */}
      </div>

      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-sm"
      >
        {/* Carrusel para mostrar múltiples imágenes del producto */}

        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${image.attributes.url}`}
                alt="Imagen del café"
                className="rounded-xl"
              />
              {/* Imagen del producto en el carrusel */}

              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                {/* Capa que aparece al pasar el cursor sobre la imagen */}

                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() =>
                      router.push(`/product/${product.attributes.slug}`)
                    }
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  {/* Botón para ver detalles del producto */}

                  <IconButton
                    onClick={() => console.log("product")}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                  {/* Botón para agregar al carrito (pendiente de lógica real) */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-2xl text-center">{product.attributes.productName}</p>
      {/* Nombre del café (ej: "Café Orgánico Sierra Nevada") */}

      <p className="font-bold text-center">
        {formatPrice(product.attributes.price)}
      </p>
      {/* Precio del café, ya formateado en pesos colombianos o moneda configurada */}
    </Link>
  );
};

export default ProductCard;
// Exporta el componente para poder reutilizarlo donde se necesite (como en la página de categoría)
