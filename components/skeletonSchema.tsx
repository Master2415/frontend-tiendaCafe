// Importa el componente Skeleton (usado para mostrar carga simulada)
import { Skeleton } from "./ui/skeleton";

// Define los tipos de propiedades que recibe el componente
type SkeletonSchemaProps = {
    grid: number; // cantidad de elementos esqueleto a renderizar
};

// Componente funcional que genera múltiples bloques tipo "skeleton"
const SkeletonSchema = (props: SkeletonSchemaProps) => {
    // Extrae la propiedad grid del objeto props
    const { grid } = props;

    // Retorna un array de componentes Skeleton, uno por cada item según el valor de grid
    return (
        Array.from({ length: grid }).map((_, index) => (
            // Cada bloque necesita una key única (index en este caso)
            <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">

                {/* Rectángulo principal que simula una imagen o tarjeta */}
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />

                {/* Dos líneas que simulan texto */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
            </div>
        ))
    );
}

// Exporta el componente para usarlo en otras partes del proyecto
export default SkeletonSchema;
