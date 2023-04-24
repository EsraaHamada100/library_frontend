import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL, userData } from "../../shared/variables";

function UpdateBook() {
  const { state } = useLocation();
  console.log('state ',state);
  const [bookName, setBookName] = useState(state.bookData.book_name);
  const [description, setDescription] = useState(state.bookData.description);
  const [author, setAuthor] = useState(state.bookData.author);
  const [field, setField] = useState(state.bookData.field);
  const [date, setDate] = useState(state.bookData.publication_date.split('T')[0]);
  const [coverLink, setCoverLink] = useState(state.bookData.cover_link);
  const [pdf, setPdf] = useState(state.bookData.pdf_file);
  const [bookId, setBookId] = useState(state.bookData.book_id);
console.log(state.bookData.publication_date);
  const navigate = useNavigate();
  function handleSubmit(event) {
    console.log('we are in submit update');
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
    axios.put(
      `${API_URL}/books/${bookId}` ,
      formData,
      {
        headers: {
          'Authorization': userData.user_id
        }
      }
    )
      .then((res) => {
        console.log(res);
        navigate('/manage-book', {replace: true});
      }).catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-80 justify-content-center align-items-center">
      <div className="w-30 rounded p-3">
        <form  onSubmit={handleSubmit}>
          <h2>Update Book</h2>
          <div className="mb-2">
            <label htmlFor="">Book name</label>
            <input
              type="text"
              value={bookName}
              placeholder="Enter book name"
              className="form-control"
              onChange={(e) => setBookName(e.target.value)}
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
          <div className="mb-2">
            <label htmlFor="">Author</label>
            <input
              type="text"
              value={author}
              placeholder="Enter author's name"
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Field</label>
            <input
              type="text"
              value={field}
              placeholder="Enter the field "
              className="form-control"
              onChange={(e) => setField(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Publication date</label>
            <input
              type="date"
              value={date}
              placeholder="Enter book's date"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Cover link</label>
            <input
              type="link"
              value={coverLink}
              placeholder="Enter cover's link"
              className="form-control"
              onChange={(e) => setCoverLink(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Pdf file</label>
            <input
              type="link"
              value={pdf}
              placeholder="Enter Pdf link"
              className="form-control"
              onChange={(e) => setPdf(e.target.value)}
            />
          </div>
          <br></br>
          <button className="btn btn-success" >Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateBook;
