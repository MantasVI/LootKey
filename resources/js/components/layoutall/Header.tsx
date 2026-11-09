import NotLoggedIn from "./NotLoggedIn";
//import LoggedIn from "../home/HomeLoggedIn";

export default function Header() {
    return (
        <header className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center gap-8">
            <a href="/" className="shrink-0">
                <img
                    src="/images/lootkey-logo.svg"
                    alt="Lootkey"
                    className="h-12"
                />
            </a>

            <form
                action="#"
                className="flex-1 flex items-center gap-3 border border-white/60 px-4 py-2.5"
            >
                <span className="material-symbols-outlined">search</span>
                <input
                    type="search"
                    name="q"
                    placeholder="Search games, add-ons and more"
                    className="flex-1 bg-transparent outline-none placeholder-white/60"
                />
            </form>

            <div className="flex items-center gap-5">
                <a href="#" className="hover:text-[#00FA9A]">
                    <span className="material-symbols-outlined">favorite</span>
                </a>
                <a href="#" className="hover:text-[#00FA9A]">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </a>
                {/* swap these two depending on login state */}
                <NotLoggedIn />
                {/* <LoggedIn /> */}
            </div>
        </header>
    );
}
