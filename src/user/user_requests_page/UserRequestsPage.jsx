import React, { useEffect, useState } from "react";
import "./styles/UserRequestsPage.css";
import { API_URL, userData } from "../../shared/variables";
import axios from "axios";
import getSpecificUserRequests from "../../utils/getSpecificUserRequest";
import { requestStates } from "../../shared/variables";
import {BsDashLg} from 'react-icons/bs';

const UserRequestsPage = () => {
  const [requestsList, setRequestsList] = useState([]);
  const getUserRequests = async()=>{
    const data =  await getSpecificUserRequests();
    setRequestsList(data);
  }
  useEffect( () => {
    getUserRequests();
  }, []);

  const [approvalState, setApprovalState] = useState("All States");

  const handleChange = (event) => {
    setApprovalState(event.target.value);
  };

  const filteredData = 
    approvalState === "All States"
      ? requestsList
      : requestsList.filter((item) => item.approval_state === approvalState);
  console.log('filtered data ', filteredData);
  return requestsList?(
    <div className='user-requests-page'>
      <select value={approvalState} className='states-drop-down-list' onChange={handleChange}>
        <option value="All States">All States</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="declined">Declined</option>
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
            <tr key={item.request_id} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{item.request_id}</td>
              <td>{item.book_name}</td>
              <td>{item.approval_state}</td>
              {
              item.approval_state === requestStates.approved?
              <td><a href={item.pdf_file} target="_blank">Open</a></td>
              :<td><BsDashLg /></td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ):(<div>NO REQUESTS FOUND</div>);
};

export default UserRequestsPage;
