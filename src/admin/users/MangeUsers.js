import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userData } from '../../shared/variables';
function MangeUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData.user_id);
    axios.get('http://localhost:4000/users/', {
      headers: {
        'Authorization': userData.user_id
      }
    })
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])
  const handelDelete = async (user_id) => {
    try {
      await axios.delete('http://localhost:4000/users/' + user_id, {
        headers: {
          'Authorization': userData.user_id
        }
      });
      // You can change the user list by changing setUsers like that instead of reloading
      // here I get the previous state and remove from it the user_id that I have delete 
      // and that will change the UI without having to reload

      setUsers(prevState => prevState.filter(item => item.user_id !== user_id));

      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  const handleUpdate = async (data) => {
    navigate(
      '/update-user/',
      {
        state: {
          userData : data
        }
      }
    );
  }
  return (
    <div className='d-flex vh-100 .bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/creat-user" className='btn bg-success'>Add +</Link>
        <table className='table'>
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
        </table>
      </div>
    </div>
  );
}

export default MangeUsers;
