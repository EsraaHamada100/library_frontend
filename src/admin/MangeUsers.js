import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MangeUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/users/')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
    },[])
    const handelDelete =async (user_id)=>{
      try{
        await axios.delete('http://localhost:4000/users/' + user_id)
        window.location.reload()
      }catch(err){
        console.log(err);
      }
    }
  return (
    <div className='d-flex vh-100 .bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <Link to="/creat" className='btn bg-success'>Add +</Link>
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
          users.map((data , i)=>(
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.user_id}</td>
              <td>{data.email}</td>
              <td>
                <Link to={`update/${data.user_id}`} className='btn btn-primary'>Update</Link>
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
