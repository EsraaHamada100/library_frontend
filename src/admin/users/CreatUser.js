import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import register from "../../utils/auth/register";
import "./UserRequestsPage.css";

function CreatUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("user");
  const [active, setActive] = useState("1");

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      'name': name,
      'email': email,
      'password': password,
      'phone': phone,
      'type': type,
      'active': active,
    }
    try {
      register(formData);
      navigate('/manage-users');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 rounded p-5">
        <form className="add" onSubmit={handleSubmit}>
          <h2>Add User</h2>
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
          {/* Type : <select  className="form-select"  >
            {type.map((type) => (
              <option key={type.id} value={type.value}>
                {users.type}
              </option>
            ))}
          </select> */}
          Type : <select value={type} className="form-select" onChange={(e) => { setType(e.target.value); }}>
            <option value="admin" selected=""> admin </option>
            {<option value="user" selected=""> user </option>}
          </select>
          <br></br>
          Active : <select value={active} className="form-select w-25 p-10 h-10 d-inline-block" onChange={(e) => { setActive(e.target.value); }}>
                  <option value="1" > active </option>
                 {<option value="0" > inactive </option>}
                 </select>
          <br></br>
          <br></br>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default CreatUser;
