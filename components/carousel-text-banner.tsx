"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
  {
    id: 1,
    title: "¡Café recién hecho hasta tu puerta!",
    description:
      "Haz parte de nuestra familia cafetera y recibe tus pedidos en 24 a 48 horas. ¡El sabor de Colombia sin salir de casa!",
    link: "#!",
  },
  {
    id: 2,  
    title: "Ahorra sabroso con tu cafecito",
    description:
      "Llévate un 20% de descuento desde $100.000 o un 25% al superar los $150.000. Usa el código: CAFÉVIP y disfruta más por menos.",
    link: "#",
  },
  {
    id: 3,
    title: "Cambios sin líos ni vueltas",
    description:
      "Tienes hasta 30 días para devolver o cambiar tu pedido sin complicaciones. Aquí lo importante es que estés feliz con tu café.",
    link: "#",
  },
  {
    id: 4,
    title: "Nuevos sabores con precio especial",
    description:
      "Descubre nuestras últimas cosechas y mezclas con hasta un 50% de descuento. ¡Que no se te pase la oferta!",
    link: "#",
  },
];

     
const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 3000
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                           <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;