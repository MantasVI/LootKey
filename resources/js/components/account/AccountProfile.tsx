export default function AccountProfile() {
    return (
        <>
            <div className="flex flex-col gap-y-1 w-xl">
                <div className="flex bg-white shadow-lg text-xl font-bold p-5 text-black flex-col  ">
                    <p className="paskyra">Paskyra</p>
                </div>
                <div className="flex bg-white p-5  justify-between text-black">
                    <div className="flex gap-5">
                        <span className="accountProfile"></span>
                        <div className="flex flex-col">
                            <p className="accountUsername">username</p>
                            <p className="accountSmallText">email</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button>edit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
