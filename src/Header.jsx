import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "./utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH } from "./utils/constants";
import { setResult } from "./utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.search);
  const [searchText, setSearchText] = useState("");
  const [autoSuggest, setAutoSuggest] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchResults[searchText]) {
        setAutoSuggest(searchResults[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH + searchText);
    const json = await data.json();
    // dispatch(setResult({ [searchText]: json[1] }));
    dispatch(setResult({ [searchText]: [json[1]] }));
    setAutoSuggest(json[1]);
  };
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
      <div className="relative">
        <div>
          <input
            className="border border-gray-400 py-2 px-3 w-lg rounded-tl-3xl rounded-bl-3xl"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggest(true)}
            onBlur={() => setShowSuggest(false)}
          />
          <button className="border-l-0 border border-gray-400 rounded-tr-3xl rounded-br-3xl p-2 bg-gray-100">
            🍳
          </button>
        </div>
        {autoSuggest.length > 0 && showSuggest && (
          <div className="absolute bg-white rounded-3xl shadow-md py-4 px-5 w-lg border-gray-200">
            <ul>
              {autoSuggest.map((item, i) => (
                <li
                  className="hover:bg-gray-200 rounded-lg px-3 py-2"
                  key={i}
                  onClick={() => (setAutoSuggest(""), setSearchText(item))}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
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
