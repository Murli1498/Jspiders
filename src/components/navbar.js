import { Link } from "react-router-dom"
import '../styles/navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/admin-portal/">Home</Link>
            <Link to="/admin-portal/adminHome/add-mock/">AddMock</Link>
            <Link to="/admin-portal/adminHome/mock-list/">MockList</Link>
            <Link to="/">Logout</Link>
            </div>
      );
}
 
export default NavBar;