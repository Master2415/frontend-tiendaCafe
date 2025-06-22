"use client";
import { useRouter } from 'next/navigation'; // Asegúrate de importar useRouter
const Navbar = () => {
    const router = useRouter();
    return (
        < div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1  className="text-3xl">Master E-commerce
                <span className="font-bold">Dev</span>     
            </h1>

            <div className="items-center justify-between hidden sm:flex">
                <p>Menu desktop</p>
            </div>

            <div className="flex sm:hidden">
                <p>Menu mobile</p>
            </div>

            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <p>Menu mobile</p>
            </div>
        </div>
    );  
    }

export default Navbar;  