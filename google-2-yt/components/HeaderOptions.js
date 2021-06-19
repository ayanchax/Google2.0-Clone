import HeaderOption from "./HeaderOption";
import {
    SearchIcon,
    PhotographIcon,
    PlayIcon,
    NewspaperIcon,
    MapIcon,
    DotsVerticalIcon,
} from "@heroicons/react/solid";

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:pl-52 lg:space-x-36 border-b-[1px]">
            {/* left section */}
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>
            {/* right section */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    );
}

export default HeaderOptions;
