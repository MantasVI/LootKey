export default function HomeSidebar() {
    return (
        <>
            <div className="fixed inset-0 bg-black/60 z-40"></div>

            <aside className="fixed top-0 left-0 h-screen w-80 bg-[#3d0fba] z-50 overflow-y-auto">
                <div className="w-full flex justify-between items-center p-5">
                    <a href="/">
                        <img
                            src="{{ asset('images/lootkey-logo.svg') }}"
                            alt="Lootkey"
                            className="h-10"
                        ></img>
                    </a>
                    <button
                        type="button"
                        className="hover:text-yellow-400"
                        aria-label="Close"
                    >
                        <i className="ti ti-x text-2xl"></i>
                    </button>
                </div>

                <ul className="px-5 flex flex-col gap-y-1 text-lg">
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            All offers
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            Mobile games
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            Games
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            Gaming cards
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            E-cards
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            PSN
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            Xbox
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 hover:text-yellow-400"
                        >
                            Nintendo
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
