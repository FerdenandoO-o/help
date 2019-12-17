import { createGlobalStyle } from "styled-components";
import Telalog from "../assets/blck.jpg";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Lobster&display=swap');
*{
  padding:0;
  margin:0;
  font-family: 'Fjalla One', sans-serif;
}

body{
  /* background-image:url(${Telalog}); */
  background-color: #191919;
  background-repeat:no-repeat;
  background-size:cover;
}

form {
  align-content:center;
  align-items:center;
  justify-content:center;
  display:flex;
  flex-direction:column;
  height:590px;
  width:370px;
  border-radius:12px;
  background-color:rgb(0,0,0, 30% );
 }

.lk1{
  color:white;
  padding-top:20px;
  text-decoration:none;
}

.lk{
  color:white;
  padding-top:20px;
  text-decoration:none;
}

.lk1:hover{
  color:gray;
}

.lk:hover{
  color:gray;

  @media(max-width: 798px){
    background-size: cover;

    div{
      height: 100%;
      width: 100%;
      border-radius:0px
    }

    form{
      width:100%;
      height:100%;
    }
  }
} `;
