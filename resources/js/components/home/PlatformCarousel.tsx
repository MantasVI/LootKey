import { Link } from "@inertiajs/react";

export default function PlatformCarousel() {
    return (
        <section className="py-8">
            <ul className="max-w-7xl mx-auto px-6 flex justify-center gap-10 overflow-x-auto">
                <li>
                    <Link
                        href="/store?type=game"
                        className="flex flex-col items-center gap-2 w-24 text-sm font-semibold text-center hover:text-[#00FA9A]"
                    >
                        <span className="material-symbols-outlined !text-4xl">
                            stadia_controller
                        </span>
                        Games
                    </Link>
                </li>

                <li>
                    <Link
                        href="/store?type=gift_card"
                        className="flex flex-col items-center gap-2 w-24 text-sm font-semibold text-center hover:text-[#00FA9A]"
                    >
                        <svg
                            className="size-9"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
                            <path d="M7 16l3 -3l3 3" />
                            <path d="M8 13c-.789 0 -2 -.672 -2 -1.5s.711 -1.5 1.5 -1.5c1.128 -.02 2.077 1.17 2.5 3c.423 -1.83 1.372 -3.02 2.5 -3c.789 0 1.5 .672 1.5 1.5s-1.211 1.5 -2 1.5h-4" />
                        </svg>
                        Gift cards
                    </Link>
                </li>

                <li>
                    <Link
                        href="/store?platform=steam"
                        className="flex flex-col items-center gap-2 w-24 text-sm font-semibold text-center hover:text-[#00FA9A]"
                    >
                        <svg
                            className="size-9"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                        </svg>
                        Steam
                    </Link>
                </li>

                <li>
                    <Link
                        href="/store?platform=psn"
                        className="flex flex-col items-center gap-2 w-24 text-sm font-semibold text-center hover:text-[#00FA9A]"
                    >
                        <svg
                            className="size-9"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z" />
                        </svg>
                        PSN
                    </Link>
                </li>

                <li>
                    <Link
                        href="/store?platform=xbox"
                        className="flex flex-col items-center gap-2 w-24 text-sm font-semibold text-center hover:text-[#00FA9A]"
                    >
                        <svg
                            className="size-9"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
                            <path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
                        </svg>
                        Xbox
                    </Link>
                </li>

                <li>
                    <Link
                        href="/store?platform=nintendo"
                        className="flex flex-col items-center gap-2 w-24 text-sm font-semibold text-center hover:text-[#00FA9A]"
                    >
                        <svg
                            className="size-9"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3" />
                            <path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3" />
                            <path
                                d="M16.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                                fill="currentColor"
                            />
                            <path
                                d="M5.5 8.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                                fill="currentColor"
                            />
                        </svg>
                        Nintendo
                    </Link>
                </li>
            </ul>
        </section>
    );
}
