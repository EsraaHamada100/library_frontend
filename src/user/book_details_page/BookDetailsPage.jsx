

import React, { useState, useEffect } from "react";
import "./styles/BookDetailsPage.css";
import { BsCart3 } from 'react-icons/bs';
import { useLocation } from "react-router-dom";
import orderBook from "../../utils/user_requests/orderBook";
import { userData, requestStates } from '../../shared/variables'
import getRequestState from "../../utils/user_requests/getRequestState";
import { MdPendingActions, MdDoNotDisturb } from 'react-icons/md';
import { AiOutlineBook } from 'react-icons/ai';
import LoadingIndicator from "../../shared/components/LoadingIndicator";
import CollapsibleChapter from "./components/CollapsibleChapter";

const BookDetailsPage = () => {
  const { state } = useLocation();
  const [currentRequestState, setCurrentRequestState] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const request = {
    userId: userData.user_id,
    bookId: state.bookId,
  }

  async function fetchRequestState() {
    try {
      const response = await getRequestState(request);
      console.log('current request state ',response);
      setCurrentRequestState(response);
    } catch (error) {
      // Handle error here
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRequestState();
  }, []);

  async function orderTheBook() {
    try {
      await orderBook(request);
      setCurrentRequestState(requestStates.pending);

    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function openTheBook() {
    const url = state.bookLink;
    window.open(url, '_blank');
  }

  async function handleBookActionButtonClick() {
    switch (currentRequestState) {
      case requestStates.pending:
        orderTheBook();
        break;
      case requestStates.approved:
        openTheBook();
        break;
      case requestStates.declined:
        break;
      default:
        orderTheBook();
    }
  }

  let buttonComponent;
  switch (currentRequestState) {
    case requestStates.pending:
      buttonComponent = <><MdPendingActions /><span>Pending</span></>;
      break;
    case requestStates.approved:
      buttonComponent = <><AiOutlineBook /> <span>Read</span></>;
      break;
    case requestStates.declined:
      buttonComponent = <><MdDoNotDisturb /><span>declined</span></>
      break; // don't forget to add the break statement
    default:
      buttonComponent = (
        <>
          <BsCart3 /> <span>Request now</span>
        </>
      );
  }

  return (
    <div className="book-details-container">
      {isLoading && <LoadingIndicator />}
      {!isLoading && (
        <>
          <div className="book-details-cover">
            <img
              src={state.bookCover}
              alt="Book Cover"
            />
          </div>
          <div className="book-details-content">
            <h1 className="book-title">{state.title}</h1>
            <h3 className="book-author">By {state.author}</h3>
            <p className="book-description">
              {state.description}
            </p>
            <div className="book-type">{state.field}</div>
            <button className="book-action-button" onClick={handleBookActionButtonClick}>
              {buttonComponent}
            </button>
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}


            {
              state.chapters ?
              // the book has chapters associated with it
                (<>
                  <h3>Book Chapters</h3>
                  {
                    state.chapters.map((chapter, index) => (
                      <CollapsibleChapter
                        key={index}
                        title={chapter.chapter_title}
                        content={chapter.description}
                      />
                    ))
                  }
                </>)
                :
                // the book doesn't have chapters
                (<></>)
            }

          </div>
        </>
      )}
    </div>
  );
};

export default BookDetailsPage;
