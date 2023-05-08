import React, { useState, useEffect } from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi';
import {MdAddCircle} from 'react-icons/md';
// import "./chapters.css"
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userData } from '../../shared/variables';
function ManageChapters() {
  const navigate = useNavigate();  
  const { state } = useLocation();

  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/chapters?book_id='+state.bookId, {
      headers: {
        'Authorization': userData.user_id
      }
    })
      .then(res => setChapters(res.data))
      .catch(err => console.log(err))
  }, [])
  const handelDelete = async (chapter_id) => {
    try {
      await axios.delete('http://localhost:4000/chapters/' + chapter_id, {
        headers: {
          'Authorization': userData.user_id
        }
      });
      
      // You can change the user list by changing setUsers like that instead of reloading
      // here I get the previous state and remove from it the user_id that I have delete 
      // and that will change the UI without having to reload

      setChapters(prevState => prevState.filter(item => item.chapter_id !== chapter_id));

      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  const handelUpdate = async (data)=>{
    navigate(
      '/update-chapters/',
      {
        state: {
          chapterData : data
        }
      })
  }
  const handleCreate = ()=>{
    navigate(
      '/create-chapters',
      {
        state: {
          bookId : state.bookId
        }
      })
  }
  return (
    <div className='d-flex vh-100 .bg-primary justify-content-center align-items-center'>
      <div className='w-80  rounded p-3'>
        <a  className=' font-weight-bold text-black btn bg-light ' onClick={handleCreate}> <MdAddCircle size='25' color='green'/> add chapter</a>
        <table>
        <thead>
          <tr>
              <th>Chapter ID</th>
              <th>Book ID</th>
              <th>Chapter title</th>
              <th>Description</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>{
            chapters.map((data, i) => (
              <tr key={i}>
                <td>{data.chapter_id}</td>
                <td>{state.bookId}</td>      
                <td>{data.chapter_title}</td>
                <td>{data.description}</td>
                <td>
                  <button onClick={e => handelUpdate(data)} ><BiEditAlt size='20' color='blue'/></button>
                  <button  onClick={e => handelDelete(data.chapter_id)}><AiFillDelete size='20' color='red'/></button>

                </td>
              </tr>
            ))
          }</tbody>
        </table>
       </div>
     </div>
  );
}

export default ManageChapters;