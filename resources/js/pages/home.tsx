// 1. IMPORTS go at the very top
import Header from "@/components/LayoutAll/Header";
import Navigation from "@/components/LayoutAll/Navigation";
import PlatformCarousel from "@/components/home/PlatformCarousel";
import Section from "@/components/home/Section";
import Categories from "@/components/home/Categories";
import Footer from "@/components/LayoutAll/Footer";

// 2. DATA goes after the imports, outside the function
const games = [
    { id: 1, name: "Terraria", region: "Global", price: 4.99, cashback: 0.5 },
    { id: 2, name: "GTA VI", region: "Europe", price: 69.75, cashback: 7.67 },
    { id: 3, name: "Minecraft", region: "Global", price: 19.99, cashback: 1.2 },
];

// 3. THE PAGE
export default function MainEnglish() {
    return (
        <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
            <Header />
            <Navigation />

            <main className="flex-1">
                <PlatformCarousel />

                {/* 4. <Section /> goes here, inside main, where you want it to appear */}
                <Section title="Recently viewed" games={games} />
                <Section title="Recommended" games={games} />
                <Section title="Most popular games" games={games} />
                <Section title="Most popular gift cards" games={games} />

                <Categories />
            </main>

            <Footer />
        </div>
    );
}
