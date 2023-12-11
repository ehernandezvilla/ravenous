import Business from './Business';
import style from "../assets/BusinessList.module.css";

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

function BusinessList() {
  return (
    <div>
        <h1>BusinessList</h1>
        <div className={style.businessListContainer}>
          <Business data={restaurant_data} />
          <Business data={restaurant_data} />
          <Business data={restaurant_data} />
          <Business data={restaurant_data} />
        </div>
    </div>
  );
}

export default BusinessList;