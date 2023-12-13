import './App.css'
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';
import Footer from './components/Footer';
import YelpDebug from './components/YelpDebug';

const restaurant_data = {
  imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "Goose",
  address: "1234 Goose Ave",
  city: "New York",
  state: "NY",
  zipCode: "10001",
  category: "American",
  rating: 4.5,
  reviewCount: 90
}

function App() {
  return (
    <>
      <SearchBar />
      <BusinessList data={restaurant_data} />
      <YelpDebug />
      <Footer />
    </>
  );
}

export default App;
