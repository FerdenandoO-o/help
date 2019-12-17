import React, { useState } from 'react';
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";
import cadastro from "../../assets/cadastro.svg";


export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/user", {
        nome,
        email,
        senha,

      })

      history.push("/Login");
    } catch (erro) {
      alert("Email ou senha inválidos")
    }
  }

  return (
    <Container>
      <div className="itens">
        <form onSubmit={handleSubmit}>
          <div className="icon">
            <img src={cadastro} alt="Cadastro" />
            <h1>Cadastre-se</h1>
          </div>

          <input type="text" placeholder="Nome:" onChange={event => setNome(event.target.value)} value={nome} />
          <input type="email" required placeholder="E-mail:" onChange={event => setEmail(event.target.value)} value={email} />
          <input type="password" required placeholder="Senha:" minLength="8" onChange={event => setSenha(event.target.value)} value={senha} />
          <button type="submit">Cadastrar</button>

          <Link className="lk" to="/">
            <p>menu</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}