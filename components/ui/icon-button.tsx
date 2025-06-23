// Importa la función 'cn' para combinar clases de Tailwind de forma segura
import { cn } from '@/lib/utils'

// Define la interfaz (propiedades que recibe el componente)
interface IconButtonProps {
    onClick: () => void,               // Función que se ejecuta al hacer clic
    icon: React.ReactElement,          // Icono que se mostrará dentro del botón
    className?: string                 // Clases adicionales opcionales
}

// Componente funcional que representa un botón con ícono
const IconButton = (props: IconButtonProps) => {
    // Extrae las propiedades desde 'props'
    const { onClick, icon, className } = props

    return (
        // Botón con eventos y estilos
        <button
            onClick={onClick} // Acción al hacer clic

            // Aplica clases base + las que vengan por props usando 'cn'
            className={cn(
                "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",
                className
            )}
        >
            {/* Renderiza el icono recibido como prop */}
            {icon}
        </button>
    );
}

// Exporta el componente para usarlo en otras partes del proyecto
export default IconButton;
 