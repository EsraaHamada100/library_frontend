// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import register from "../../utils/auth/register";
// import * as formData from "form-data";

// function CreatBook() {
//   // const [bookName, setBookName] = useState("");
//   const [description, setDescription] = useState("");
//   const [author, setAuthor] = useState("");
//   const [field, setField] = useState("");
//   // const [date, setDate] = useState("");
//   const [coverLink, setCoverLink] = useState("");
//   const navigate = useNavigate();
//   function handleSubmit(event) {
//     event.preventDefault();
//     formData = {
//       'book_name': book_name,
//       'description': description,
//       'author': author,
//       'field': field,
//       'publication_date': publication_date,
//       'cover_link': coverLink,
//     }
//     try {
//       register(formData);
//       navigate('/manage-book');
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div className="d-flex vh-100 justify-content-center align-items-center">
//       <div className="w-50 rounded p-5">
//         <form onSubmit={handleSubmit}>
//           <h2>Add Book</h2>
//           <div className="mb-2">
//             <label htmlFor="">Book name</label>
//             <input
//               type="text"
//               placeholder="Enter book name"
//               className="form-control"
//               onChange={(e) => setBookName(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="">Description</label>
//             <input
//               type="Text Areas"
//               placeholder="Enter Description"
//               className="form-control"
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="">Author</label>
//             <input
//               type="text"
//               placeholder="Enter author's name"
//               className="form-control"
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="">Field</label>
//             <input
//               type="text"
//               placeholder="Enter the field "
//               className="form-control"
//               onChange={(e) => setField(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="">Publication date</label>
//             <input
//               type="date"
//               placeholder="Enter book's date"
//               className="form-control"
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="">Cover date</label>
//             <input
//               type="link"
//               placeholder="Enter cover's link"
//               className="form-control"
//               onChange={(e) => setCoverLink(e.target.value)}
//             />
//           </div>
//           {/* Type : <select  className="form-select"  >
//             {type.map((type) => (
//               <option key={type.id} value={type.value}>
//                 {users.type}
//               </option>
//             ))}
//           </select> */}
//           field : <select value={field} className="form-select" onChange={(e) => { setField(e.target.value); }}>
//             <option value="admin" selected=""> admin </option>
//             {<option value="user" selected=""> user </option>}
//           </select>
//           <br></br>
//           <button className="btn btn-success">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default CreatBook;
