import FilterOrigin from "./filter-origin";
// Importa un componente hijo que permite seleccionar el origen del café (ej: Huila, Nariño, etc.)

type FiltersControlsCategoryProps = {
    setFilterOrigin: (origin: string) => void;
    // Define el tipo de props que recibe este componente:
    // Una función que permite establecer el filtro de origen (se actualiza desde el componente padre)
};

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const { setFilterOrigin } = props;
    // Extrae la función de las props para usarla dentro del componente

    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            {/* Contenedor con ancho fijo en pantallas grandes y algo de margen/padding */}
            
            <FilterOrigin setFilterOrigin={setFilterOrigin} />
            {/* Renderiza el filtro de origen y le pasa la función para actualizar el filtro */}
        </div>
    );
};

export default FiltersControlsCategory;
// Exporta el componente para poder usarlo en la página de productos por categoría
