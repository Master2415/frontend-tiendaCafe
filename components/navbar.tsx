    "use client";
    import { ShoppingCart,Heart, User, Menu } from 'lucide-react';
    import { useRouter } from 'next/navigation'; // Asegúrate de importar useRouter
    import MenuList from './menu-list';
    import ItemsMenuMobile from './items-menu-movile';
    import ToggleTheme from './toggle-theme'; // Asegúrate de importar ToggleTheme  
    
// Declara el componente funcional Navbar
const Navbar = () => {
    // Obtiene el objeto router para hacer navegación programática
    const router = useRouter();

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

                {/* Icono de carrito - redirige a /cart */}
                <ShoppingCart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push('/cart')}
                />

                {/* Icono de favoritos - redirige a /loved-products */}
                <Heart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push('/loved-products')}
                />

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
