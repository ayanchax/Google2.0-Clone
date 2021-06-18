import Head from 'next/head'
import Header from '../components/Header'
import { API_KEY, CTX_KEY } from "../keys"
import Response from '../Response'
import { useRouter } from "next/router"
import SearchResults from '../components/SearchResults'
function Search({ results }) {
    console.log(results)
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>

            </Head>

            <Header />

            <SearchResults results={results} />

        </div>
    )
}

export default Search
// getServerSideProps is a SSR function in built in next js
export async function getServerSideProps(context) {
    const startIndex = context.query.start || '0'
    const useDummyData = true;
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CTX_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())
    // After the server has rendered, pass result to client side
    return {
        props: {
            results: data
        }
    }
}
