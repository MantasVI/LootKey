export default function Item() {
    return (
        <a
            href="#"
            className="group flex flex-col bg-[#1f0a5c] border border-transparent hover:border-[#00FA9A] transition"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                    src="/images/game.jpg"
                    alt="Rivals of Aether II (PC) Steam Key"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute bottom-7 left-1 flex items-center gap-1 bg-[#00FA9A] text-[#12062e] text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                    <i className="ti ti-coin"></i> CASHBACK
                </span>
                <span className="absolute bottom-0 left-0 right-0 bg-black/80 text-[11px] text-center py-1">
                    Steam
                </span>
            </div>
            <div className="flex flex-col gap-1 p-3 grow">
                <p className="text-xs font-bold leading-snug line-clamp-2">
                    Rivals of Aether II (PC) Steam Key
                </p>
                <p className="text-[11px] font-bold text-[#00FA9A]">GLOBAL</p>
                <div className="mt-auto pt-3">
                    <p className="text-xs text-white/50">
                        From <s>€188.70</s>{" "}
                        <span className="text-[#00FA9A] font-bold">-59%</span>
                    </p>
                    <p className="text-lg font-bold">€76.91</p>
                    <p className="text-xs font-bold text-[#7fff00]">
                        11% Cashback
                    </p>
                </div>
            </div>
        </a>
    );
}
