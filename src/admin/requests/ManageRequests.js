import React, { useEffect, useState } from "react";
import "./UserRequestsPage.css";
import { SlUserFollowing, SlUserUnfollow } from "react-icons/sl";
import { AiFillDelete } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL, userData } from "../../shared/variables";
import axios from "axios";
import getSpecificUserRequests from "../../utils/user_requests/getSpecificUserRequest";
import { requestStates } from "../../shared/variables";
import { BsDashLg } from "react-icons/bs";
// const [userId, setUserId] = useState(userData.user_id);

const ManageRequests = () => {
  const [requestsList, setRequestsList] = useState([]);
  const getUserRequests = async () => {
    const data = await getSpecificUserRequests();
    setRequestsList(data);
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/requests/", {
        headers: {
          Authorization: userData.user_id,
        },
      })
      .then((res) => setRequestsList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const approveRequest = (id) => {
    setRequestsList((prevState) =>
      prevState.map((item) => {
        if (item.request_id === id) {
          // return a new object with the updated value
          return { ...item, approval_state: requestStates.approved };
        }
        // for other items, return them as they are
        return item;
      })
    );
    const body = {
      approval_state: requestStates.approved,
    };
    axios.put("http://localhost:4000/requests/" + id, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: userData.user_id,
      },
    });
  };
  const declineRequest = (id) => {
    setRequestsList((prevState) =>
      prevState.map((item) => {
        if (item.request_id === id) {
          // return a new object with the updated value
          return { ...item, approval_state: requestStates.declined };
        }
        // for other items, return them as they are
        return item;
      })
    );
    const body = {
      approval_state: requestStates.declined,
    };
    axios.put("http://localhost:4000/requests/" + id, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: userData.user_id,
      },
    });
  };

  const deleteRequest = (id) => {
    setRequestsList((prevState) =>
      prevState.filter((item) => item.request_id !== id)
    );
    axios.delete("http://localhost:4000/requests/" + id , {
      headers: {
        "Content-Type": "application/json",
        Authorization: userData.user_id,
      },
    })
  };
  const [approvalState, setApprovalState] = useState("All States");

  const handleChange = (event) => {
    setApprovalState(event.target.value);
  };

  const filteredData =
    approvalState === "All States"
      ? requestsList
      : requestsList.filter((item) => item.approval_state === approvalState);
  console.log("filtered data ", filteredData);
  return requestsList ? (
    <div className="user-requests-page">
      <select
        value={approvalState}
        className="states-drop-down-list"
        onChange={handleChange}
      >
        <option value="All States">All States</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="declined">Declined</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>User ID</th>
            <th>Book Name</th>
            <th>Approval State</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr
              key={item.request_id}
              className={index % 2 === 0 ? "even" : "odd"}
            >
              <td>{item.request_id}</td>
              <td>{item.user_id}</td>
              <td>{item.book_name}</td>
              <td>{item.approval_state}</td>
              <td>
                {item.approval_state === requestStates.pending && (
                  <>
                    <button className="approve" onClick={() => approveRequest(item.request_id)}>
                      <SlUserFollowing size="23" color="green" />
                    </button>
                    <button className="inapprove" onClick={() => declineRequest(item.request_id)}>
                      <SlUserUnfollow size="23" color="red" />
                    </button>{" "}
                  </>
                )}
              </td>
              <td>
                {" "}
                <button className="delete" onClick={() => deleteRequest(item.request_id)}>
                  <AiFillDelete size="20" color="black" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>NO REQUESTS FOUND</div>
  );
};

export default ManageRequests;
