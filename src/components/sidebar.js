import '../styles/sideBar.css'
import { Link } from "react-router-dom"




const SideBar = () => {
    return ( 
        <div className="sidebar">
             <div className="align">
            <img src="https://jspiders.com/_nuxt/img/logo_jspiders.3b552d0.png" alt="" />
            </div>
            <div className="text">
            <Link to="/">Home</Link>
            <Link to="/courses">  Courses </Link> 
            <Link to="/contact">Contact</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/student">Student</Link>


            </div>
        </div>
     );
}
 
export default SideBar;