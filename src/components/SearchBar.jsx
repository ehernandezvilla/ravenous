import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "../assets/SearchBar.module.css";


const sortChoices = [
  { id: 1, name: "Best Match", value: "best_match" },
  { id: 2, name: "Highest Rated", value: "rating" },
  { id: 3, name: "Most Reviewed", value: "review_count" }
];


function SearchBar({ onSearch, sortBy }) {
  const [localTerm, setLocalTerm] = useState("");
  const [localLocation, setLocalLocation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "term") {
      setLocalTerm(value);
    } else if (name === "location") {
      setLocalLocation(value);
    }
  };

  const handleSortByChange = (sortChoiceName) => {
    const sortValue = sortChoices.find(choice => choice.name === sortChoiceName)?.value || "best_match";
    onSearch(localTerm, localLocation, sortValue); // Use localTerm and localLocation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localTerm, localLocation, sortBy); // Use localTerm and localLocation
  };


  return (
    <div>
      <div className={styles.searchBar}>
        <h1 className={styles.searchTitle}>ravenous</h1>
        <div className={styles.sortBy}>
        <div className={styles.sortByOptions}>
        <ul>
          {sortChoices.map((choice) => (
            <li key={choice.id}
                className={sortBy === choice.value ? styles.sortByActive : ''} // Compare with choice.value
                onClick={() => handleSortByChange(choice.name)}>
              {choice.name}
            </li>
          ))}
        </ul>
      </div>
        </div>
        <div className={styles.inputBar}>
        <input placeholder="Search Businesses" name="term" value={localTerm} onChange={handleChange}/>
        <input placeholder="Where?" name="location" value={localLocation} onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit}>Lets Go</button>
      </div>
    </div>
  );
}


SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  term: PropTypes.string,
  location: PropTypes.string,
  sortBy: PropTypes.string
};


export default SearchBar;
