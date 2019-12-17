import styled from "styled-components";


export const Container = styled.div`
  h1{
    display:flex;
    margin-bottom:50px;
    color:white;
  } 
 
 
   input[type="text"],input[type="email"],input[type="password"]{
     margin-top:35px;
     width:275px; 
     height:33px;
     border-radius:2px;
     border-style:hidden;
     background:#fff;
   }
   button{
    width:50%;
    height:31px;
    margin:15px;
    border-style:hidden;
    cursor: pointer;
    margin-top:35px;
    }
    
   .icon{
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
    width:350px;
    }
    
   .itens {
  justify-content:center;
  align-content:center;
  align-items:center;
  display:flex;
  height: 100vh;
 }
`