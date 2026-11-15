import type { LinkUrl } from "@/types/product";
import { Link } from "@inertiajs/react";

export default function Pagination(props: { links: LinkUrl[] }) {
    const lastInd: number = props.links.length - 1;

    const last: string | null = props.links[lastInd].url;
    const first: string | null = props.links[0].url;

    return (
        <nav className="flex justify-center items-center gap-1 mt-10 text-sm font-bold">
            {first === null ? (
                <span className="size-8 grid place-items-center border border-white/30 text-white/40">
                    <i className="ti ti-chevron-left"></i>
                </span>
            ) : (
                <Link
                    href={first}
                    className="size-8 grid place-items-center border border-white hover:border-yellow-500 hover:text-yellow-500"
                >
                    <i className="ti ti-chevron-left"></i>
                </Link>
            )}

            {props.links.slice(1, -1).map((val, index) => (
                <Link
                    key={index}
                    href={val.url ?? "#"}
                    className={
                        val.active
                            ? "size-8 grid place-items-center border border-yellow-500 text-yellow-500"
                            : "size-8 grid place-items-center border border-white text-white hover:border-yellow-500 hover:text-yellow-500"
                    }
                >
                    {val.label}
                </Link>
            ))}

            {last === null ? (
                <span className="size-8 grid place-items-center border border-white/30 text-white/40">
                    <i className="ti ti-chevron-right"></i>
                </span>
            ) : (
                <Link
                    href={last}
                    className="size-8 grid place-items-center border border-white  hover:border-yellow-500 hover:text-yellow-500"
                >
                    <i className="ti ti-chevron-right"></i>
                </Link>
            )}
        </nav>
    );
}
