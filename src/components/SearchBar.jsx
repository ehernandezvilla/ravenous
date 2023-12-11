import { useState } from "react";
import styles from "../assets/SearchBar.module.css";


const sortChoises = [
  {
    id: 1,
    name: "Best Match"
  },
  {
    id: 2,
    name: "Highest Rated"
  },
  {
    id: 3,
    name: "Most Reviewed"
  }
];

function SearchBar() {
  const [sortBy, setSortBy] = useState("Best Match");
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");


  const handleChange = (e) => {
    const {name, value} = e.target;
    
    switch (name) {
      case "sortBy":
        setSortBy(value);
        break;
      case "term":
        setTerm(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const handleSortByChange = (sortChoiceName) => {
    setSortBy(sortChoiceName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`You are searching for ${term} in ${location} sorted by ${sortBy}`);
  };


  return (
    <div>
      <div className={styles.searchBar}>
        <h1 className={styles.searchTitle}>ravenous</h1>
        <div className={styles.sortBy}>
          <div className={styles.sortByOptions}>
          <ul>
            {sortChoises.map((choice) => (
              <li key={choice.id} 
              className={sortBy === choice.name ? styles.sortByActive : ''}
              onClick={() => handleSortByChange(choice.name)}>
                {choice.name}
              </li>
            ))}
            <hr></hr>
          </ul>
          </div>
        </div>
        <div className={styles.inputBar}>
        <input placeholder="Search Businesses" name="term" value={term} onChange={handleChange}/>
        <input placeholder="Where?" name="location" value={location} onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit}>Lets Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
