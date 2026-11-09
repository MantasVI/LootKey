export default function Navigation() {
    return (
        <nav className="bg-[#350da1]">
            <ul className="max-w-7xl mx-auto px-6 h-12 flex items-center gap-6 text-sm overflow-x-auto whitespace-nowrap">
                <li>
                    <button className="flex items-center gap-2 hover:text-[#00FA9A]">
                        <span className="material-symbols-outlined">menu</span>
                        Categories
                    </button>
                </li>
                <li>
                    <a href="#" className="hover:text-[#00FA9A]">
                        Cheap games
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#00FA9A]">
                        Software
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#00FA9A]">
                        E-cards
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#00FA9A]">
                        Lootkey top-ups
                    </a>
                </li>
            </ul>
        </nav>
    );
}
