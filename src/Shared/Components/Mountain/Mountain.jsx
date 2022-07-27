import styled from "styled-components";

const Mountain = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  right: -15%;
  top: 30%;

  @media screen and (max-width: 990px) {
    right: 0;
    top: 60%;
  }
`;

export default Mountain;