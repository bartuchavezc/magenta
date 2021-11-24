import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  display: flex;
  padding: 0px;
  width: 100%;
  justify-content: center;
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
        {/* <Item>
          who we are
        </Item>
        <Item>
         our services
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
