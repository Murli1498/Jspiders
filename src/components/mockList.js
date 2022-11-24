import '../styles/mocklist.css'
import NavBar from './navbar';
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";



const MockList = () => {
    let location = useLocation()
    let [mock,setMock] = useState([])
    useEffect(()=>{
        let fetchUsers = async() =>{
            let response = await fetch("http://localhost:4000/mock")
            let data = await response.json();
            setMock(data);
        }
        fetchUsers();
    },[]);

    

    let handleDelete = (id) =>{
        fetch(`http://localhost:4000/mock/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(mock)
        });
        window.location.reload() //reloads the page
    }

    


    return (  
        <div className="mocklist">
            <NavBar />
            <h1>Rating List</h1>
            <div className="users">
            { mock.map((data)=>{
                    return(
                        <div className="list">
                        <h4>Fname:{data.fname}</h4>
                        <h4>Subject:{data.subject}</h4>
                        <h4>Mock:{data.mock}</h4>
                        
                        {location.pathname==='/admin-portal/adminHome/mock-list/' && <button onClick={()=>handleDelete(data.id)}>Delete</button>}
                        </div>
                        
                        
                    )
                    })};
                    
            </div>

 
            </div>

    );
}
 
export default MockList;
