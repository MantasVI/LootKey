import Footer from "@/components/layoutall/Footer";
import Header from "@/components/layoutall/Header";
import Navigation from "@/components/layoutall/Navigation";
import Store from "@/components/store/Store";

export default function StorePage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
            <Header />
            <Navigation />
            <main className="max-w-7xl w-full mx-auto px-6 pb-16">
                <h1 className="text-3xl font-bold my-8">
                    Games, Gift Cards, Top-Ups &amp; More | Best Deals
                </h1>
                <Store />
            </main>
            <Footer />
        </div>
    );
}
