import React from "react";
import "../Tooltip/Tooltip.css";
import PropTypes from 'prop-types';


function ToolType({ active, payload }) {
  if (active) {
    return (
      <div className="tooltip-container">
        <p className="tooltip-infos">{payload[0].value}kg</p>
        <p className="tooltip-infos">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
}

ToolType.prototype={
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default ToolType;