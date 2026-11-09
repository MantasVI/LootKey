import WishlistProducts from "./WishlistProducts";
import WishlistSidebar from "./WishlistSidebar";

export default function WishlistStore() {
    return (
        <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">
            <WishlistSidebar />
            <WishlistProducts />
        </div>
    );
}
