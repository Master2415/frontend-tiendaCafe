import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { Github } from "lucide-react";

const dataFooter = [
    {
        id: 1,
        name: "Sobre nosotros",
        link: "/about"
    },
    {
        id: 2,
        name: "Contactanos",
        link: "/contact"
    },
    {
        id: 3,
        name: "Privacidad",
        link: "/privacy"
    },
    {
        id: 4,
        name: "Productos",
        link: "/products"
    },
    {
        id: 5,
        name: "Mi cuenta",
        link: "/my-account"
    }
]

const Footer = () => {
    return (
       <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        <span className="font-bold">Master2415</span> E-Commerce
                    </p>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <Link href="https://github.com/master2415" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github size={20} />
                        Master2415
                    </Link>
                    Todos los derechos reservados
                </span>

            </div>
        </footer>
    ); 

}

export default Footer;