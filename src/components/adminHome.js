import NavBar from "./navbar";
import '../styles/adminHome.css'

const AdminHome = () => {
    return ( 
        <div className="adminHome">
            <NavBar />
            <div className="king">
            <div className="parent">
            <h1>Upcoming Drives</h1>
            <h4>*Cognizant on Nov 30*</h4>
            <h4>*L&T on Dec 04*</h4>
            <h4>*Deloitte on Dec 07*</h4>
            <h4>*Infosys on Dec 10*</h4>
            </div>
          <div className="kid">
            <h1>*Placement Details</h1>
            <h4>*Total 10 Students Got Placed Today*</h4>
            <h4>*Yesterday 4 Students Got Placed*</h4>
            <h4>*Total 23 Students Got Placed In this Week*</h4>
            <h4>*Total 111 Students Got Placed In this Month*</h4>
          </div>
          </div>
          <div className="image">
          <img src="http://api.qspiders.com/media/clients/allstate-logo-header-170x45_W9ycizB.png" alt="" />
            <img src="http://api.qspiders.com/media/clients/Integra_Micro_Systems_chIzJjj.jpg" alt="" />
            <img src="http://api.qspiders.com/media/clients/Capegemini_60.png" alt="" />
            <img src="http://api.qspiders.com/media/clients/Birlasoft_YZhugEA.png" alt="" />
          </div>
        </div>
     );
}
 
export default AdminHome;