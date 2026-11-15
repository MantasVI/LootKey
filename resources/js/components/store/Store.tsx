import StoreProducts from "./StoreProducts";
import StoreSidebar from "./StoreSidebar";

import type { Product } from "../../types/product";
import type { Paginated } from "../../types/product";

export default function Store({ products }: { products: Paginated<Product> }) {
    return (
        <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">
            <StoreSidebar />
            <StoreProducts products={products} />
        </div>
    );
}
