import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [user_id, setUser_Id] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios.put('http://localhost:4000/users/update/' + user_id, { name , email, password, phone, type })
    .then((res) => {
        console.log(res);
        navigate("/");
      }).catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}> 
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">phone</label>
            <input
              type="phone number"
              placeholder="Enter phone number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* <select onChange={(e)=>{
              console.log(e.target.value);
          }}>
            {
              users.map((item)=>{
                return <option key={item.id} value={item.value}>{users.type}</option>;
              })
            }
          </select> */}
          {/* Type : <select className="form-select" onChange={(e) => setType(e.target.value) }>
            { users.map((item) => (
              <option key={item.id} value={item.value}>
                {users.type}
              </option>
            ))}
          </select> */}
          Type : <select value={type} className="form-select" onChange={(e)=>{setType(e.target.value);}}>
          <option value="admin" selected=""> admin </option>
          {<option value="user" selected=""> User </option> }
           </select>  
          <br></br>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateUser;
