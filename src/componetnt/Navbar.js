import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/bookclub'> 
            <li>Book Club</li>
            </Link>
        </ul>
    );
};

export default Navbar;