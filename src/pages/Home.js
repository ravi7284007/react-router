import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Go to <Link to="products">this list of products</Link>.</p>
        </>)
}

export default HomePage;