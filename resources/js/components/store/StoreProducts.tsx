import Item from "../layout-all/Item";
import Pagination from "../layout-all/Pagination";
import ProductsCounter from "../layout-all/ProductsCounter";

export default function StoreProducts() {
    return (
        <>
            <section>
                <ProductsCounter />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <Pagination />
            </section>
        </>
    );
}
