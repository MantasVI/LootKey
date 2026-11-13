export default function NotLoggedIn() {
    return (
        <div className="flex items-center gap-2 text-sm">
            <a
                href="#"
                className="flex items-center gap-1 hover:text-[#00FA9A]"
            >
                <span className="material-symbols-outlined">person</span>Log in
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-[#00FA9A]">
                Sign up
            </a>
        </div>
    );
}
