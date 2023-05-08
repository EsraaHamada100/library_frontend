import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL, userData } from "../../shared/variables";

function UpdateChapter() {
  const { state } = useLocation();
  console.log('state ',state);
  const [title, setTitle] = useState(state.chapterData.chapter_title);
  const [description, setDescription] = useState(state.chapterData.description);
  const [chapterID, setChapterId] = useState(state.chapterData.chapter_id);

// console.log(state.bookData.publication_date);
  const navigate = useNavigate();
  function handleSubmit(event) {
    console.log('we are in submit update');
    event.preventDefault();
    const formData = {
      'chapter_title': title,
      'description': description,
    }
    axios.put(
      `${API_URL}/chapters/${chapterID}` ,
      formData,
      {
        headers: {
          'Authorization': userData.user_id
        }
      }
    )
      .then((res) => {
        console.log(res);
        navigate(-1);
        // navigate('/book-chapters', {replace: true});
      }).catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-80 justify-content-center align-items-center">
      <div className="w-50 rounded p-3">
        <form  onSubmit={handleSubmit}>
          <h2>Update chapter</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={title}
              placeholder="Enter title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="Text Areas"
              value={description}
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br></br>
          <button className="btn btn-success" >Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateChapter;
