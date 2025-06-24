import Link from "next/link"; // Importa el componente Link para navegar entre páginas sin recargar
import { buttonVariants } from "./ui/button"; // Importa una función que define variantes de botones para reutilizarlos

// Componente funcional que representa un banner de descuento
const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center"> {/* Contenedor con padding y texto centrado */}
            <h2 className="uppercase font-black text-2xl text-primary">
                ¡Aprovecha hasta un 25% de descuento!
            </h2> {/* Título principal en mayúsculas, grueso, grande y con color primario */}

            <h3 className="mt-3 font-semibold">
                Obtén un 20% por compras desde $100.000 o un 25% si pasas los $150.000. Usa el código CAFÉVIP
            </h3> {/* Subtítulo que explica la promoción, con margen arriba y texto seminegrita */}

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                {/* Contenedor de botones, ancho máximo moderado, centrado en pantallas pequeñas, en fila en pantallas medianas en adelante, con separación */}
                <Link href="#" className={buttonVariants()}>
                    Comprar café
                </Link> {/* Botón principal con estilos por defecto */}

                <Link href="#" className={buttonVariants({ variant: "outline" })}>
                    Ver detalles
                </Link> {/* Botón secundario con estilo "outline" */}
            </div>
        </div>
    );
}

export default BannerDiscount; // Exporta el componente para poder usarlo en otras partes del proyecto
