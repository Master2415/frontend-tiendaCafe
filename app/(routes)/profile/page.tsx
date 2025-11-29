"use client";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
      
      <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
            <User size={48} className="text-slate-500" />
        </div>
        <h2 className="text-2xl font-semibold">Usuario Invitado</h2>
        <p className="text-gray-500 mb-6">invitado@brewcraftdev.com</p>
        
        <div className="w-full max-w-md space-y-4">
            <div className="p-4 border rounded-lg text-left">
                <h3 className="font-semibold mb-2">Mis Pedidos</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                        <div>
                            <p className="font-medium">Café en Grano - Origen Colombia</p>
                            <p className="text-sm text-gray-500">Cant: 1</p>
                        </div>
                        <p className="font-bold">$25.00</p>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <div>
                            <p className="font-medium">Café Molido - Tostado Medio</p>
                            <p className="text-sm text-gray-500">Cant: 2</p>
                        </div>
                        <p className="font-bold">$40.00</p>
                    </div>
                </div>
            </div>
            <div className="p-4 border rounded-lg text-left">
                <h3 className="font-semibold mb-2">Direcciones Guardadas</h3>
                <p className="text-sm text-gray-500">Calle del Café 123, Ciudad Barista</p>
            </div>
        </div>

        <Button className="mt-8" variant="outline">Cerrar Sesión</Button>
      </div>
    </div>
  );
}
