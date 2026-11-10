export default function AccountAddFunds() {
    return (
        <div className="flex bg-white flex-col p-5 py-10">
            <div className="flex justify-between items-start">
                <div className="flex flex-col ">
                    <p className="AccountHe">Papildimu likutis</p>
                    <p>Galima isleisti tik lootkey prekyvieteje</p>
                </div>
                <div className="flex   text-[#3d0fba] justify-center items-center gap-x-4 ">
                    <p>kaina</p>
                    <button className="border border-[#3d0fba]  text-[#3d0fba] hover:bg-gray-100 transition duration-300 p-4">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
