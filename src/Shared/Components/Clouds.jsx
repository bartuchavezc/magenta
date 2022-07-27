import styled from "styled-components";

const Clouds = styled.ul`
  position: absolute;
  bottom: ${({ big }) => (big ? "-10%" : 0)};
  bottom: ${({ bottom }) => (bottom ? bottom : "auto")};
  top: ${({ top }) => (top ? top : "auto")};
  width: 100%;
  display: flex;
  z-index: 1;
  transform-origin: top center;
  transform: ${({ big }) => (big ? "scale(3)" : "")};
  @media screen and (max-width: 990px) {
    opacity: 0.85;
  }
`;

export default Clouds;