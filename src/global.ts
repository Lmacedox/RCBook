import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f0f3;
    --red: #E52E4D;
    --blue: #473882;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }


  /* CONFIGURAÇÃO FONT  */
  html{
    @media (max-width: 1080px){
     
      font-size: 93.75% /* ELE TERA 15PX */
    }
  
    @media (max-width: 720px){
     
      font-size: 87.5% /* ELE TERA 14PX */
    }
  }

  body{
    background:var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  /* DEFININDO FONTE */
  body, input, text-area, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 2rem;
    position: relative;
    border-radius: 0.50rem;
  }
  
  
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;

    background:transparent;
    border-radius: 10px;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8)
    }
  }

`

