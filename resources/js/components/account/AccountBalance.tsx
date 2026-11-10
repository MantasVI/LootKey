import AccountAddFunds from "./AccountAddFunds";
import AccountMoney from "./AccountMoney";

export default function AccountBalance() {
    return (
        <div className="flex  bg-gray-200 shadow-lg text-xl w-xl  text-black flex-col  gap-y-2">
            <AccountMoney />
            <AccountAddFunds />
        </div>
    );
}
