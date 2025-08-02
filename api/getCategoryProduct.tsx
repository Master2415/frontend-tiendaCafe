import { useEffect, useState } from "react";
// Importa los hooks de React necesarios para manejar efectos y estado

export function useGetCategoryProduct(slug: string | string[]) {
    // Define un hook personalizado que recibe un "slug" (string o arreglo de strings) como parámetro
    // Este slug representa la categoría del producto (por ejemplo: "organico", "molido", etc.)

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
    // Construye la URL con filtros para que solo traiga los productos que pertenecen a una categoría específica
    // "populate=*" incluye todos los datos relacionados (como imágenes, categoría, etc.)

    const [result, setResult] = useState(null);
    // Estado para guardar los productos obtenidos desde la API

    const [loading, setLoading] = useState(true);
    // Estado para saber si la solicitud sigue en curso

    const [error, setError] = useState('');
    // Estado para guardar el mensaje de error en caso de que falle la solicitud

    useEffect(() => {
        // Efecto que se ejecuta cuando cambia la URL (es decir, cuando cambia el slug)

        (async () => {
            try {
                const res = await fetch(url);
                // Realiza la solicitud HTTP a la API

                const json = await res.json();
                // Convierte la respuesta en formato JSON

                setResult(json.data);
                // Guarda los datos de los productos filtrados por categoría

                setLoading(false);
                // Indica que ya se terminó la carga
            } catch (error: any) {
                setError(error);
                // Guarda el mensaje de error si ocurre algún problema

                setLoading(false);
                // Finaliza el estado de carga aunque haya error
            }
        })();
    }, [url]);
    // El efecto se ejecuta cada vez que cambia la URL (o el slug)

    return { loading, result, error };
    // Devuelve un objeto con el estado de carga, el resultado de la API y el error si lo hay
}
