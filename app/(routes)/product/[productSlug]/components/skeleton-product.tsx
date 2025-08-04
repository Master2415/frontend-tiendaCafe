// Importa el componente Skeleton que se usa para mostrar un efecto de carga
import { Skeleton } from "@/components/ui/skeleton";

// Componente funcional que muestra un "esqueleto" de un producto mientras carga
const SkeletonProduct = () => {
  return (
    // Contenedor con diseño en grid para organizar los elementos
    <div className="grid sm:grid-cols-2 sm:py-16 sm:px-40">
      
      {/* Simula la imagen del producto con un cuadro gris */}
      <Skeleton className="h-[200px] w-[350px] rounded-xl" />
      
      {/* Contenedor con espacio entre los textos simulados */}
      <div className="space-y-2">
        {/* Líneas que simulan texto como nombre, descripción, etc. */}
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonProduct;
