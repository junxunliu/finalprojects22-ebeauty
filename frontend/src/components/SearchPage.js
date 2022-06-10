import { useNavigate } from "react-router-dom";
import '../css/index.css';
import '../css/SearchPage.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ServiceDropdown from './ServiceDropdown';

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = ({ searchResults }) => {

  let navigate = useNavigate();

  function handleClick () {
    navigate("/searchpage");
  }

  const [filteredData, setfilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // let searchResults = profileData.profile.filter(profile => {
  //   return Object.keys(profile).some(key => {
  //     return profile[key].toString().toLowerCase().includes(filteredData.toString().toLowerCase());
  //   });
  // });

  // when user types in the search bar, the search term will be updated
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    const newFilteredResults = searchResults.filter(profile => {
      return Object.keys(profile).some(key => {
        return profile[key].toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
      });
    });

    if (searchTerm === "") {
      setfilteredData([]);
    }
    else {
      setfilteredData(newFilteredResults);
    }
  };

  const handleClickX = () => {
    setfilteredData([]);
    setSearchInput("");
  };

  return (
    <div className="search-page">
      <form className="search-bar">
        <div className="search-btn">
          <button className="search-icon" type="submit" onClick={handleClick}>
            {filteredData.length === 0 ? (
              <FontAwesomeIcon icon={faSearch} />
            ) : (
              <FontAwesomeIcon icon={faXmark} onClick={handleClickX} />
            )}
          </button>
        </div>
        <input
          value={searchInput}
          type="text"
          className="search-text"
          placeholder="No Result? Find Another Service Here!"
          onChange={handleChange} />
      </form>
      <div className="location-bar">
        <input type="text" className="location-text" placeholder="Location" />
      </div>

      <ServiceDropdown />

      <div className="search-results">
        <header>
          <h1>Recommended Taskers</h1>
        </header>
        {/* map the filtered data set */}
        {filteredData.map((result, key) => {
          return (
            <div className="search-result" key={key}>
              <img src={require('../images/barber.jpg')} className="image-barber" />
              <div className="search-result-text">
                <h3>{result.name}</h3>
                <p>{result.title}</p>
                <div className="rate">
                  <span>{result.rate}</span>
                </div>
              </div>
              <a href="#">View Profile</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;