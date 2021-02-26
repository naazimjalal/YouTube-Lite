import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <div>
    <div className="app">
            <div className="header">
                <div className="logo">
                    <div className="youtube-logo">
                        <img className="youtube-logo" src="https://i.pinimg.com/736x/e7/ec/b8/e7ecb88f8aa92d1b9d1925558032a497.jpg"></img>
                    </div>
                    <div className="lite-logo">
                        Lite
                    </div>
                </div>
                <div className="search">
                    <div className="search__input">
                        <input type="text" className="search-bar" id="search-bar" fullWidth label="Search..." value={searchTerm} onChange={handleChange} onKeyPress={onKeyPress}/>
                        <SearchIcon className="search__inputIcon" value={searchTerm} onChange={handleChange} onClick={onKeyPress}/>
                    </div>
                </div>
            </div>
            </div>
    </div>
  );
}
