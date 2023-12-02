import React from "react";
import PropTypes from 'prop-types'


import "../UserMain/UserMain.css";

function UserMain({ name }) {
  return (
    <div className="header-containers_user">
      <h1 className="title_user">
        Bonjour <span className="name-title_user">{name}</span>
      </h1>
      <p className="subtitle_user">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

UserMain.prototype={
  name: PropTypes.string.isRequired,
};

export default UserMain;

