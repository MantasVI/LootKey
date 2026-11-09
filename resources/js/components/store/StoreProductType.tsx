export default function StoreProductType() {
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
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Game</span>
                        <span className="text-xs text-white/50">103728</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">DLC</span>
                        <span className="text-xs text-white/50">30597</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">eGift Cards</span>
                        <span className="text-xs text-white/50">21532</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Gaming eCards</span>
                        <span className="text-xs text-white/50">5323</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">E-money Prepaid</span>
                        <span className="text-xs text-white/50">3388</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Game points</span>
                        <span className="text-xs text-white/50">3352</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Software</span>
                        <span className="text-xs text-white/50">2649</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Subscription</span>
                        <span className="text-xs text-white/50">2075</span>
                    </label>
                </div>
                <button className="mt-3 text-xs font-bold text-[#00FA9A] flex items-center gap-1">
                    3 more <i className="ti ti-chevron-down"></i>
                </button>
            </div>
        </details>
    );
}
