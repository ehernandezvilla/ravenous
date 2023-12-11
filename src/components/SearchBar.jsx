import BusinessList from "./BusinessList";
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
  return (
    <div>
      <div className={styles.searchBar}>
        <h1 className={styles.searchTitle}>ravenous</h1>
        <div className={styles.sortBy}>
          <div className={styles.sortByOptions}>
          <ul>
            {sortChoises.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          </div>
          </div>
        <div className={styles.inputBar}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
        </div>
        <button>Lets Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
