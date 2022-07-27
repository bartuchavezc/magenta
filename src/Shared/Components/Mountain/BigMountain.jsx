import styled from "styled-components";

const BigMountain = styled.img`
  z-index: 2;
  transition: 1s ease;
  @media screen and (max-width: 990px) {
    transform: scale(1) !important;
    width: 100%;
  }
`;

export default BigMountain;