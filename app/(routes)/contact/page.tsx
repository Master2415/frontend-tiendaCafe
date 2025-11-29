"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular envío
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensaje enviado con éxito");
    }, 1000);
  };

  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Contáctanos</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Ponte en contacto</h2>
          <p className="mb-4">
            ¿Tienes alguna pregunta sobre nuestros productos o tu pedido? Estamos aquí para ayudarte.
          </p>
          <div className="space-y-2">
            <p><span className="font-bold">Email:</span> soporte@master2415.com</p>
            <p><span className="font-bold">Teléfono:</span> +123 456 7890</p>
            <p><span className="font-bold">Dirección:</span> Calle del Café 123, Ciudad Barista</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre</label>
            <Input id="name" placeholder="Tu nombre" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="tu@email.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensaje</label>
            <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" required />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </div>
    </div>
  );
}
