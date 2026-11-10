export default function AccountHeader() {
    return (
        <header className="flex justify-between bg-[#3d0fba] p-5">
            <img className="h-5 w-40"></img>
            <div className="flex  gap-5 items-center justify-center">
                <p>email@example.com</p>
                <button className=" p-4 bg-red-400 rounded-full"></button>
            </div>
        </header>
    );
}
