import React from "react";
import "../Thumbnail/Thumbnail.css";

export default function Thumbnail({ icon, info, text }) {
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
