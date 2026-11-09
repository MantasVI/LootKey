export default function Pagination() {
    return (
        <nav className="flex justify-center items-center gap-1 mt-10 text-sm font-bold">
            <a
                href="#"
                className="size-8 grid place-items-center border border-white/30 text-white/40"
            >
                <i className="ti ti-chevron-left"></i>
            </a>
            <a
                href="#"
                className="size-8 grid place-items-center border border-[#00FA9A] text-[#00FA9A]"
            >
                1
            </a>
            <a
                href="#"
                className="size-8 grid place-items-center hover:text-[#00FA9A]"
            >
                2
            </a>
            <a
                href="#"
                className="size-8 grid place-items-center hover:text-[#00FA9A]"
            >
                3
            </a>
            <a
                href="#"
                className="size-8 grid place-items-center hover:text-[#00FA9A]"
            >
                4
            </a>
            <a
                href="#"
                className="size-8 grid place-items-center hover:text-[#00FA9A]"
            >
                5
            </a>
            <span className="size-8 grid place-items-center">…</span>
            <a
                href="#"
                className="size-8 grid place-items-center hover:text-[#00FA9A]"
            >
                50
            </a>
            <a
                href="#"
                className="size-8 grid place-items-center border border-white hover:border-[#00FA9A] hover:text-[#00FA9A]"
            >
                <i className="ti ti-chevron-right"></i>
            </a>
        </nav>
    );
}
