"use client";
import { useGetProducts } from "@/api/useGetProducts";
import { ResponseType } from "@/types/response";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "@/components/product-card";
import { ProductType } from "@/types/product";

export default function ProductsPage() {
  const { result, loading }: ResponseType = useGetProducts();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="text-3xl font-bold mb-8">Todos los Productos</h1>
      
      <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {loading && <SkeletonSchema grid={9} />}
        
        {result !== null &&
          !loading &&
          result.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
        {result !== null && !loading && result.length === 0 && (
            <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}
