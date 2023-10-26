import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';

import Acceuil from "./pages/Acceuil/Acceuil"
import User from "./pages/User/User"
import LeftNav from "./components/LeftNav/LeftNav";
import { FetchProvider } from "./utils/context/FetchContext";

export default function App() {
  return (
    <FetchProvider>
    <Router>
        <Header />
        <LeftNav />
        <Routes>
          <Route path="/" element={<Acceuil/>} />
          <Route exact path="/user/:id" element={<User />} />
        </Routes>
    </Router>
    </FetchProvider>
  );
}