"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">
                    ¡Tu pedido ha sido recibido con entusiasmo! Muy pronto, nuestro equipo seleccionará cuidadosamente los granos más frescos y comenzará a preparar tu envío con todo el esmero que te mereces.
                    </p>
                    <p className="my-3">
                    Mientras tanto, relájate y deja que la emoción del aroma a café recién hecho te acompañe. Sabemos que cada taza cuenta, y estamos trabajando para que la tuya sea inolvidable.
                    </p>
                    <p className="my-3">
                    Gracias por elegirnos y confiar en nuestra pasión por el café. ¡No vemos la hora de que disfrutes cada sorbo!
                    </p>
                    <p className="my-3">
                    ☕ ¡Que comience el ritual del buen café!
                    </p>


                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;