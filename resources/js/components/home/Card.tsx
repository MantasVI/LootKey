type CardProps = {
    name: string;
    region: string;
    price: number;
    cashback: number;
};
export default function Card({ name, region, price, cashback }: CardProps) {
    return (
        <a
            href="#"
            className="group relative block h-96 rounded-lg overflow-hidden border-2 border-[#5a2be0] hover:border-[#00FA9A] transition"
        >
            <img
                src="/images/game.jpg"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/75 p-3 flex flex-col gap-1">
                <p className="font-semibold truncate">{name}</p>
                <p className="text-xs text-white/60">{region}</p>
                <p className="text-xl font-bold">{price}</p>
                <p className="text-xs text-[#00FA9A]">{cashback}</p>
            </div>
        </a>
    );
}
