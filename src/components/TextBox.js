import React from "react";
import { Link } from "react-router-dom";
//import propTypes from "prop-types";

const TextBox = props => {
  return (
    <div className="content-box text-box">
      <div className="content-box__heading-wrap">
        <h1>{props.heading}</h1>
      </div>
      <div className="content-box__subheading-wrap">
        <h4>{props.subheading}</h4>
      </div>
      <div className="content-box__text-wrap">
        <p>{props.text}</p>
      </div>

      {props.seeMoreFlag ? (
        <Link to={props.seeMoreLink} className="btn">
          Zobacz więcej
        </Link>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

//TextBox.propTypes = {};

export default TextBox;
