"use client";
import { ShoppingCart,Heart, User, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Asegúrate de importar useRouter
import MenuList from './menu-list';
import ItemsMenuMobile from './items-menu-movile';

const Navbar = () => {
    const router = useRouter();
    return (
        < div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1  className="text-3xl">BrewCraft 
                <span className="font-bold">Dev</span>     
            </h1>

            <div className="items-center justify-between hidden sm:flex">
                <MenuList  />
            </div>

            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>

            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart strokeWidth="1" className="cursosr-pointer" onClick={() => router.push('/cart')} />
                <Heart strokeWidth="1" className="cursosr-pointer" onClick={() => router.push('/loved-products')}/>
                <User strokeWidth="1" className="cursosr-pointer" onClick={() => router.push('/profile')}/>
            </div> 
        </div>
    );  
    }
 
export default Navbar;  