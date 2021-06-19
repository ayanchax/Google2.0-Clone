import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { MicrophoneIcon } from "@heroicons/react/outline";

import Avatar from "../components/Avatar";
import HeaderOptions from "./HeaderOptions";
import { AVATAR_URL, SITE_LOGO } from "../config";

function Header() {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState(
        router.query?.term ? router.query?.term : null
    );
    const searchInputRef = useRef(null);
    const home = () => {
        router.push("/");
    };
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}&start=0`);
    };

    const updateSearchHandler = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    const clear = () => {
        if (searchInputRef.current.value != "") {
            searchInputRef.current.value = "";
        }
        document.title = "New Search - Google";
    };
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center justify-between">
                <div className="flex space-x-4 items-center">

                    <Image
                        onClick={home}
                        className="cursor-pointer"
                        width={120}
                        height={40}
                        src={SITE_LOGO}
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-grow space-x-4 items-center">

                    <form className="flex flex-grow  px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                        <input
                            value={searchInput}
                            onChange={updateSearchHandler}
                            ref={searchInputRef}
                            type="text"

                            className="flex-grow focus: outline-none"
                        />
                        <XIcon
                            onClick={clear}
                            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        />
                        <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex  text-blue-500 border-l-2  pl-4 border-gray-400 cursor-pointer" />
                        <SearchIcon
                            onClick={search}
                            className="h-6 hidden sm:inline-flex  text-blue-500  cursor-pointer"
                        />
                        <button type="submit" onClick={search} hidden>
                            Search
                        </button>
                    </form>
                </div>

                <div className="flex space-x-4 items-center">

                    <Avatar url={AVATAR_URL} />
                </div>
            </div>
            <HeaderOptions />
        </header>
    );
}

export default Header;
