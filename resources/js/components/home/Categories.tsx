export default function Categories() {
    return (
        <section className="max-w-7xl mx-auto px-6 mt-12">
            <h2 className="text-3xl font-bold mb-6">Categories</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">20467</span>
                        <i className="ti ti-run text-4xl"></i>
                        <span className="text-sm font-semibold">Action</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">19676</span>
                        <i className="ti ti-map-2 text-4xl"></i>
                        <span className="text-sm font-semibold">Adventure</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">15591</span>
                        <i className="ti ti-steering-wheel text-4xl"></i>
                        <span className="text-sm font-semibold">
                            Simulation
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">14814</span>
                        <i className="ti ti-chess-knight text-4xl"></i>
                        <span className="text-sm font-semibold">Strategy</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">5569</span>
                        <i className="ti ti-sword text-4xl"></i>
                        <span className="text-sm font-semibold">RPG</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">5350</span>
                        <i className="ti ti-alien text-4xl"></i>
                        <span className="text-sm font-semibold">Indie</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex flex-col items-center gap-3 bg-[#5a2be0] py-4 shadow-lg hover:bg-[#350da1] transition"
                    >
                        <span className="text-sm font-bold">2781</span>
                        <i className="ti ti-target text-4xl"></i>
                        <span className="text-sm font-semibold">FPS / TPS</span>
                    </a>
                </li>
            </ul>
            <div className="flex justify-center mt-8">
                <button className="border border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#3d0fba]">
                    Load more
                </button>
            </div>
        </section>
    );
}
