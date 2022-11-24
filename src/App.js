import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home';
import Courses from './components/courses'
import Contact from './components/contact'
import Admin from './components/admin'
import AdminHome from './components/adminHome'
import AddMock from './components/addMock'
import Student from './components/student';
import StudentHome from './components/studentHome'
import MockList from './components/mockList';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/student" element={<Student />} />
      <Route path="/admin-portal/*" element={<AdminHome />} />
      <Route path="/admin-portal/adminHome/add-mock/" element={<AddMock />} />
      <Route path="/admin-portal/adminHome/mock-list/" element={<MockList />} />      
      <Route path="/student-portal/*" element={<StudentHome />} />


      

      
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
