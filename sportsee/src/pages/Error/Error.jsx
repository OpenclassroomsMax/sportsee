import React from "react";
import { Link } from "react-router-dom";

import "../Error/Error.css";

export default function Error() {
  return (
    <div className="error-containers">
      <h1 className="type-error">404</h1>
      <p className="infos-error">Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
