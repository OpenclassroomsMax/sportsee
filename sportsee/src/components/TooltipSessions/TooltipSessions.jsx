import React from 'react';
import PropTypes from 'prop-types';
import "../TooltipSessions/TooltipSessions.css"


 export default function ToolTypeSessions({active, payload}) {
    if (active){
    return (
        <div className='tooltipsessions-container'>
            <p className='tooltipsessions-infos'>{payload[0].value} min</p>
        </div>
    
     );
    }
    return null
}

ToolTypeSessions.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};