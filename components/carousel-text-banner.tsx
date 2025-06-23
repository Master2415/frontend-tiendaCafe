"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
  {
    id: 1,
    title: "Entrega exprés en 24/48h",
    description:
      "Sé parte de nuestra comunidad VIP y recibe tus pedidos en tiempo récord. ¡Únete hoy mismo!",
    link: "#!",
  },
  {
    id: 2,  
    title: "Ahorra hasta un 25% en compras desde 40€",
    description:
      "Obtén un -20% al gastar 100 € o -25% al superar los 150 €. Usa el código: TARREDEV y disfruta.",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones sin complicaciones",
    description:
      "Disfruta de envíos y devoluciones totalmente gratis durante 30 días. Porque tu comodidad es lo primero.",
    link: "#",
  },
  {
    id: 4,
    title: "Explora lo nuevo con descuento",
    description:
      "Descubre nuestras últimas novedades ¡con hasta un 50% de descuento por lanzamiento!",
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