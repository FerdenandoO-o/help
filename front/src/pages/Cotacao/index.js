// import React, { useState, useEffect } from 'react';
// import { Container } from "./styles";
// import api from "../../services/api";

// export default function Cotacao() {
//     const [mes, setMes] = useState("");
//     const [comercio, setComercio] = useState("");
//     const [produto, setProduto] = useState("");
//     const [valor, setValor] = useState("");

//     useEffect(() => {
//         const populateComercios = async () => {
//             const requisicao = await api.get('/commerce');
//             setComercio(requisicao.data);
//         };
//         populateComercios();
//     }, [])

//     useEffect(() => {
//         const populateProdutos = async () => {
//             const requisicao = await api.get('/produto');
//             setProduto(requisicao.data);
//         };
//         populateProdutos();
//     }, [])


//     async function handleSubmit(event) {
//         event.preventDefault();

//         await api.post("/cotacao", {
//             mes,
//             comercio,
//             produto,
//             valor
//         }
//         )
//         alert("Cadastrado com sucesso");
//     }

//     return (
//         <Container>
//             <div className="cotacao">
//                 <form onSubmit={handleSubmit}>
//                   <h1>Cadastrar cotação</h1>
//                 <input
//                         type="text"
//                         required
//                         placeholder="Valor da cesta"
//                         onChange={event => setValor(event.target.value)}
//                         value={valor}
//                     />

//                     <select className="cesta" id="mes" onChange={event => setMes(event.target.value)}>
//                         <option value="Janeiro">Janeiro</option>
//                         <option value="Fevereiro">Fevereiro</option>
//                         <option value="Março">Março</option>
//                         <option value="Abril">Abril</option>
//                         <option value="Maio">Maio</option>
//                         <option value="Junho">Junho</option>
//                         <option value="Julho">Julho</option>
//                         <option value="Agosto">Agosto</option>
//                         <option value="Setembro">Setembro</option>
//                         <option value="Outubro">Outubro</option>
//                         <option value="Novembro">Novembro</option>
//                         <option value="Dezembro">Dezembro</option>
//                     </select>

//                     <select className="cesta" id="comercio" name="comercio" onChange={(event) => setComercio(event.target.value)}>
//                         {comercio &&
//                             comercio.map(({ _id, nome }) => (
//                                 <option key={_id} value={_id}>{nome}</option>
//                             ))}
//                     </select>

//                     <select className="cesta" id="comercio2" name="comercio2" onChange={(event) => setProduto(event.target.value)}>
//                         {produto &&
//                             produto.map(({ _id, nome }) => (
//                                 <option key={_id} value={_id}>{nome}</option>
//                             ))}
//                     </select>

//                     <button nameClass="b1" type="submit">
//                      Cadastrar
//                     </button>

//                     {/* <Link className="lk" to="/Login">
//               <p>Já possui cadastro?</p>
//             </Link> */}
//                 </form>
//             </div>
//         </Container>
//     );
// }