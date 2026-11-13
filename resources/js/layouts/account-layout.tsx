import AccountHeader from "@/components/account/AccountHeader";
import AccountSidebar from "@/components/account/AccountSidebar";
import Footer from "@/components/layout-all/Footer";
import type { PropsWithChildren } from "react";

export default function AccountLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-[#3d0fba] text-white">
            <AccountHeader />
            <div className="flex flex-1 bg-white">
                <aside className="flex flex-col w-70 shrink-0 bg-[#3d0fba]">
                    <AccountSidebar />
                </aside>
                <main className="flex flex-col min-[1380px]:flex-row p-10 items-start bg-gray-200 flex-1 gap-10 text-black">
                    <div className="flex flex-col items-start gap-y-10">
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
