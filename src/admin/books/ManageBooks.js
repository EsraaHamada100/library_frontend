import React, { useState, useEffect } from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi';
import {MdAddCircle} from 'react-icons/md';
import "./UserRequestsPage.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userData } from '../../shared/variables';
function ManageBooks() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/books/', {
      headers: {
        'Authorization': userData.user_id
      }
    })
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }, [])
  const handelDelete = async (book_id) => {
    try {
      await axios.delete('http://localhost:4000/books/' + book_id, {
        headers: {
          'Authorization': userData.user_id
        }
      });
      
      // You can change the user list by changing setUsers like that instead of reloading
      // here I get the previous state and remove from it the user_id that I have delete 
      // and that will change the UI without having to reload

      setBooks(prevState => prevState.filter(item => item.book_id !== book_id));

      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  const handelUpdate = async (data)=>{
    navigate(
      '/update-book/',
      {
        state: {
          bookData : data
        }
      })
  }
  return (
    <div className='d-flex vh-100 .bg-primary justify-content-center align-items-center'>
      <div className='w-80  rounded p-3'>
        <Link to="/creat-book" className=' font-weight-bold text-black btn bg-light '> <MdAddCircle size='25' color='green'/> add Book</Link>
        <table>
        <thead>
          <tr>
              <th>ID</th>
              <th>Book name</th>
              <th>Author</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>{
            books.map((data, i) => (
              <tr key={i}>
                <td>{data.book_id}</td>
                <td>{data.book_name}</td>      
                <td>{data.author}</td>
                <td>
                  <button onClick={e => handelUpdate(data)} ><BiEditAlt size='20' color='blue'/></button>
                  <button  onClick={e => handelDelete(data.book_id)}><AiFillDelete size='20' color='red'/></button>

                </td>
              </tr>
            ))
          }</tbody>
        </table>
        {/* // <table className='table'>
        //   <thead>
        //     <tr>
        //       <th>ID</th>
        //       <th>Book name</th>
        //       <th>Author</th>
        //     </tr>
        //   </thead>
        //   <tbody>{ */}
        {/* //     books.map((data, i) => (
        //       <tr key={i}>
        //         <td>{data.book_id}</td>
        //         <td>{data.book_name}</td>      
        //         <td>{data.author}</td>
        //         <td>
        //           <button onClick={e => handelUpdate(data)} className='btn btn-primary'>Update</button>
        //           <button className='btn btn-danger ms-2' onClick={e => handelDelete(data.book_id)}>Delete</button>
        //         </td>
        //       </tr>
        //     ))
        //   }</tbody>
        // </table>  */}
       </div>
     </div>
  );
}

export default ManageBooks;