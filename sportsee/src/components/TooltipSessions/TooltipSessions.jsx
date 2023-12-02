import React from "react";
import "../TooltipSessions/TooltipSessions.css";
import PropTypes from 'prop-types';


function ToolTypeSessions({ active, payload }) {
  if (active) {
    return (
      <div className="tooltipsessions-container">
        <p className="tooltipsessions-infos">{payload[0].value} min</p>
      </div>
    );
  }
  return null;
}

ToolTypeSessions.prototype={
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
};

export default ToolTypeSessions;

