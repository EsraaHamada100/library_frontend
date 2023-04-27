import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL, userData } from "../../shared/variables";

function UpdateUser() {
  const { state } = useLocation();
  console.log('state ',state);
  const [name, setName] = useState(state.userData.name);
  const [email, setEmail] = useState(state.userData.email);
  const [password, setPassword] = useState(state.userData.password);
  const [phone, setPhone] = useState(state.userData.phone);
  const [type, setType] = useState(state.userData.type);
  const [userId, setUserId] = useState(state.userData.user_id);
  const [active, setActive] = useState(state.userData.active);
  const navigate = useNavigate();
  function handleSubmit(event) {
    console.log('we are in submit update');
    event.preventDefault();
    axios.put(
      `${API_URL}/users/${userId}` ,
      { name, email, password, phone, type , active },
      {
        headers: {
          'Authorization': userData.user_id
        }
      }
    )
      .then((res) => {
        console.log(res);
        navigate("/");
      }).catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="mb-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <div className="mb-2">
            <label htmlFor="">phone</label>
            <input
              type="phone number"
              value={phone}
              placeholder="Enter phone number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          Type : <select value={type} className="form-select" onChange={(e) => { setType(e.target.value); }}>
            <option value="admin" selected=""> admin </option>
            {<option value="user" selected=""> User </option>}
          </select>
          <br></br>
          Active : <select value={active} className="form-select " onChange={(e) => { setActive(e.target.value); }}>
                  <option value="1" selected=""> active </option>
                 {<option value="0" selected=""> inactive </option>}
                 </select> 
          <br></br>
          <button className="btn btn-success"  >Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateUser;
