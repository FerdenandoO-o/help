import React, { useState } from 'react';
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Comercio({ history }) {
  const [nome, setNome] = useState("");
  const [nome_rua, setNome_rua] = useState("");
  const [numero_rua, setNumero_rua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    
    await api.post("/commerce", {
      nome,
      nome_rua,
      numero_rua,
      bairro,
      cidade,
      estado,
    }
    )
    alert("Cadastrado com sucesso");
}

  return (
    <Container>
      <div className="comercio">
        <form onSubmit={handleSubmit}>
          <div className="icon">
            {/* <img src={cadastro} alt="Cadastro" /> */}
            <h1>Cadastrar comércio</h1>
          </div>

          <input type="text" placeholder="Nome:" onChange={event => setNome(event.target.value)} value={nome} />
          <input type="text" required placeholder="Nome_rua:" onChange={event => setNome_rua(event.target.value)} value={nome_rua} />
          <input type="text" required placeholder="Numero_rua:" onChange={event => setNumero_rua(event.target.value)} value={numero_rua} />
          <input type="text" required placeholder="Bairro:" onChange={event => setBairro(event.target.value)} value={bairro} />
          <input type="text" required placeholder="Cidade:" onChange={event => setCidade(event.target.value)} value={cidade} />
          <input type="text" required placeholder="Estado:" onChange={event => setEstado(event.target.value)} value={estado} />
          <button type="submit">Cadastrar</button>

          <Link className="lk" to="/">
              <p>menu</p>
            </Link>
        </form>
      </div>
    </Container>
  );
}