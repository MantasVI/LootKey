import Item from "../LayoutAll/Item";
import Pagination from "../LayoutAll/Pagination";
import ProductsCounter from "../LayoutAll/ProductsCounter";

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
