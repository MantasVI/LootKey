export default function HeaderCheckout() {
    return (
        <header className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between gap-8">
            <a href="/" className="shrink-0">
                <img
                    src="{{ asset('images/lootkey-logo.svg') }}"
                    alt="Lootkey"
                    className="h-12"
                />
            </a>
            <div className="flex gap-3">
                <span className="rounded-full px-2 bg-green-400">1</span>
                <p>cart</p>
            </div>

            <div className="flex  gap-3">
                <span className="rounded-full px-2 bg-gray-700">2</span>
                <p>Payment</p>
            </div>

            <div className="flex  gap-3">
                {" "}
                <span className="rounded-full px-2 bg-gray-700">3</span>
                <p>get your product</p>
            </div>

            <div className="flex  gap-3">
                <button className="flex items-center gap-2 border border-white px-4 py-2 font-semibold">
                    🇱🇹 Lietuvių <span className="text-white/40">|</span> EUR
                </button>
            </div>
        </header>
    );
}
