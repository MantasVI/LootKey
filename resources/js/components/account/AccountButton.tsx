import AccountButtonContent from "./AccountButtonContent";
import AccountButtonTitle from "./AccountButtonTitle";

export default function AccountButton() {
    return (
        <div className="flex  flex-col hover:bg-purple-900 py-3 px-5">
            <AccountButtonTitle />
            <AccountButtonContent />
        </div>
    );
}
