import PlatformCarousel from "@/components/home/PlatformCarousel";
import Section from "@/components/home/Section";
import Categories from "@/components/home/Categories";
import SectionDark from "@/components/home/SectionDark";

const games = [
    { id: 1, name: "Terraria", region: "Global", price: 4.99, cashback: 0.5 },
    { id: 2, name: "GTA VI", region: "Europe", price: 69.75, cashback: 7.67 },
    { id: 3, name: "Minecraft", region: "Global", price: 19.99, cashback: 1.2 },
];

export default function home() {
    return (
        <>
            <main className="flex-1">
                <PlatformCarousel />

                <Section title="Recently viewed" games={games} />
                <SectionDark title="Most popular games" games={games} />
                <Section title="Most popular games" games={games} />
                <SectionDark title="Most popular gift cards" games={games} />

                <Categories />
            </main>
        </>
    );
}
