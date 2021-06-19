import PaginationButtons from "./PaginationButtons";
import { XIcon } from "@heroicons/react/solid";
function SearchResults({ results }) {
    console.log(results);
    return <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        {results.error?.code == 400 &&

            (
                <div className="flex flex-grow py-5">
                    <XIcon

                        className="h-7 sm:mr-3 text-red-500"
                    />
                    <p className="text-red-600 text-sm mb-5 mt-1 mr-5">Something went wrong in fetching results. Please check your provider API Key settings or if you want to learn more on Google API keys, you may click <a
                        className="text-blue-500 hover:underline" href="https://developers.google.com/custom-search/v1/using_rest">here</a></p>

                </div>)}
        {
            results.searchInformation?.formattedTotalResults && (
                <p className="text-gray-600 text-sm mb-5 mt-3">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>
            )}
        {results.items?.map(result => (
            <div className="max-w-xl mb-8" key={result.link}>
                <div className="group">
                    {/* Link Heading and Link title */}
                    <a className="text-sm" href={result.link}>{result.formattedUrl}</a>
                    <a href={result.link}><h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2></a>
                </div>
                {/* result preview */}
                <p className="text-sm line-clamp-2">{result.snippet}</p>
            </div>
        ))}
        <PaginationButtons resultCount={results.searchInformation?.totalResults} />
    </div>
}

export default SearchResults;
