import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (inputRef.current.value) {
      navigate(`/search/${inputRef.current.value}`);
    }
  };
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Movies for you!</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Header;
