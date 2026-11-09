export default function Cart() {
    return (
        <div className="flex justify-between items-start gap-10 w-full">
            <div className="flex flex-col bg-[#350da9] p-5 gap-5 text-sm ">
                <p className="font-bold ">My cart</p>
                <div className="flex  justify-center  gap-y-10 gap-x-5 bg-[#350da1] ">
                    <div className="flex">
                        <img
                            className="w-30 h-30 border-1 border-green-400"
                            src="{{ asset('images/lootkey-logo.svg') }}"
                        />
                    </div>

                    <div className="flex flex-col justify-between w-100 pr-5 p-2">
                        <div className="flex justify-between ">
                            <p className="text-xs">sold by (seller)</p>
                            <div className="flex  items-center gap-2">
                                <button
                                    type="button"
                                    className=" hover:text-[#00FA9A]"
                                >
                                    <i className="ti ti-heart text-lg"></i>
                                </button>
                                <p className="text-white/40">|</p>
                                <button
                                    type="button"
                                    className="hover:text-red-400"
                                >
                                    <i className="ti ti-trash text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <p className="text-xs">description</p>
                        <p className="text-xs">is active in my region?</p>
                        <div className="flex justify-between ">
                            <p className="text-xs">
                                item type(physical/digital?)
                            </p>
                            <div className="flex gap-x-4">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p>price</p>
                        </div>

                        <p className="text-xs">cashback amount</p>
                    </div>
                </div>
                <div className="flex  justify-center  gap-y-10 gap-x-5 bg-[#350da1] ">
                    <div className="flex">
                        <img
                            className="w-30 h-30 border-1 border-green-400"
                            src="{{ asset('images/lootkey-logo.svg') }}"
                        />
                    </div>

                    <div className="flex flex-col justify-between w-100 pr-5 p-2">
                        <div className="flex justify-between ">
                            <p className="text-xs">sold by (seller)</p>
                            <div className="flex  items-center gap-2">
                                <button
                                    type="button"
                                    className=" hover:text-[#00FA9A]"
                                >
                                    <i className="ti ti-heart text-lg"></i>
                                </button>
                                <p className="text-white/40">|</p>
                                <button
                                    type="button"
                                    className="hover:text-red-400"
                                >
                                    <i className="ti ti-trash text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <p className="text-xs">description</p>
                        <p className="text-xs">is active in my region?</p>
                        <div className="flex justify-between ">
                            <p className="text-xs">
                                item type(physical/digital?)
                            </p>
                            <div className="flex gap-x-4">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p>price</p>
                        </div>

                        <p className="text-xs">cashback amount</p>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
}
