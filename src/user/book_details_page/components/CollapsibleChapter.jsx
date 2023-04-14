import React, { useState } from "react";
import '../styles/CollapsibleChapter.css';
import { IoIosArrowDown } from 'react-icons/io'
const CollapsibleChapter = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  function toggleCollapsible() {
    setIsActive(!isActive);
  }

  return (
    <div className={`collapsible ${isActive ? "active" : ""}`} onClick={toggleCollapsible}>
      <div className='chapter-title'>
        <h5>{title}</h5>
        <IoIosArrowDown />
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CollapsibleChapter;