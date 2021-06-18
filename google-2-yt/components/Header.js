import Image from 'next/image'
import { useRef } from "react"
import { useRouter } from "next/router"

import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/outline'

import Avatar from '../components/Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()

    const searchInputRef = useRef(null)
    const home = () => {
        router.push("/")
    }
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value
        if (!term)
            return;
        router.push(`/search?term=${term}`)
    }
    const clear = () => {
        if (searchInputRef.current.value != "")
            searchInputRef.current.value = "";
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image onClick={home} className="cursor-pointer" height={40} width={120} src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                <form className="flex flex-grow  px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} type="text" className="flex-grow focus: outline-none" />
                    <XIcon onClick={clear} className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex  text-blue-500 border-l-2  pl-4 border-gray-400 cursor-pointer" />
                    <SearchIcon onClick={search} className="h-6 hidden sm:inline-flex  text-blue-500  cursor-pointer" />
                    <button type="submit" onClick={search} hidden>Search</button>
                </form>
                <Avatar className="ml-auto" url="https://scontent.fccu20-1.fna.fbcdn.net/v/t1.6435-9/197154084_4327876977298942_4787908797740236048_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XlCFtX54uC4AX_Doi0v&_nc_ht=scontent.fccu20-1.fna&oh=3b2380773c374fe0c56c75e9b0a6717f&oe=60D27E28" />

            </div>
            <HeaderOptions />
        </header>
    )
}

export default Header
