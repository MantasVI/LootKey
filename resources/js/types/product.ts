export type Product = {
    id: number;
    name: string;
    slug: string;
    image: string | null; // "text OR null", because yours are all null right now
    platform: string;
    region: string;
    price: string; // it came with quotes: "38.77"
    cashback: string;
};

export type LinkUrl = {
    url: string | null;
    label: string;
    page: null | number;
    active: boolean;
};
export type Paginated<Product> = {
    data: Product[];
    current_page: number;
    last_page: number;
    total: number;
    next_page_url: string;
    links: LinkUrl[];
};

export type ProductsCounter {
    count: number;
    filters: {
        type: string | null;
        platform: string | null;
        sort: string | null;
    };
};