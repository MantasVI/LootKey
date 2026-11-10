import AccountHeader from "@/components/account/AccountHeader";
import AccountSidebar from "@/components/account/AccountSidebar";
import Footer from "@/components/layoutall/Footer";

export default function loginLog() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
                <AccountHeader />
                <div className="flex flex-1 bg-white">
                    <div className="flex flex-col w-70 shrink-0 bg-[#3d0fba]">
                        <AccountSidebar />
                    </div>

                    <div className="flex flex-col p-10  bg-gray-200 flex-1 gap-10 text-black">
                        <div className="flex justify-between">
                            <div className="flex">
                                <p className="accountUsername">
                                    Prisijungimu istorija
                                </p>
                            </div>
                            <div className="flex">
                                <button className="accountButtonText">
                                    Atsijungti nuo visu sesiju
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 bg-gray-200 gap-2 ">
                            <table className="w-full border-seperate vorder-spacing-y-[3px]">
                                <thead>
                                    <tr>
                                        <th className="tableHeader">Laikas</th>
                                        <th className="tableHeader">IP</th>
                                        <th className="tableHeader">Salis</th>
                                        <th className="tableHeader">
                                            Irenginio Pavadinimas
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="tableValue">date</td>
                                        <td className="tableValue">
                                            ip address
                                        </td>
                                        <td className="tableValue">location</td>
                                        <td className="tableValue">browser</td>
                                    </tr>
                                    <tr className="bg-white  p-10 ">
                                        <td className="tableValue">date</td>
                                        <td className="tableValue">
                                            ip address
                                        </td>
                                        <td className="tableValue">location</td>
                                        <td className="tableValue">browser</td>
                                    </tr>
                                    <tr className="bg-white  p-10 ">
                                        <td className="tableValue">date</td>
                                        <td className="tableValue">
                                            ip address
                                        </td>
                                        <td className="tableValue">location</td>
                                        <td className="tableValue">browser</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end ">
                            <div className="flex gap-5 items-center">
                                <button className="accountButtonText">
                                    {" "}
                                    back{" "}
                                </button>
                                <p className=" paskyra ">1 2 3</p>
                                <button className="accountButtonText">
                                    {" "}
                                    forward{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
