import { useEffect, useState } from "react";
// Importa los hooks de React: useEffect para ejecutar efectos secundarios, y useState para manejar estados

export function useGetCategories() {
    // Define un hook personalizado para obtener categorías desde la API

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
    // Construye la URL usando la variable de entorno del backend y solicita las categorías con todos sus datos relacionados (populate=*)

    const [result, setResult] = useState(null);  
    // Estado para guardar el resultado (las categorías)

    const [loading, setLoading] = useState(true);
    // Estado para saber si la petición aún está en proceso

    const [error, setError] = useState('');
    // Estado para guardar cualquier mensaje de error en caso de fallo

    useEffect(() => {
        // useEffect se ejecuta cuando el componente que llama este hook se monta

        (async () => {
            // Función autoejecutable asíncrona para hacer la solicitud a la API

            try {
                const res = await fetch(url);
                // Hace la solicitud HTTP a la API usando fetch

                const json = await res.json();
                // Convierte la respuesta en formato JSON

                setResult(json.data);
                // Guarda los datos obtenidos (array de categorías) en el estado

                setLoading(false);
                // Marca que ya terminó la carga
            } catch (error: any) {
                setError(error);
                // Si hay un error, se guarda el mensaje

                setLoading(false);
                // Termina la carga aunque haya fallo
            }
        })();
    }, [url]);
    // Este efecto se ejecuta una sola vez o cuando la URL cambie

    return { loading, result, error };
    // Retorna los tres estados que pueden ser usados por el componente que llama este hook
}
