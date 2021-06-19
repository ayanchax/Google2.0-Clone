import { GlobeIcon, HeartIcon } from "@heroicons/react/solid"
function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100">
            <div className="px-8 py-3 text-gray-500 ml-3">
                <p>
                    India
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3  ">

                <div className="flex justify-center space-x-8 ml-3  whitespace-nowrap md:justify-self-start text-gray-500">
                    <p className="link">About</p>
                    <p className="link">Advertising</p>
                    <p className="link">Business</p>
                    <p className="link">How Search works</p>
                </div>
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 ">
                    Made with&nbsp;<HeartIcon className="h-5 mr-1 text-red-700" /> by &nbsp;<a className="hover:underline text-blue-400" href="#https://github.com/ayanchax?tab=repositories" target="_blank">Ayan Chax</a>
                </div>
                <div className="flex justify-center space-x-8 mr-4  md:ml-auto text-gray-500">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
