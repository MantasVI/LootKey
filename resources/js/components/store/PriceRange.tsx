export default function PriceRange() {
    return (
        <details open className="group border-b border-white/10 p-4">
            <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none">
                Price range (EUR){" "}
                <i className="ti ti-chevron-up group-open:rotate-0 rotate-180 transition"></i>
            </summary>

            <div className="mt-3 flex items-center gap-2">
                <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-white/30 bg-[#2a0a85] px-2 py-1.5 text-sm outline-none"
                />
                <span>-</span>
                <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-white/30 bg-[#2a0a85] px-2 py-1.5 text-sm outline-none"
                />
            </div>
        </details>
    );
}
