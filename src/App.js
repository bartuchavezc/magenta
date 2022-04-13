import './App.css';

import { Route, Routes } from "react-router-dom";
import {ThemeProvider, createGlobalStyle} from 'styled-components';

import { BrowserRouter } from "react-router-dom";
// no hagas caso a esto, dejar por el momento
// import Footer from './Footer';
import Home from './Home';
// import Home from './Home';
import HomeCompanies from './HomeCompanies';
import Nav from './Nav';
import Services from './Services';
import ServicesCompanies from './ServicesCompanies';
import WhatWeDo from './WhatWeDo';
import { useState } from 'react';
import Footer from './Footer/Footer';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: ${props => props.theme.background};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
  html {
    scroll-behavior: smooth;
  }
`

const mainTheme = {
  background: '#F4F4F4',
  main: "#F7157B",
  h1: "#606060"
}

function App() {
  const [actualTheme] = useState(mainTheme)

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={actualTheme}>
          <GlobalStyle />
          <Nav />
          <Routes>
            <Route path="/" element={
              <>
                <HomeCompanies />
                <WhatWeDo />
                <ServicesCompanies />
                {/* <Footer /> */}
              </>
            } />
            <Route path="/talents" element={
              <>
                <Home />
                <WhatWeDo />
                <Services/>
                {/* <Footer /> */}
              </>
            } />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
