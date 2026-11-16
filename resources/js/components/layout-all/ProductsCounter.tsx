import { router } from "@inertiajs/react";
{
    return (
        <div className="flex justify-between items-center mb-4 text-sm">
            <p>
                Results found: <span className="font-bold">{props.count}</span>
            </p>
            <label className="flex items-center gap-2 font-bold">
                <i className="ti ti-sort-descending"></i> Popularity:
                <select
                    value={props.filters.sort ?? ""}
                    onChange={(e) =>
                        router.get("/store", {
                            ...props.filters,
                            sort: e.target.value,
                        })
                    }
                    className="bg-transparent text-[#00FA9A] font-bold outline-none cursor-pointer"
                >
                    <option value="price_asc" className="text-black">
                        Price: low to high
                    </option>
                    <option value="price_desc" className="text-black">
                        Price: high to low
                    </option>
                    <option value="newest" className="text-black">
                        Newest
                    </option>
                </select>
            </label>
        </div>
    );
}
