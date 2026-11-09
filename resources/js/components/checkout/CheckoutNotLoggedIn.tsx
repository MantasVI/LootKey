export default function CheckoutNotLoggedIn() {
    return (
        <div className="flex flex-col bg-[#350da1] gap-y-2  p-5">
            <p>Where to deliver the order?</p>
            <p>Email</p>
            <input className=" bg-[#2a0c7a] p-2 " />
            <div className="flex">
                <input type="checkbox"></input>
                <p>Remember me</p>
            </div>
        </div>
    );
}
