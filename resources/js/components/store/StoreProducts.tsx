import Item from "../layout-all/Item";
import Pagination from "../layout-all/Pagination";
import ProductsCounter from "../layout-all/ProductsCounter";
import type { Paginated, Product, StoreFilters } from "@/types/product";

export default function StoreProducts({
    products,
    filters,
}: {
    products: Paginated<Product>;
    filters: StoreFilters;
}) {
    return (
        <>
            <section>
                <ProductsCounter count={products.total} filters={filters} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.data.map((product) => (
                        <Item key={product.id} {...product} />
                    ))}
                </div>
                <Pagination links={products.links} />
            </section>
        </>
    );
}
