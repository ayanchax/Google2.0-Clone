import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link"
function PaginationButtons({ resultCount }) {
    const router = useRouter();
    const rc = Number(resultCount) || 0;
    const startIndex = Number(router.query.start) || 0
    return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex items-center flex-grow flex-column cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {rc > 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                    <div className="flex items-center flex-grow flex-column cursor-pointer hover:underline">
                        <ChevronRightIcon className="h-5" />
                        <p>Next</p>
                    </div>
                </Link>
            )}

        </div>
    )
}

export default PaginationButtons
