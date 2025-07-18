import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from "./utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          onClick={() => dispatch(toggleNav())}
          className="w-8 hover:cursor-pointer mr-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt="Hamburger Menu"
        />
        <Link to="/">
          <img
            className="w-30"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div>
        <input
          className="border border-gray-400 py-2 px-3 w-lg rounded-tl-3xl rounded-bl-3xl"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="border-l-0 border border-gray-400 rounded-tr-3xl rounded-br-3xl p-2 bg-gray-100">
          🍳
        </button>
      </div>
      <img
        className="w-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="Logo"
      />
    </div>
  );
};

export default Header;
