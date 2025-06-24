import Link from "next/link";
// Importa el componente Link para navegación entre páginas

import { buttonVariants } from "./ui/button";
// Importa la función que genera estilos de botón reutilizables

const BannerProduct = () => {
    return (
        <>
            {/* Fragmento contenedor, permite devolver múltiples elementos sin crear un div adicional */}
            <div className="mt-4 text-center">
                {/* Contenedor de texto centrado con margen superior */}

                <p>Descubre el sabor auténtico de nuestra tierra</p>
                {/* Texto introductorio para atraer la atención del usuario */}

                <h4 className="mt-2 text-5xl font-extrabold uppercase">CaféColombia</h4>
                {/* Nombre del producto/marca destacado en letras grandes, gruesas y mayúsculas */}

                <p className="my-2 text-lg">Cada sorbo es un viaje por las montañas cafeteras</p>
                {/* Descripción atractiva y emocional que conecta con el producto */}

                <Link href="#" className={buttonVariants()}>
                    Comprar ahora
                </Link>
                {/* Botón de acción para dirigir a la tienda o catálogo */}
            </div>

            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/slider-image.jpg')] bg-center mt-5" />
            {/* Imagen de fondo simulando un banner visual del café, ajustada en altura para distintas pantallas */}
        </>
    );
}

export default BannerProduct;
// Exporta el componente para que pueda ser utilizado en otras partes del proyecto
