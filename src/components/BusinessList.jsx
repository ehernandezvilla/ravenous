import PropTypes from 'prop-types';
import Business from './Business';
import style from "../assets/BusinessList.module.css";



function BusinessList(props) {
  const { data } = props;

  return (
    <div>
        <h1>BusinessList</h1>
        <div className={style.businessListContainer}>
          <Business data={data} />
          <Business data={data} />
          <Business data={data} />
          <Business data={data} />
          <Business data={data} />
          <Business data={data} />
          <Business data={data} />
          <Business data={data} />
        </div>
    </div>
  );
}

BusinessList.propTypes = {
  data: PropTypes.object.isRequired
};


export default BusinessList;