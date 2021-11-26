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
`

const Container = styled.ul`
  display: flex;
  align-items: center;
`

const Item = styled.li`
  padding: 20px;
  margin: 0 40px;
  transition: 0.2s ease;
  color: ${props => props.isActive && props.theme.main};
  &:hover {
    color: ${props => props.theme.main}
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
  height: 100px;
  margin-top: -25px;
`

function Home() {

  return (
    <Nav>
      <Container>
        <Item isActive={true}>
          home
        </Item>
        <Item>
          what we do
        </Item>
        <Item>
          <Logo src="/magentafulllogo.png" alt="Magenta logo"/>
        </Item>
        <Item>
         our services
        </Item>
        {/* <Item>
          who we are
        </Item>
        <Item>
          our process
        </Item> */}
        <Item>
          <MainButton>
            join us
          </MainButton>
        </Item>
      </Container>
    </Nav>
  );
}

export default Home;
