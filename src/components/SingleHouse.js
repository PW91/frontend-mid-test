import React from "react";
import { Link } from "react-router-dom";
//import propTypes from "prop-types";

const SingleHouse = ({ house, handleDelete }) => {
  const houseUrl = `/house/${house._id}`;
  return (
    <div className="single-house-box">
      <h4>{house.address}</h4>
      <Link to={houseUrl} className="btn--details">
        Show details
      </Link>
      <button
        onClick={handleDelete.bind(null, house._id)}
        className="btn--delete"
      >
        Delete
      </button>
    </div>
  );
};

//SingleHouse.propTypes = {};

export default SingleHouse;
