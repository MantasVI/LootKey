export default function Region() {
    return (
        <details open className="group border-b border-white/10 p-4">
            <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none">
                Regions{" "}
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
                        <span className="grow">Global</span>
                        <span className="text-xs text-white/50">72181</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Europe</span>
                        <span className="text-xs text-white/50">27464</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">United States</span>
                        <span className="text-xs text-white/50">17127</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Argentina</span>
                        <span className="text-xs text-white/50">8287</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Latin America</span>
                        <span className="text-xs text-white/50">4322</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Turkey</span>
                        <span className="text-xs text-white/50">4186</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">United Kingdom</span>
                        <span className="text-xs text-white/50">4105</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Canada</span>
                        <span className="text-xs text-white/50">2356</span>
                    </label>
                </div>
                <button className="mt-3 text-xs font-bold text-[#00FA9A] flex items-center gap-1">
                    128 more <i className="ti ti-chevron-down"></i>
                </button>
            </div>
        </details>
    );
}
