import {
    AppleIcon,
    DiscordIcon,
    FacebookIcon,
    GoogleIcon,
    SteamIcon,
    TwitchIcon,
    XIcon,
} from "@/components/icons/brand-icons";

export default function Login() {
    return (
        <>
            <div className=" flex flex-col justify-between items-between flex-1">
                <div className="flex justify-center items-center gap-x-15 mx-auto">
                    <div className="flex">
                        <p className="text-8xl">Sveiki malonu jus matyti!</p>
                    </div>
                    <div className="flex flex-col mt-50  p-10  bg-green-500">
                        <div className="flex flex-col">
                            <div className="flex gap-y-2 flex-col mb-5">
                                <p className="font-bold text-xl">Prisijungti</p>
                                <p className="text-gray-200">
                                    Naujas vartotojas?{" "}
                                    <a className="font-bold text-yellow-500">
                                        Susikurk paskyra
                                    </a>
                                </p>
                            </div>
                            <div className="flex gap-y-5 mt- flex-col">
                                <button className="flex items-center justify-center gap-3 py-2 px-2 bg-white text-black font-bold">
                                    <GoogleIcon className="size-5" />
                                    google
                                </button>
                                <button className="flex items-center justify-center gap-3 py-2 px-2 bg-blue-400 text-white font-bold">
                                    <FacebookIcon className="size-5" />
                                    facebook
                                </button>
                                <button className="flex items-center justify-center gap-3 py-2 px-2 bg-black text-white font-bold">
                                    <AppleIcon className="size-5" />
                                    apple
                                </button>

                                <div className="flex border-yellow-600 border-1 p-4 gap-x-5 justify-center">
                                    <button aria-label="Steam">
                                        <SteamIcon className="size-6" />
                                    </button>
                                    <button aria-label="Discord">
                                        <DiscordIcon className="size-6" />
                                    </button>
                                    <button aria-label="Twitch">
                                        <TwitchIcon className="size-6" />
                                    </button>
                                    <button aria-label="X">
                                        <XIcon className="size-6" />
                                    </button>
                                </div>

                                <form className="flex flex-col gap-y-4">
                                    <input
                                        placeholder="El.pastas"
                                        className="p-3 border-1"
                                    />
                                    <button className="py-2 px-2 bg-yellow-400 text-black font-bold">
                                        Gauk magiska nuoroda
                                    </button>
                                </form>
                                <p className="text-sm ">
                                    no password needed. we will email you a link
                                    to log in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex justify-center gap-x-4 p-5 bg-red-500 w-full fixed bottom-0">
                <button>Lietuvių</button>
                <a> Taisyklės ir sąlygos</a>
                <a>Privatumo pranešimas</a>
                <a>Slapukų nustatymai</a>
                <p>
                    Pagalba Autorinės teisės © 2026 Eneba. Visos teisės
                    saugomos.
                </p>
            </footer>
        </>
    );
}
