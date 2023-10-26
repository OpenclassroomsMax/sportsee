import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Acceuil/Acceuil"
import ContextButton from '../../components/ContextButton/ContextButton';


function Acceuil() {
    return ( 
        <main>
            <h1>USER</h1>
            <NavLink to="user/12">12</NavLink>
            <NavLink to="user/18">18</NavLink>
            <ContextButton></ContextButton>

        </main>
     );
}

export default Acceuil;