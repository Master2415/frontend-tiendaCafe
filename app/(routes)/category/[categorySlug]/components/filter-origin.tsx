import { useGetProductField } from "@/api/getProductField";
// Hook personalizado que trae los campos definidos en el modelo de producto (como los valores del enum "origin")

import { Label } from "@/components/ui/label";
// Componente reutilizable para etiquetas de formularios

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// Componentes para crear un grupo de opciones tipo radio (solo una opción seleccionable)

import { FilterTypes } from "@/types/filters";
// Tipo de datos que representa la estructura del schema retornado por el hook (incluye atributos del producto)

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
    // Prop que recibe una función para actualizar el estado del filtro de origen
};

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    // Extrae la función desde las props

    const { result, loading }: FilterTypes = useGetProductField();
    // Llama al hook que obtiene los valores posibles del campo "origin" desde el schema del modelo de producto

    return (
        <div className="my-5">
            {/* Contenedor del filtro, con margen vertical */}

            <p className="mb-3 font-bold">Origen</p>
            {/* Título visible del filtro */}

            {loading && result === null && (
                <p>Cargando origen...</p>
            )}
            {/* Muestra mensaje si aún está cargando los datos */}

            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {/* Grupo de opciones radio. Al cambiar, actualiza el estado con el origen seleccionado */}

                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        {/* Cada opción del enum "origin" genera un radio button */}

                        <RadioGroupItem value={origin} id={origin} />
                        {/* Botón seleccionable con valor igual al nombre del origen */}

                        <Label htmlFor={origin}>{origin}</Label>
                        {/* Etiqueta que muestra el texto del origen */}
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigin;
// Exporta el componente para ser usado dentro del control de filtros
