import React, { useState, useEffect } from "react";
import { HiUserAdd } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import register from "../../utils/auth/register";
import axios from "axios";
import "./UserRequestsPage.css";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../shared/variables";
function MangeUsers() {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState("active");
  const navigate = useNavigate();
  function handleActive(event) {
    event.preventDefault();
    const formData = {
      'active': 1,
    }
    try {
      register(formData);
      navigate('/manage-users');
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/", {
        headers: {
          Authorization: userData.user_id,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handelDelete = async (user_id) => {
    try {
      await axios.delete("http://localhost:4000/users/" + user_id, {
        headers: {
          Authorization: userData.user_id,
        },
      });
      // You can change the user list by changing setUsers like that instead of reloading
      // here I get the previous state and remove from it the user_id that I have delete
      // and that will change the UI without having to reload

      setUsers((prevState) =>
        prevState.filter((item) => item.user_id !== user_id)
      );

      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async (data) => {
    navigate("/update-user/", {
      state: {
        userData: data,
      },
    });
  };
  return (
    <div className="d-flex vh-100 .bg-primary justify-content-center align-items-center">
      <div className="w-80 rounded p-3">
        <Link
          to="/creat-user"
          className=" font-weight-bold text-black btn bg-light ">
          {" "}
          <HiUserAdd size="25" color="green" /> add member </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>E-mail</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.user_id}</td>
                <td>{data.email}</td>
                <td>{data.active? <GoPrimitiveDot size="20" color="green"/> : <GoPrimitiveDot size="20" color="red"/>}</td>
                <td>
                  <button onClick={() => handleUpdate(data)}>
                    <BiEditAlt size="20" color="blue" />
                  </button>
                  <button onClick={(e) => handelDelete(data.user_id)}>
                    <AiFillDelete size="20" color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>E-mail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{
            users.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.user_id}</td>
                <td>{data.email}</td>
                <td>
                  <button className='btn btn-primary' onClick={() => handleUpdate(data)}>Update</button>
                  <button className='btn btn-danger ms-2' onClick={e => handelDelete(data.user_id)}>Delete</button>
                </td>
              </tr>
            ))
          }</tbody>
        </table> */}
      </div>
    </div>
  );
}

export default MangeUsers;
