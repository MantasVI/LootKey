import AccountModal from "./AccountModal";

export default function HomeLoggedIn() {
    return (
        <div className="relative z-50 text-sm">
            <button
                aria-label="Close"
                type="button"
                className=" size-9 rounded-full bg-yellow-500 hover:ring-2 hover:ring-[#00FA9A]"
            ></button>
            //--when account button is clicked--
            <AccountModal />
        </div>
    );
}
