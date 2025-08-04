/* eslint-disable @next/next/no-img-element */
// Desactiva una regla de ESLint que prohíbe el uso de <img> directamente en Next.js.
// Esto normalmente se hace para usar <Image /> de Next.js por rendimiento, pero aquí se usa <img>.

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
// Importa los componentes personalizados de carrusel que estás utilizando (seguramente de ShadCN o un componente propio).

interface CarouselProductProps {
  // Define las propiedades (props) que este componente espera recibir.
  images: {
    data: {
      id: number;
      attributes: {
        url: string; // URL de la imagen.
      };
    }[]; // Un arreglo de imágenes.
  };
}

const CarouselProduct = (props: CarouselProductProps) => {
  // Componente funcional que recibe props del tipo CarouselProductProps.
  const { images } = props; // Extrae las imágenes desde las props.

  return (
    <div className="sm:px-16">
      {/* Contenedor general del carrusel con padding horizontal en pantallas pequeñas y más grandes */}
      <Carousel>
        {/* Componente principal del carrusel */}
        <CarouselContent>
          {/* Contenido deslizable del carrusel */}
          {images.data.map((image) => (
            // Itera sobre cada imagen recibida en props
            <CarouselItem key={image.id}>
              {/* Cada ítem individual del carrusel */}
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} // Muestra la imagen desde la URL
                alt="Image product" // Texto alternativo (accesibilidad)
                className="rounded-lg" // Aplica bordes redondeados a la imagen
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        {/* Botón para ir a la imagen anterior */}
        <CarouselNext />
        {/* Botón para ir a la siguiente imagen */}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
// Exporta el componente para que pueda ser usado en otras partes del proyecto.
