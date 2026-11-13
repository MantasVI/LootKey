import AccountRecentPurchases from "@/components/account/AccountRecentPurchases";
import AccountBalance from "@/components/account/AccountBalance";

import AccountProfile from "@/components/account/AccountProfile";

export default function Account() {
    return (
        <>
            <div className="flex flex-col min-[1380px]:flex-row p-10 items-start bg-gray-200 flex-1 gap-10 text-black">
                <div className="flex flex-col items-start gap-y-10">
                    <AccountProfile />

                    <AccountBalance />
                </div>
                <AccountRecentPurchases />
            </div>
        </>
    );
}
