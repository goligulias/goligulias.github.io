import React from "react";
import "./Portfolio.scss";
import PaginaPrincipal from "../paginas/PaginaPrincipal/PaginaPrincipal.jsx";
import Menu from "./Menu/Menu";
import "../componentes/Menu/Menu.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={PaginaPrincipal} />
    </Router>
  );
}

export default App;
