import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
    product: ProductType & { quantity: number }
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const { removeItem, incrementItem, decrementItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <ProductImageMinuature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />

            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                    <p className="font-bold">{formatPrice(product.attributes.price)}</p>

                    <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} />

                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-2 py-1">
                        <button onClick={() => decrementItem(product.id)} className="px-2 hover:text-red-500">-</button>
                        <span className="font-semibold">{product.quantity}</span>
                        <button onClick={() => incrementItem(product.id)} className="px-2 hover:text-green-500">+</button>
                    </div>
                    <button
                        className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}
                    >
                        <X size={20} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;