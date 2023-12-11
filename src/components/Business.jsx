import PropTypes from 'prop-types';
import style from "../assets/Business.module.css";
import "../assets/Business.module.css";

function Business(props) {
  const { data } = props;

  return (
    <div>
      <div className={style.BusinessContainer}>
        <div className={style.BusinessCard}>
          <img src={data.imageSrc} alt={data.name} />
          <div className={style.BusinessInfo}>
            <p>Name: {data.name}</p>
            <p>Address: {data.address}</p>
            <p>City: {data.city}</p>
            <p>State: {data.state}</p>
            <p>Zip code: {data.zipCode}</p>
            <p>Category: {data.category}</p>
            <p>Rating: {data.rating}</p>
            <p>Review count: {data.reviewCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types

Business.propTypes = {
  data: PropTypes.shape({
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number
  }).isRequired
};



export default Business;
