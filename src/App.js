import './App.css';

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background: orange;
  }
`

const mainTheme = {
  main: '#F7157B'
}
const darkTheme = {
  main: '#000000'
}


const MyButton = styled.a`
  color: white;
  background: ${props => props.theme.main};
`
const ThemeChanger = styled.button`
`



function App() {
  const [actualTheme, setActualTheme] = useState(mainTheme)

  const handleTheme = () => {
    actualTheme === mainTheme ? setActualTheme(darkTheme) : setActualTheme(mainTheme)
  }

  return (
    <div className="App">
      <ThemeProvider theme={actualTheme}>
        <GlobalStyle />
        <MyButton>
          hola
        </MyButton>
        <ThemeChanger onClick={handleTheme}>
          cambiar tema
        </ThemeChanger>
      </ThemeProvider>
    </div>
  );
}

export default App;
