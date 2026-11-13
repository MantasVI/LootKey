import WishlistStore from "@/components/wishlist/WishlistStore";

export default function Wishlist() {
    return (
        <>
            <h1 className="text-3xl font-bold my-8">
                Games, Gift Cards, Top-Ups &amp; More | Best Deals
            </h1>
            <WishlistStore />
        </>
    );
}
