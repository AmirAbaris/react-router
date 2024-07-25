import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Link className="text-red-600" to="users">Go to User List page</Link>
        </div>
    );
}

export default Home;
