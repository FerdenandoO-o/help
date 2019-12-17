import React, { useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";


export default function Produto() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

        await api.post("/produto", {
          nome,
          quantidade
        }
        )
        alert("Cadastrado com sucesso");
    }

  return (
    <Container>
      <div className="prod">
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar Produto</h1>

          <input
            type="text"
            required
            placeholder="Nome"
            onChange={event => setNome(event.target.value)}
            value={nome}
          />
          <input
            type="text"
            required
            placeholder="Quantidade"
            onChange={event => setQuantidade(event.target.value)}
            value={quantidade}
          />
          <button nameClass="b1" type="submit">
            Cadastrar
          </button>

          <Link className="lk" to="/">
              <p>menu</p>
            </Link>

        </form>
      </div>
    </Container >
  );
}