"use client"

import * as React from "react"
import Link from "next/link"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList =() => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/">
                    <div className="mt-4 mb-2 text-lg font-medium">
                      BrewCraft
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Tienda especializada en café de alta calidad, 
                      enfocada en ofrecer granos seleccionados, moliendas artesanales y productos 
                      exclusivos para amantes del café. Combinamos tradición y modernidad para que cada taza sea una experiencia única, 
                      desde la cápsula hasta el grano entero.
                    </p>
                  </Link> 
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a nuestra tienda para explorar y comprar nuestros productos.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Descubre nuestras ofertas especiales y promociones exclusivas.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Explora nuestra selección de accesorios para mejorar tu experiencia con el café.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>             
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Accesorios</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café en Cápsula",
    href: "/categorias/capsula",
    description: "Café práctico y rápido, ideal para máquinas de cápsulas.",
  },
  {
    title: "Café en Grano",
    href: "/categorias/grano",
    description: "Café en su forma más pura para moler al gusto.",
  },
  {
    title: "Café Molido",
    href: "/categorias/molido",
    description: "Listo para preparar en cualquier tipo de cafetera.",
  },
  {
    title: "Café Instantáneo",
    href: "/categorias/instantaneo",
    description: "Preparación rápida, solo agrega agua caliente.",
  },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

