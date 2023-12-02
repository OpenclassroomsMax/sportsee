import React from "react";
import "../Thumbnail/Thumbnail.css";
import PropTypes from 'prop-types';


function Thumbnail({ icon, info, text }) {
  return (
    <div className="thumbnail-container">
      <img src={icon} alt="calories icon" />
      <div className="thumbnail-infos">
        <p className="thumbnail-user">{info}</p>
        <p className="thumbnail-unit">{text}</p>
      </div>
    </div>
  );
}

Thumbnail.prototype={
  icon: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Thumbnail;