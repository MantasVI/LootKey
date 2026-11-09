import Favorited from "./Favorited";

export default function WishlistProductType() {
    return (
        <details open className="group border-b border-white/10 p-4">
            <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none">
                Product type{" "}
                <i className="ti ti-chevron-up group-open:rotate-0 rotate-180 transition"></i>
            </summary>
            <div className="mt-3">
                <div className="flex items-center gap-2 border border-white/30 bg-[#2a0a85] px-2 py-1.5 mb-3">
                    <input
                        type="text"
                        className="w-full bg-transparent text-sm outline-none"
                    />
                    <i className="ti ti-search text-white/60"></i>
                </div>

                <div className="flex flex-col gap-2">
                    <Favorited />
                </div>
                <button className="mt-3 text-xs font-bold text-[#00FA9A] flex items-center gap-1">
                    3 more <i className="ti ti-chevron-down"></i>
                </button>
            </div>
        </details>
    );
}
