import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../shared/variables";
import axios from 'axios';
import { API_URL } from "../../shared/variables";


function CreateChapter() {
  const [chapterId, setChapterId] = useState("");
  const [description, setDescription] = useState("");
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      'book_id': bookId,
      'description': description,
      'chapter_title': title,
    }
    try {
      const response = await axios.post(`${API_URL}/chapters/`, formData, {
        headers: {
          "Authorization" : userData.user_id
        },
      });
      navigate('/book-chapters');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="d-flex vh-80 justify-content-center align-items-center">
      <div className="w-50 rounded p-5">
        <form onSubmit={handleSubmit}>
          <h2>Add chapter</h2>
          <div className="mb-2">
            <label htmlFor="">Book ID</label>
            <input
              type="text"
              placeholder="Enter book ID"
              className="form-control"
              onChange={(e) => setBookId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter the title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <textarea
              type="text Areas"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <br></br>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default CreateChapter;
