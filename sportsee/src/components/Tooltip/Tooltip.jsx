import React from 'react';
import PropTypes from 'prop-types';
import "../Tooltip/Tooltip.css"


 export default function ToolType({active, payload}) {
    if (active){
    return (
        <div className='tooltip-container'>
            <p className='tooltip-infos'>{payload[0].value}kg</p>
            <p className='tooltip-infos'>{payload[1].value}Kcal</p>
        </div>
    
     );
    }
    return null
}

ToolType.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};