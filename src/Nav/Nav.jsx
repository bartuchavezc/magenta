/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// import AnchorLink from 'react-anchor-link-smooth-scroll'
import Contact from '../Contact';
import styled from 'styled-components';
import { useState } from 'react';

const NavContainer = styled.nav`
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

  @media screen and (max-width: 990px) {
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    transform: translateX(${props => props.isHidden ? -100 : 0}%);
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 100vh;
    overflow-y: auto;
    background: rgba(255,255,255,0.9);
    box-shadow: 1px 0px 20px 0px #7b7b7b54;
    width: 220px;
  }
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
  @media screen and (max-width: 990px) {
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
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
  @media screen and (max-width: 990px) {
    padding: 20px;
    width: 100%;
    max-width: 420px;
  }
`

const Logo = styled.img`
  height: 60px;
  margin-top: -5px;
`

const FullLogo = styled.img`
  height: 100px;
  transition: 0.3s ease;
  filter: ${({isBlurred}) => isBlurred ? "blur(20px)" : ""};
`


const ButtonFilter = styled.button`
  @media screen and (min-width: 990px) {
    display: none;
  }
  position: fixed;
  z-index: 10;
  transition: 0.3s ease;
  left: 20px;
  top: 30px;
  display: flex;
  background: none;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  overflow: hidden;
  transform: ${({isOpen}) => isOpen ? "translateX(200px)" : "translateX(0)" };
`

const Menu = styled.img`
  width: 32px;
  transition: 0.3s ease;
  opacity: 0.6;
  transform: translateX(${props => props.isHidden ? 0 : 40}px);
  position: absolute;
`

const Cross = styled.img`
  width: 32px;
  opacity: 0.6;
  transition: 0.3s ease;
  transform: translateX(${props => props.isHidden ? 40 : 0}px);
  position: absolute;
`

const LogoContainer = styled.figure`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: center;
    top: -5px;
    left: 0;
    transition: 0.3s ease;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
  }
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

function Nav() {
  
  const [modal, setModal] = useState(false)
  
  const handleClose = () => {
    return setModal(false)
  }
  
  const [isOpen, setIsOpen] = useState(true)
  return (
    <NavContainer>
      <ButtonFilter isOpen={!isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Menu src="menu.svg" isHidden={isOpen} />
        <Cross src="cross.svg" isHidden={isOpen}/>
      </ButtonFilter>
      <LogoContainer>
        <FullLogo isBlurred={!isOpen} src="/magentafulllogo.png" alt="Magenta logo"/>
      </LogoContainer>
      <Container isHidden={isOpen}>
        <Item>
          <Logo src="/magentalogo.png" alt="Magenta logo"/>
        </Item>
        <CustomLink to="/talents">
          {/* <AnchorLink offset="300" href="#home"> */}
              for talents
          {/* </AnchorLink> */}
        </CustomLink>
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
    </NavContainer>
  );
}

export default Nav;
