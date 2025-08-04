import { Menu } from "lucide-react";

import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const ItemsMenuMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>    
            <Menu />
        </PopoverTrigger>

        <PopoverContent>
            <Link href="/categories/cafe-molido" className="block">Café Molido</Link>
            <Link href="/categories/cafe-grano" className="block">Café en Grano</Link>
            <Link href="/categories/cafe-capsula" className="block">café en Capsula</Link>
            <Link href="/categories/cafe-instantaneo" className="block">Café Instantaneo</Link>

        </PopoverContent>
    </Popover>
  );
}
  
export default ItemsMenuMobile; 