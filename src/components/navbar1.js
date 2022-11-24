import { Link } from "react-router-dom"
import '../styles/navbar.css'

const NavBar1 = () => {
    return ( 
        <div className="navbar">
            <h1>Student1</h1>
            <Link to="/student-portal/mock/">Mock-Rating</Link>
            <Link to="/">Logout</Link>
        </div>
     );
}
 
export default NavBar1;