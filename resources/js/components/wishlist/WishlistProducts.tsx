import Item from "../layout-all/Item";
import ProductsCounter from "../layout-all/ProductsCounter";
import Pagination from "../layout-all/Pagination";
export default function WishlistProducts() {
    return (
        <>
            <section>
                <ProductsCounter />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Item />
                </div>
                <Pagination />
            </section>
        </>
    );
}
