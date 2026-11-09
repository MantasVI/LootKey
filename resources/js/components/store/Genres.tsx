export default function Genres() {
    return (
        <details open className="group border-b border-white/10 p-4">
            <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none">
                Genres{" "}
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
                        <span className="grow">Single Player</span>
                        <span className="text-xs text-white/50">60962</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Action</span>
                        <span className="text-xs text-white/50">59223</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Adventure</span>
                        <span className="text-xs text-white/50">51523</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Simulation</span>
                        <span className="text-xs text-white/50">29331</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Strategy</span>
                        <span className="text-xs text-white/50">25979</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Indie</span>
                        <span className="text-xs text-white/50">25941</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">Multiplayer</span>
                        <span className="text-xs text-white/50">21409</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
                        <input
                            type="checkbox"
                            className="size-4 accent-[#00FA9A]"
                        />
                        <span className="grow">RPG</span>
                        <span className="text-xs text-white/50">19171</span>
                    </label>
                </div>
                <button className="mt-3 text-xs font-bold text-[#00FA9A] flex items-center gap-1">
                    24 more <i className="ti ti-chevron-down"></i>
                </button>
            </div>
        </details>
    );
}
