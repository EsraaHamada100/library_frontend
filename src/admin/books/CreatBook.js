import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../shared/variables";
import axios from 'axios';
import { API_URL } from "../../shared/variables";


function CreatBook() {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [field, setField] = useState("");
  const [date, setDate] = useState("");
  const [coverLink, setCoverLink] = useState("");
  const [pdf, setPdf] = useState("");

  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      'book_name': bookName,
      'description': description,
      'author': author,
      'field': field,
      'publication_date': date,
      'cover_link': coverLink,
      'pdf_file' : pdf
    }
    try {
      const response = await axios.post(`${API_URL}/books/`, formData, {
        headers: {
          "Authorization" : userData.user_id
        },
      });
      navigate('/manage-book');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="d-flex vh-80 justify-content-center align-items-center">
      <div className="w-50 rounded p-5">
        <form onSubmit={handleSubmit}>
          <h2>Add Book</h2>
          <div className="mb-2">
            <label htmlFor="">Book name</label>
            <input
              type="text"
              placeholder="Enter book name"
              className="form-control"
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="Text Areas"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Author</label>
            <input
              type="text"
              placeholder="Enter author's name"
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Field</label>
            <input
              type="text"
              placeholder="Enter the field "
              className="form-control"
              onChange={(e) => setField(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Publication date</label>
            <input
              type="date"
              placeholder="Enter book's date"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Cover date</label>
            <input
              type="link"
              placeholder="Enter cover's link"
              className="form-control"
              onChange={(e) => setCoverLink(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Pdf file</label>
            <input
              type="link"
              placeholder="Enter Pdf link"
              className="form-control"
              onChange={(e) => setPdf(e.target.value)}
            />
          </div>
          <br></br>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default CreatBook;
