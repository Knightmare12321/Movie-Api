import { useEffect } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../globals/globals";

const PageNotFound = () => {
    useEffect(() => {
        document.title = `${appTitle} - Page Not Found`;
    }, []);

    return (
        <main>
            <section className="page-not-found-section">
		        <h2>404 ... : </h2>
		        <p>Page not found.</p>
		        <p>Go to <Link to="/">Home</Link> page.</p>
	        </section>
        </main>
    );
}

export default PageNotFound;