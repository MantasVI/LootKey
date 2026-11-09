export default function CheckoutLoggedIn() {
    return (
        <div className="  flex flex-col gap-y-2">
            <div className="flex flex-col bg-[#350da1] p-5 ">
                <div className="flex flex-col gap-y-2">
                    <p className="text-xl font-bold">Summary</p>
                    <button className="bg-yellow-500 p-1 text-black font-bold">
                        Proceed to checkout
                    </button>
                </div>

                <div className="flex justify-between mt-2">
                    <p className="text-sm">1 product</p>
                    <p className="font-bold">total</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm">service fee</p>
                    <p className="font-bold">fee</p>
                </div>
            </div>

            <div className="flex flex-col bg-[#350da1] p-5 ">
                <div className="flex justify-between">
                    <p>total:</p>
                    <div className="flex  flex-col">
                        <p>total</p>
                        <p>cashback</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-[#350da1] p-5 gap-y-2 ">
                <div className="flex justify-between">
                    <p>Got discount code?</p>
                    <button> ^ </button>
                </div>
                <p className="p-5 border-1 border-yellow-500 w-70">
                    Important: Cashback wont be given if a discount code is
                    used,as only one promotion can be applied per product
                </p>
                <div className="flex justify-between gap-x-2">
                    <input className="bg-[#2a0c7a]" />{" "}
                    <button className="border-1 p-2 font-bold">Apply</button>
                </div>
            </div>
        </div>
    );
}
