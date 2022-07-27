import styled from "styled-components";

const MainDescription = styled.article`
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0 20px;
  z-index: 2;
  // margin-left: 10%;
  // position: absolute;
  // top: 30%;
  justify-content: center;
  @media screen and (max-width: 990px) {
    margin-left: 0;
    text-align: center;
    align-items: center;
    width: 100%;
    max-width: inherit;
    padding: 0 10px;
    box-sizing: border-box;
  }

  h1 {
    width: 50vw;
    font-weight: 600;
    font-size: 32px;
    color: ${({ theme }) => theme.h1};
    margin-bottom: 40px;
    span {
      color: ${(props) => props.theme.main};
    }
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: ${(props) => props.theme.h1};
  b {
    color: ${(props) => props.theme.main};
    font-weight: 600;
  }
`;

const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;
  line-height: 22px;
  @media screen and (max-width: 990px) {
    max-width: 420px;
  }
`;

export { MainDescription, Title, Text };
