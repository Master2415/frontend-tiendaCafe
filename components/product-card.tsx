/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import IconButton from "@/components/icon-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

import { toast } from "sonner";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();
  const { addItem, items, incrementItem } = useCart();
  const { addLoveItem, lovedItems } = useLovedProducts();

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md block"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p
          className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
        >
          {product.attributes.taste}
        </p>
        <p
          className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 w-fit"
        >
          {product.attributes.origin}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="Image"
                className="rounded-xl aspect-square object-cover w-full"
              />
              <div
                className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5 z-20"
              >
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        router.push(`/product/${product.attributes.slug}`)
                    }}
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        const existingItem = items.find(item => item.id === product.id);
                        if (existingItem) {
                            toast("El producto ya está en el carrito", {
                                description: "¿Quieres añadir otro?",
                                action: {
                                    label: "Añadir otro",
                                    onClick: () => incrementItem(product.id)
                                }
                            })
                        } else {
                            addItem(product);
                        }
                    }}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        addLoveItem(product);
                    }}
                    icon={<Heart size={20} className={`text-gray-600 ${lovedItems.some((item) => item.id === product.id) ? 'fill-black dark:fill-white' : ''}`} />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-2xl text-center mt-2">{product.attributes.productName}</p>
      <p className="font-bold text-center">
        {formatPrice(product.attributes.price)}
      </p>
    </Link>
  );
};

export default ProductCard;
