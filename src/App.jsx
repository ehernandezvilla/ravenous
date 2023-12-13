import { useState, useEffect, useCallback } from "react";
import { getData } from "./utils/utils";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import Footer from "./components/Footer";
import "./App.css";

//Dummy data
// const restaurant_data = {
//   imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
//   name: "Goose",
//   address: "1234 Goose Ave",
//   city: "New York",
//   state: "NY",
//   zipCode: "10001",
//   category: "American",
//   rating: 4.5,
//   reviewCount: 90
// }

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [term, setTerms] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const fetchRestaurants = useCallback(async () => {
    if (term && location && sortBy) {
      try {
        const fetchedData = await getData(term, location, sortBy);
        setRestaurants(fetchedData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [term, location, sortBy]); // Dependencies

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]); // fetchRestaurants is now a dependency

  const handleSearch = (newTerm, newLocation, newSortBy) => {
    setTerms(newTerm);
    setLocation(newLocation);
    setSortBy(newSortBy);
    fetchRestaurants();
  };

  return (
    <>
      <SearchBar
        onSearch={handleSearch}
        term={term}
        location={location}
        sortBy={sortBy}
      />
      <BusinessList data={restaurants} />
      <Footer />
    </>
  );
}

export default App;
