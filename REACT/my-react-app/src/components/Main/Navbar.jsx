import { Link } from "react-router-dom";
const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/list">List</Link>|
        <Link to="/aboutus">About us</Link>|
        <Link to="/contact">Contact</Link> |
        <Link to="/services">Services</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/register">Register</Link> |
        <Link to="/bi"> Charts</Link>|
    </nav>
);
export default Navbar;
