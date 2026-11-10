import Account2 from "@/components/account/AccountRecentPurchases";
import AccountBalance from "@/components/account/AccountBalance";
import AccountHeader from "@/components/account/AccountHeader";
import AccountSidebar from "@/components/account/AccountSidebar";
import Footer from "@/components/layoutall/Footer";
import AccountProfile from "@/components/account/AccountProfile";

export default function Account() {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
                <AccountHeader />
                <div className="flex flex-1 bg-white">
                    <div className="flex flex-col w-70 shrink-0 bg-[#3d0fba]">
                        <AccountSidebar />
                    </div>

                    <div className="flex flex-col min-[1380px]:flex-row p-10 items-start bg-gray-200 flex-1 gap-10 text-black">
                        <div className="flex flex-col items-start gap-y-10">
                            <AccountProfile />

                            <AccountBalance />
                        </div>
                        <Account2 />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
