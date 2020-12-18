import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export default createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  :root {
    ${variables}
  } 

  html,
  body,
  #__next,
  #__next>main {
    background: var(--bg);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    font-family: Trebuchet MS,roboto,ubuntu,sans-serif;    
    height: 100%;
    overflow: auto;
    width: 100%;
  }
  
  a{
    color: var(--primary);
    
    &:hover{
      color: var(--primary-lighten);
    }
  }

`;
