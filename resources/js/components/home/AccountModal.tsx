export default function AccountModal() {
    return (
        <div className="absolute top-full right-0 mt-3 w-64 bg-[#5a2be0] shadow-2xl">
            <div className="flex items-center gap-3 p-4 border-b border-white/15">
                <span className="size-9 shrink-0 rounded-full bg-yellow-500"></span>
                <div className="min-w-0">
                    <p className="font-bold truncate">username</p>
                    <p className="text-xs text-white/70 truncate">
                        email@example.com
                    </p>
                </div>
            </div>

            <ul className="py-1">
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10"
                    >
                        <i className="ti ti-heart text-lg"></i> Wishlist
                    </a>
                </li>
                <li className="border-t border-white/15">
                    <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10"
                    >
                        <i className="ti ti-user text-lg"></i> My account
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10"
                    >
                        <i className="ti ti-wallet text-lg"></i> Balance{" "}
                        <span className="ml-auto font-bold text-[#00FA9A]">
                            €0.00
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10"
                    >
                        <i className="ti ti-shopping-cart text-lg"></i> Orders
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10"
                    >
                        <i className="ti ti-key text-lg"></i> Key library
                    </a>
                </li>
                <li>
                    <button
                        type="button"
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/10"
                    >
                        <i className="ti ti-logout text-lg"></i> Log out
                    </button>
                </li>
            </ul>
        </div>
    );
}
