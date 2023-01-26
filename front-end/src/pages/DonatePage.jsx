import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

function DonatePage() {
    const {data, loading, error} = useFetch('http://localhost:1337/api/blogs')
    if(loading)return<p>loading...</p>
    if(error)return<p>{error}</p>
    console.log(data)
    return(
        <>
        </>
    )
}
export default DonatePage;