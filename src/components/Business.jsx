import PropTypes from 'prop-types';
import style from "../assets/Business.module.css";

function Business({ data }) {
  return (
    <div className={style.BusinessContainer}>
      <div className={style.BusinessCard}>
        <img src={data.image_url} alt={data.name} />
        <div className={style.BusinessInfo}>
          <a href={data.url}><h2>{data.name}</h2></a>
          <p>Address: {data.location.address1}</p>
          <p>City: {data.location.city}</p>
          <p>State: {data.location.state}</p>
          <p>Zip code: {data.location.zip_code}</p>
          <p>Category: {data.categories[0].title}</p>
          <p>Rating: {data.rating}</p>
          <p>Review count: {data.review_count}</p>
        </div>
      </div>
    </div>
  );
}

Business.propTypes = {
  data: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.object,
    categories: PropTypes.array,
    rating: PropTypes.number,
    review_count: PropTypes.number,
    url: PropTypes.string
  }).isRequired
};

export default Business;
