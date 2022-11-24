import NavBar1 from "./navbar1";
import { useState,useEffect } from "react";
import '../styles/studenthome.css'



const StudentHome = () => {
   
    let [mock,setMock] = useState([])
    useEffect(()=>{
        let fetchBooks = async() =>{
            let response = await fetch("http://localhost:4000/mock")
            let data = await response.json();
            setMock(data);
        }
        fetchBooks();
    },[]);

    



    return ( 
        <div className="studenthome">
            <NavBar1 />
            <div className="rating">
            { mock.map((data)=>{
                    return(
                        <div className="list">
                        <h4>Fname:{data.fname}</h4>
                        <h4>Subject:{data.subject}</h4>
                        <h4>Mock:{data.mock}</h4>
                        </div>
                        
                        
                    )
                    })};
            </div>

        </div>
     );
}
 
export default StudentHome;
