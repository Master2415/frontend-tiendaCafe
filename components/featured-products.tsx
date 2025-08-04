/* eslint-disable @next/next/no-img-element */ // Desactiva advertencia por usar <img> en lugar de <Image> de Next.js
"use client"; // Indica que este componente se ejecuta del lado del cliente (React Client Component)

// Importa hook para obtener productos destacados
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";

// Tipado de la respuesta (loading, result)
import { ResponseType } from "@/types/response";

// Componentes del carrusel UI
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Componente esqueleto mientras carga la info
import SkeletonSchema from "./skeletonSchema";

// Tipado de producto
import { ProductType } from "@/types/product";

// Componentes visuales
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react"; // Iconos

// Botón de icono personalizado
import IconButton from "./icon-button";

// Router de Next.js para redireccionar
import { useRouter } from "next/navigation";

// Hook personalizado para manejar el carrito
import { useCart } from "@/hooks/use-cart";

// Componente principal
const FeaturedProducts = () => {
  // Hook para traer los productos destacados (cargando y resultado)
  const { result, loading }: ResponseType = useGetFeaturedProducts();

  // Instancia del router para redirecciones
  const router = useRouter();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Función para agregar productos al carrito
  const { addItem } = useCart();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {/* Título de la sección */}
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

      {/* Carrusel que contiene los productos */}
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          
          {/* Muestra el skeleton si está cargando */}
          {loading && <SkeletonSchema grid={3} />}

          {/* Si ya hay productos cargados, mapea cada uno */}
          {result !== null &&
            result.map((product: ProductType) => {
              const { attributes, id } = product;
              const { slug, images, productName, taste, origin } = attributes;

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    {/* Tarjeta del producto */}
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        
                        {/* Imagen principal del producto */}
                        <img
                          src={`${backendUrl}${images.data[0].attributes.url}`}
                          //src={`http://localhost:1337${images.data[0].attributes.url}`}
                          //src={`${images.data[0].attributes.url}`}
                          alt="Image featured"
                        />

                        {/* Botones flotantes que aparecen al hacer hover */}
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">

                            {/* Botón para ver más detalles */}
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />

                            {/* Botón para agregar al carrito */}
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />

                            
                          </div>
                        </div>
                      </CardContent>

                      {/* Nombre y etiquetas del producto */}
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>

                        {/* Etiquetas: sabor y origen */}
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {taste}
                          </p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>

        {/* Botones de navegación del carrusel */}
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
 