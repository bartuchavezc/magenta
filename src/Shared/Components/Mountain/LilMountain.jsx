import styled from "styled-components";

const LilMountain = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  bottom: 10%;
  right: 0;
  margin-bottom:  ${({ marginBottom }) => (marginBottom ? marginBottom : "150px")};
  position: ${({ position }) => (position ? position : "absolute")};
`;

export default LilMountain;