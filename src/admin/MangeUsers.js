import React, { useState, useEffect } from 'react';
import axios from 'axios';
function MangeUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/users/')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
    },[])
  return (
    <div className='d-flex vh-100 .bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <button className='btn bg-success'>Add +</button>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>e-mail</th>
          </tr>
        </thead>
        <tbody>{
          users.map((data , i)=>(
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.user_id}</td>
              <td>{data.email}</td>
            </tr>
          ))
          }</tbody>
      </table>
      </div>
    </div>
  );
}

export default MangeUsers;
