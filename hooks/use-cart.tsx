import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'sonner'

import { ProductType } from "@/types/product"

interface CartStore {
    items: (ProductType & { quantity: number })[],
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
    incrementItem: (id: number) => void
    decrementItem: (id: number) => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            return toast.error("El producto ya existe en el carrito.")
        }

        set({
            items: [...get().items, { ...data, quantity: 1 }]
        })
        toast.success("Producto añadido al carrito 🛍️")
    },

    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast("Producto eliminado del carrito 🗑️")
    },

    incrementItem: (id: number) => {
        set({
            items: get().items.map((item) => 
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        })
        toast.success("Cantidad actualizada +1 ➕")
    },

    decrementItem: (id: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (existingItem && existingItem.quantity > 1) {
            set({
                items: currentItems.map((item) => 
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            })
            toast.success("Cantidad actualizada -1 ➖")
        } else {
            set({ items: [...currentItems.filter((item) => item.id !== id)] })
            toast("Producto eliminado del carrito 🗑️")
        }
    },

    removeAll: () => set({ items: [] })

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))
