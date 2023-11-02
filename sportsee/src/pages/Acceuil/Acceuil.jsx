import React from 'react';
import { NavLink } from 'react-router-dom';
import ContextButton from '../../components/ContextButton/ContextButton';
import "../Acceuil/Acceuil.css"


function Acceuil() {
    return ( 
        <main>
            <h1>USER</h1>
            <div className='button-containers'>
                <NavLink to="user/12">Karl</NavLink>
                <NavLink to="user/18">Cecilia</NavLink>
                <ContextButton></ContextButton>
            </div>

        </main>
     );
}

export default Acceuil;