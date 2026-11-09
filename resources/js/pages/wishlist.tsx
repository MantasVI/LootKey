import Footer from "@/components/LayoutAll/Footer";
import Header from "@/components/LayoutAll/Header";
import Navigation from "@/components/LayoutAll/Navigation";
import WishlistStore from "@/components/wishlist/WishlistStore";

export default function Wishlist() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
                <Header />
                <Navigation />
                <main className="max-w-7xl w-full mx-auto px-6 pb-16">
                    <h1 className="text-3xl font-bold my-8">
                        Games, Gift Cards, Top-Ups &amp; More | Best Deals
                    </h1>
                    <WishlistStore />
                </main>
            </div>
            <Footer />
        </>
    );
}
