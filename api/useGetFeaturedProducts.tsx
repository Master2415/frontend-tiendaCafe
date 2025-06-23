// Importa los hooks useEffect y useState de React
import { useEffect, useState } from "react"

// Declara y exporta un hook personalizado llamado useGetFeaturedProducts
export function useGetFeaturedProducts() {

    // Construye la URL con una variable de entorno (ruta del backend) + filtro para productos destacados
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`

    // Estado para guardar el resultado de la petición (productos)
    const [result, setResult] = useState(null)

    // Estado para indicar si se está cargando la información
    const [loading, setLoading] = useState(true)

    // Estado para almacenar errores en caso de que fallen la petición
    const [error, setError] = useState("")

    // useEffect ejecuta la lógica cuando el componente se monta o cuando cambia la URL
    useEffect(() => {
        // Función autoejecutable asíncrona para hacer la petición
        (async () => {
            try {
                // Realiza la petición GET al backend
                const res = await fetch(url);

                // Convierte la respuesta a JSON
                const json = await res.json()

                // Guarda los datos obtenidos en el estado 'result'
                setResult(json.data)

                // Cambia el estado de carga a falso
                setLoading(false)

            } catch (error: any) {
                // Si ocurre un error, lo guarda en el estado 'error'
                setError(error)

                // También detiene el estado de carga
                setLoading(false)
            }
        })()
    }, [url]) // Se vuelve a ejecutar si cambia la URL

    // Retorna los estados para usarlos desde el componente que llama este hook
    return { loading, result, error }
}
