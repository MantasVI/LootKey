import Store from "@/components/store/Store";
import type { Paginated } from "@/types/product";
import type { Product } from "@/types/product";
export default function StorePage({
    products,
}: {
    products: Paginated<Product>;
}) {
    return (
        <>
            <main className="max-w-7xl flex-1 w-full mx-auto px-6 pb-16">
                <h1 className="text-3xl font-bold my-8">
                    Games, Gift Cards, Top-Ups &amp; More | Best Deals
                </h1>
                <Store products={products} />
            </main>
        </>
    );
}
