import React from 'react';
import PropTypes from 'prop-types'; 


export default function UserMain({name}) {

    return (  
        <div>
            <h1>Bonjour {name}</h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>  
    );
}

UserMain.propTypes = {
	name: PropTypes.string,
};