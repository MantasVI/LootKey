export default function Favorited() {
    return (
        <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#00FA9A]">
            <input type="checkbox" className="size-4 accent-[#00FA9A]" />
            <span className="grow">Game</span>
            <span className="text-xs text-white/50">103728</span>
        </label>
    );
}
