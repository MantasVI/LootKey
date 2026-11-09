export default function EmptyCart() {
    return (
        <div
            className="flex flex-col gap-5 justify-center items-center mt-15"
            id="message"
        >
            <h1 className="font-bold text-2xl">Your cart is empty</h1>
            <p className="text-gray-300/50">
                it seems you haven't choosen your products yet
            </p>
            <a
                href="/"
                className="shadow-[0_0_10px_rgba(0,0,0,0.2)]  bg-yellow-500 text-black p-1"
            >
                Back to Homepage
            </a>
        </div>
    );
}
