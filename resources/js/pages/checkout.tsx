import Cart from "@/components/checkout/Cart";
import CheckoutLoggedIn from "@/components/checkout/CheckoutLoggedIn";
import CheckoutNotLoggedIn from "@/components/checkout/CheckoutNotLoggedIn";

import InspiredPicks from "@/components/checkout/InspiredPicks";

export default function Checkout() {
    return (
        <>
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
        </>
    );
}
