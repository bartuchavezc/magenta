/* eslint-disable react/prop-types */
import Contact from '../Contact';
import styled from 'styled-components';
import { useState } from 'react';

const FooterContainer = styled.ul`
  display: flex;
  align-items: center;
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

function Footer() {
  
  const [modal, setModal] = useState(false)
  
  const handleClose = () => {
    return setModal(false)
  }
  
  return (
    <FooterContainer>
      <MainButton onClick={() => setModal(true)}>
        join us
      </MainButton>
      {modal &&
        <Contact closeModal={handleClose} />
      }
    </FooterContainer>
  );
}

export default Footer;
