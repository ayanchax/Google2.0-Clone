import Head from 'next/head'
import Header from '../components/Header'
import { API_KEY, CTX_KEY } from "../keys"
import { APP_MODE } from "../config"
import Response from '../Response'
import { useRouter } from "next/router"
import SearchResults from '../components/SearchResults'
import Footer from '../components/Footer'
function Search({ results }) {
    console.log(results)
    const router = useRouter()
    const text_truncate = (str, length, ending) => {
        try {
            if (length == null) {
                length = 100;
            }
            if (ending == null) {
                ending = '...';
            }
            if (str.length > length) {
                return str.substring(0, length - ending.length) + ending;
            } else {
                return str;
            }
        }
        catch (e) {
            return str;
        }

    };
    return (
        <div>
            <Head>
                <title>{router.query?.term ? text_truncate(router.query?.term, 30) : "New Search"} - Google Search</title>

            </Head>

            <Header />

            <SearchResults results={results} />
            {/* Show footer if there is not an error */}
            {!results.error && (<Footer />)}


        </div>
    )
}

export default Search
// getServerSideProps is a SSR function in built in next js
// this method is asynchronously called whenever the route is routed to Search
export async function getServerSideProps(context) {
    const startIndex = context.query.start || '0'
    const useDummyData = APP_MODE === "development" ? true : false;
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CTX_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())
    // After the server has rendered, pass result to client side by wrapping it in inbuilt-key props
    return {
        props: {
            results: data
        }
    }
}
