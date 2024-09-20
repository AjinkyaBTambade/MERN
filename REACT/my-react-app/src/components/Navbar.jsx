import { Link } from "react-router-dom";
const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>   |
        <Link to="/list">List</Link>  |
        <Link to="/customers">Customers List</Link>  |
        <Link to="/aboutus">About us</Link> |
        <Link to="/contact">Contact</Link>  |
        <Link to="/services">Services</Link>  |
        <Link to="/bi">Buissness Intelligence</Link>  |
        <Link to="/dashboard">Dashboard</Link>   |
        <Link to="/login">Login</Link>   |
        <Link to="/register">Register</Link>
    </nav>
);
export default Navbar;
