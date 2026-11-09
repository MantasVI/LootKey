export default function InspiredPicks() {
    return (
        <div className="flex flex-col gap-y-5 w-full">
            <p>Inspired by your picks</p>
            <div className="grid grid-cols-5 gap-5">
                <div className="flex flex-col border-1 border-green-400">
                    <img
                        aria-label="Close"
                        className="w-full aspect-square object-cover"
                        src="{{ asset('images/lootkey-logo.svg') }}"
                    />
                    <div className="flex p-1 flex-col">
                        <div>
                            <p>name</p>
                        </div>
                        <div>
                            <p>region</p>
                        </div>
                        <div>
                            <p>price</p>
                        </div>
                        <div>
                            <p>cashback</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
