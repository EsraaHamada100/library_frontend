import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const API_URL = 'http://localhost:4000';
function MangeUsers(){
  const [users, setusers] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/users/')
    .then(res=>console.log(res))
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
              <td>data.name</td>
              <td>data.user-id</td>
              <td>data.email</td>
            </tr>
          ))
          }</tbody>
      </table>
      </div>
    </div>
  );
}

export default MangeUsers;
