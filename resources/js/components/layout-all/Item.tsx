export default function Item({
    name,
    slug,
    image,
    platform,
    region,
    price,
    cashback,
}: {
    name: string;
    slug: string;
    image: string | null;
    platform: string;
    region: string;
    price: string;
    cashback: string;
}) {
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
                    <i className="ti ti-coin"></i> {cashback}
                </span>
                <span className="absolute bottom-0 left-0 right-0 bg-black/80 text-[11px] text-center py-1">
                    {platform}
                </span>
            </div>
            <div className="flex flex-col gap-1 p-3 grow">
                <p className="text-xs font-bold leading-snug line-clamp-2">
                    {name} {platform} Key
                </p>
                <p className="text-[11px] font-bold text-[#00FA9A]">{region}</p>
                <div className="mt-auto pt-3">
                    <p className="text-xs text-white/50">
                        From <s>{price}</s>
                        <span className="text-[#00FA9A] font-bold">
                            {price}
                        </span>
                    </p>
                    <p className="text-lg font-bold">{price}</p>
                    <p className="text-xs font-bold text-[#7fff00]">
                        {cashback}
                    </p>
                </div>
            </div>
        </a>
    );
}
