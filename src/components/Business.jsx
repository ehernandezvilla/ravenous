import React from "react";


const restaurant_data = {
    imageSrc: "https://content.codecademy.com/courses/React/react_photo-goose.jpg",
    name: "Goose",
    address: "1234 Goose Ave",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "American",
    rating: 4.5,
    reviewCount: 90
}


function Business() {
  return (
    <div>
      <h1>Business</h1>
      <img
        src={restaurant_data.imageSrc}
        alt="goose"
      />
      <h3>Name</h3>
      <p>{restaurant_data.name}</p>
      <h3>Address</h3>
      <p>{restaurant_data.address}</p>
      <h3>City</h3>
      <p>{restaurant_data.city}</p>
      <h3>State</h3>
      <p>{restaurant_data.state}</p>
      <h3>Zip Code</h3>
      <p>{restaurant_data.zipCode}</p>
      <h3>Category</h3>
      <p>{restaurant_data.category}</p>
      <h3>Rating</h3>
      <p>{restaurant_data.rating}</p>
      <h3>Review count</h3>
      <p>{restaurant_data.reviewCount}</p>
    </div>
  );
}

export default Business;
