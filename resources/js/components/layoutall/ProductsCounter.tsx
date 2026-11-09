export default function ProductsCounter() {
    return (
        <div className="flex justify-between items-center mb-4 text-sm">
            <p>
                Results found: <span className="font-bold">1000+</span>
            </p>
            <label className="flex items-center gap-2 font-bold">
                <i className="ti ti-sort-descending"></i> Popularity:
                <select className="bg-transparent text-[#00FA9A] font-bold outline-none cursor-pointer">
                    <option className="text-black">Most popular</option>
                    <option className="text-black">Price: low to high</option>
                    <option className="text-black">Price: high to low</option>
                    <option className="text-black">Newest</option>
                </select>
            </label>
        </div>
    );
}
