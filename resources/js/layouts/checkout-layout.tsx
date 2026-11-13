import HeaderCheckout from "@/components/checkout/HeaderCheckout";
import Footer from "@/components/layout-all/Footer";
import type { PropsWithChildren } from "react";

export default function CheckoutLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
            <HeaderCheckout />
            <main className="w-full max-w-6xl mx-auto px-6 mt-10 flex flex-col gap-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}
