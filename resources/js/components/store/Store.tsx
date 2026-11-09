import StoreProducts from "./StoreProducts";
import StoreSidebar from "./StoreSidebar";

export default function Store() {
    return (
        <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">
            <StoreSidebar />
            <StoreProducts />
        </div>
    );
}
