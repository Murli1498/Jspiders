import NavBar from "./navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addmock.css";

const AddMock = () => {
  let [fname, setfname] = useState("");
  let [subject, setsubject] = useState("");
  let [mock, setmock] = useState("");

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let addmock = {
      fname:fname, 
      subject:subject,
      mock:mock,
    };
    fetch("http://localhost:4000/mock", {
      method:"POST",
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(addmock),
    });
    alert("Mock Rating Added");
    navigate("/admin-portal/adminHome/mock-list/");
  };

  return (
    <div className="addmock">
      <NavBar />
      <div className="row">
        <form action="" id="add" onSubmit={handleSubmit}>
          <label htmlFor="fname">
            {" "}
            <h1>Fname</h1> <br />{" "}
            <input
              class=""
              type="text"
              placeholder="Fname"
              aria-label="fname"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="subject">
            <h1>Subject</h1> <br />
            <input
              class=""
              type="text"
              placeholder="Subject"
              aria-label="subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="mock">
            <h1>Mock</h1> <br />{" "}
            <input
              class=""
              type="number"
              placeholder="Mock"
              aria-label="mock"
              value={mock}
              onChange={(e) => setmock(e.target.value)}
            />
          </label>

          <div className="but">
            <button onClick="">Add </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMock;
