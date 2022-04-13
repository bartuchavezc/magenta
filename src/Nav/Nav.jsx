/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Contact from '../Contact';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  display: flex;
  padding: 0px;
  width: 100%;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 9;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%);
`

const Container = styled.ul`
  display: flex;
  align-items: center;
`

const Item = styled.li`
  padding: 20px;
  margin: 0 40px;
  transition: 0.2s ease;
  a {
    color: ${props => props.isActive ? props.theme.main : 'black'};
    text-decoration: none;
  }
  &:hover {
    color: ${props => props.theme.main};
  }
`

export const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px 12px;
  color: white;
  border: none;
  background: ${props => props.theme.main};
  height: 36px;
  cursor: pointer;
`

const Logo = styled.img`
  height: 60px;
  margin-top: -5px;
`

function CustomLink({ children, to }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Item isActive={match}>
      <Link
        to={to}
      >
        {children}
      </Link>
    </Item>
  );
}

function Home() {
  
  const [modal, setModal] = useState(false)
  
  const handleClose = () => {
    return setModal(false)
  }
  
  return (
    <Nav>
      <Container>
        <Item>
          <Logo src="/magentalogo.png" alt="Magenta logo"/>
        </Item>
        <Item isActive={false}>  
          <CustomLink to="/talents">
            {/* <AnchorLink offset="300" href="#home"> */}
              for talents
            {/* </AnchorLink> */}
          </CustomLink>
        </Item>
        <CustomLink to="/">
          {/* <AnchorLink offset="300" href="#our-services"> */}
              for companies
          {/* </AnchorLink> */}
        </CustomLink>
        {/* <CustomLink to="/">
            community
        </CustomLink> */}
        <Item>
          <MainButton onClick={() => setModal(true)}>
            join us
          </MainButton>
        </Item>
      </Container>
      {modal &&
        <Contact closeModal={handleClose} />
      }
    </Nav>
  );
}

export default Home;
