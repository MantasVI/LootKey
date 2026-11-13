import Footer from "@/components/layout-all/Footer";
import Header from "@/components/layout-all/Header";
import Navigation from "@/components/layout-all/Navigation";
import type { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
            <Header />
            <Navigation />

            <main className="flex-1">{children}</main>

            <Footer />
        </div>
    );
}
