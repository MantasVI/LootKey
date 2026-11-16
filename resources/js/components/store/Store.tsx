import StoreProducts from "./StoreProducts";
import StoreSidebar from "./StoreSidebar";

import type { Paginated, Product, StoreFilters } from "@/types/product";

export default function Store({
    products,
    filters,
}: {
    products: Paginated<Product>;
    filters: StoreFilters;
}) {
    return (
        <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">
            <StoreSidebar />
            <StoreProducts products={products} filters={filters} />
        </div>
    );
}
