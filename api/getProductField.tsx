// Importa el tipo de dato que se espera como resultado del filtro
import { ResultFilterTypes } from "@/types/filters"

// Importa hooks de React necesarios para manejar estado y efectos secundarios
import { useEffect, useState } from "react"

// Hook personalizado para obtener los atributos del tipo de contenido "product"
export function useGetProductField() {
    // Construye la URL del endpoint usando una variable de entorno
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`

    // Estado que almacena el resultado de la petición
    const [result, setResult] = useState<ResultFilterTypes | null>(null)

    // Estado que indica si se está cargando la información
    const [loading, setLoading] = useState(true)

    // Estado para manejar errores si ocurren durante la petición
    const [error, setError] = useState('')

    // useEffect se ejecuta una vez al montar el componente para hacer la petición
    useEffect(() => {
        (async () => {
            try {
                // Hace la petición a la URL especificada
                const res = await fetch(url)

                // Convierte la respuesta a JSON
                const json = await res.json()

                // Guarda los datos obtenidos en el estado
                setResult(json.data)

                // Marca la carga como finalizada
                setLoading(false)
            } catch (error: any) {
                // En caso de error, guarda el mensaje y termina la carga
                setError(error)
                setLoading(false)
            }
        })()
    }, [url]) // Se vuelve a ejecutar si cambia la URL

    // Devuelve los estados para que otros componentes puedan usarlos
    return { loading, result, error }
}
