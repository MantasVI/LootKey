import Country from "./Country";
import Genres from "./Genres";
import Platforms from "./Platforms";
import PriceRange from "./PriceRange";
import StoreProducts from "./StoreProducts";
import StoreProductType from "./StoreProductType";
import Region from "./Region";

export default function StoreSidebar() {
    return (
        <>
            <aside className="bg-[#5a2be0]">
                <PriceRange />

                <Country />

                <StoreProductType />

                <Platforms />

                <Genres />

                <Region />
            </aside>
        </>
    );
}
