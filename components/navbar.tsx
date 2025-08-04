    "use client";
import { ShoppingCart,Heart, User, BaggageClaim } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Asegúrate de importar useRouter
import MenuList from './menu-list';
import ItemsMenuMobile from './items-menu-movile';
import ToggleTheme from './toggle-theme'; // Asegúrate de importar ToggleTheme  
import { useCart } from '@/hooks/use-cart';
import { useLovedProducts } from '@/hooks/use-loved-products';
    
// Declara el componente funcional Navbar
const Navbar = () => {
    // Obtiene el objeto router para hacer navegación programática
    const router = useRouter();
    const cart = useCart();
    const { lovedItems } = useLovedProducts()
    // Devuelve el JSX de la barra de navegación
    return (
        // Contenedor principal con diseño flex, padding y centrado
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">

            {/* Título del sitio con estilos y parte en negrita */}
            <h1 className="text-3xl">
                BrewCraft <span className="font-bold">Dev</span>
            </h1>

            {/* Menú para pantallas grandes (se oculta en móvil) */}
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>

            {/* Menú para móviles (visible solo en pantallas pequeñas) */}
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>

            {/* Íconos de acciones (carrito, favoritos, perfil, tema) */}
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {(cart.items.length === 0 ? 
                    <ShoppingCart strokeWidth="1" className="cursor-pointer"
                    onClick={() => router.push("/cart")} /> 

                    : (
                        <div className="flex gap-1 cursor-pointer" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                            <span>{cart.items.length}</span>
                        </div>
                    ))}


                {/* Icono de favoritos - redirige a /loved-products */}
                  <Heart
                    strokeWidth="1"
                    className={`cursor-pointer 
                    ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`}
                    onClick={() => router.push("/loved-products")} />

                

                {/* Icono de usuario - redirige a /profile */}
                <User
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push('/profile')}
                />

                {/* Botón para cambiar el tema claro/oscuro */}
                <ToggleTheme />
            </div>
        </div>
    );
};

// Exporta el componente para usarlo en otras partes
export default Navbar;
