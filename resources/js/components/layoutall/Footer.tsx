export default function Footer() {
    return (
        <footer className="bg-[#12062e] mt-16">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between items-end gap-6">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold">Get personalized game deals</p>
                    <form action="#" className="flex">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-72 border border-white bg-transparent px-4 py-2 placeholder-white/60 outline-none"
                        ></input>
                        <button className="border border-l-0 border-white px-4 py-2 font-semibold hover:bg-white hover:text-[#12062e]">
                            Subscribe
                        </button>
                    </form>
                </div>
                <button className="flex items-center gap-2 border border-white px-4 py-2 font-semibold">
                    🇬🇧 English <span className="text-white/40">|</span> EUR
                </button>
            </div>
        </footer>
    );
}
