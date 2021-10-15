import './App.css';

import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: orange;
  }
`
const MyButton = styled.a`
  color: white;
  background: red;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MyButton>
        hola
      </MyButton>
    </div>
  );
}

export default App;
