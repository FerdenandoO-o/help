import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Comercio from "./pages/Comercio";
import Menu from "./pages/Menu";
// import Cotacao from "./pages/Cotacao";
import Produto from "./pages/Produto";
// import PrivateRoute from './components/privateroutes'

export default function Caminho() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Menu} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Login" component={Login} />
      <Route path="/Comercio" component={Comercio} />
      {/* <Route path="/Cotacao" component={Cotacao} /> */}
      <Route path="/Produto" component={Produto} />

    </BrowserRouter>
  );
}