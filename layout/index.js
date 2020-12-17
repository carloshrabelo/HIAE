import React from 'react'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'
import GlobalStyle from './GlobalStyle'
const App = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />

    <main>{children}</main>
  </>
)

App.propTypes = {
  children: PropTypes.element
}

export default App
