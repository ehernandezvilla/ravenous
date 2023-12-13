import PropTypes from 'prop-types';
import Business from './Business';
import style from "../assets/BusinessList.module.css";

function BusinessList({ data }) {
  if (!data || data.length === 0) {
    return <div> No business found. </div>
  } else {
  return (
    <div>
      <h1>Business List</h1>
      <div className={style.businessListContainer}>
        {data.map((business) => (
          <Business key={business.id} data={business} />
        ))}
      </div>
    </div>
  );
  }
}

BusinessList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired
};

export default BusinessList;
