import React, { useState } from "react";
import "./styles/UserRequestsPage.css";

const data = [
  {
    requestId: "1",
    bookName: "Book 1",
    approvalState: "Approved",
    pdfFile: "/path/to/file1.pdf"
  },
  {
    requestId: "2",
    bookName: "Book 2",
    approvalState: "Pending",
    pdfFile: "/path/to/file2.pdf"
  },
  {
    requestId: "3",
    bookName: "Book 3",
    approvalState: "Declined",
    pdfFile: "/path/to/file3.pdf"
  },
  {
    requestId: "1",
    bookName: "Book 1",
    approvalState: "Approved",
    pdfFile: "/path/to/file1.pdf"
  },
  {
    requestId: "2",
    bookName: "Book 2",
    approvalState: "Pending",
    pdfFile: "/path/to/file2.pdf"
  },
  {
    requestId: "3",
    bookName: "Book 3",
    approvalState: "Declined",
    pdfFile: "/path/to/file3.pdf"
  },
  {
    requestId: "1",
    bookName: "Book 1",
    approvalState: "Approved",
    pdfFile: "/path/to/file1.pdf"
  },
  {
    requestId: "2",
    bookName: "Book 2",
    approvalState: "Pending",
    pdfFile: "/path/to/file2.pdf"
  },
  {
    requestId: "3",
    bookName: "Book 3",
    approvalState: "Declined",
    pdfFile: "/path/to/file3.pdf"
  },
];

const UserRequestsPage = () => {
  const [filter, setFilter] = useState("All States");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData =
    filter === "All States"
      ? data
      : data.filter((item) => item.approvalState === filter);

  return (
    <div className='user-requests-page'>
      <select value={filter} className='states-drop-down-list' onChange={handleChange}>
        <option value="All States">All States</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Declined">Declined</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Book Name</th>
            <th>Approval State</th>
            <th>PDF File</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.requestId} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{item.requestId}</td>
              <td>{item.bookName}</td>
              <td>{item.approvalState}</td>
              <td><a href={item.pdfFile}>Download</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRequestsPage;
