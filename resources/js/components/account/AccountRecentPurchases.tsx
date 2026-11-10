export default function AccountRecentPurchases() {
    return (
        <div className="flex bg-white shadow-sm gap-x-10 flex-col gap-y-3">
            <div className="flex font-bold text-xl text-[#3d0fb1] px-6 pt-5">
                <p>Naujausi pirkiniai</p>
            </div>
            <div className="grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
                <div className="bg-purple-100 w-30 h-50  "></div>
                <div className="bg-purple-100 w-30 h-50  "></div>
                <div className="bg-purple-100 w-30 h-50  "></div>
            </div>
            <div className="flex p-5">
                <button className="border border-[#3d0fba]  text-[#3d0fba] hover:bg-gray-200 transition duration-300 py-2 px-3">
                    Perziureti raktu biblioteka
                </button>
            </div>
        </div>
    );
}
