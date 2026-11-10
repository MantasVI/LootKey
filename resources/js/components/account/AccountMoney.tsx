export default function AccountMoney() {
    return (
        <div className="flex bg-white flex-col p-5">
            <div className="flex justify-between items-start">
                <div className="flex flex-col font-bold ">
                    <p className="accountButtonHeader">Bendras Likutis</p>
                    <p className="accountMoneyColor">13.00</p>
                </div>
                <div className="flex">
                    <button className="accountButtonText">
                        Saskaitos apzvalga
                    </button>
                </div>
            </div>
            <div className="flex">
                <p className="accountSmallText">
                    Apytikslis likutis,apskaiciuotas remiantis naujausiu
                    valiutos kursu
                </p>
            </div>
        </div>
    );
}
