import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export default createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  :root {
    ${variables}
  } 

  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    overflow: auto;
    color: var(--text-color);
    background: var(--bg);
  }
  
  a{
    color: var(--primary);
    &:hover{
      color: var(--primary-lighten);
    }
  }

`
