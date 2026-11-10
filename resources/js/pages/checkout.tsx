import HeaderCheckout from "@/components/checkout/HeaderCheckout";
import Cart from "@/components/checkout/Cart";
import CheckoutNotLoggedIn from "@/components/checkout/CheckoutNotLoggedIn";
import CheckoutLoggedIn from "@/components/checkout/CheckoutLoggedIn";
import InspiredPicks from "@/components/checkout/InspiredPicks";
import Footer from "@/components/layoutall/Footer";
export default function Checkout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
            <HeaderCheckout />

            <main className="w-full max-w-6xl mx-auto px-6 mt-10 flex flex-col gap-10">
                {/* left: cart | right: sidebar */}
                <div className="grid grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
                    <Cart />

                    <aside className="flex flex-col gap-4">
                        <CheckoutNotLoggedIn />
                        <CheckoutLoggedIn />
                    </aside>
                </div>

                <section className="bg-[#350da1] p-5">
                    <InspiredPicks />
                </section>
            </main>
            <Footer />
        </div>
    );
}
