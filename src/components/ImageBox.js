import React from "react";
//import propTypes from "prop-types";

const ImageBox = props => {
  return (
    <div
      className="content-box image-box"
      style={{
        backgroundImage: `url(${props.imgUrl})`
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

ImageBox.propTypes = {};

export default ImageBox;
