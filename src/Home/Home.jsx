import styled, { createGlobalStyle } from "styled-components";

import { useState } from "react";
import Nav from "../Nav";

const LogoContainer = styled.figure`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: sticky;
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  right: 0;
  z-index: -1;
  margin-bottom: -130px;
  @media screen and (max-width: 990px) {
    padding: 0;
    bottom: -320px;
    position: absolute;
    left: inherit;
    right: inherit;
    width: 100%;
    justify-content: center;
  }
`;

const Main = styled.main`
  min-height: calc(150vh - 117px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
`;

const Scene = styled.section`
  height: calc(100vh - 117px);
  min-height: 750px;
  position: relative;
  width: 100%;
`;

const MainDescription = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 420px;
  text-align: right;
  padding: 0 20px;
  z-index: 2;
  margin-left: 10%;
  position: absolute;
  top: 30%;
  @media screen and (max-width: 990px) {
    margin-left: 0;
    text-align: center;
    align-items: center;
    width: 100%;
    max-width: inherit;
    padding: 0 10px;
    box-sizing: border-box;
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

const Katakana = styled.span`
  font-size: 200px;
  color: white;
  margin-top: 0%;
  z-index: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  opacity: 0.5;
  user-select: none;
  @media screen and (max-width: 990px) {
    font-size: 80px;
    margin-top: 110px;
  }
`;

const MainMountainContainer = styled.section`
  display: flex;
  width: 100%;
`;

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

const BigMountain = styled.img`
  z-index: 2;
  transition: 1s ease;
  @media screen and (max-width: 990px) {
    transform: scale(1) !important;
    width: 100%;
  }
`;

const LilMountain = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: flex-end;
  bottom: 10%;
  right: 0;
  margin-bottom: 150px;
  position: absolute;
`;

const LowerMountain = styled.div`
  display: flex;
  /* width: 100%; */
  align-self: flex-end;
  bottom: 0;
  position: absolute;
  bottom: 10%;
  left: 5%;
`;

const Logo = styled.img`
  z-index: 1;
  width: 80px;
  transition: 0.2s ease;
`;

const Global = createGlobalStyle`
  .logo-main-mountain {
    overflow: visible !important;
    left: 49%;
    margin-top: 0px;
    will-change: transform;

  }
  .mountain {
    overflow: visible !important;
    will-change: transform;
  }
  .small-mountain, .lower-mountain {
    overflow: visible !important;
    img {
      will-change: transform;
      transition: 0.2s ease;
    }
  }
  .lower-mountain {
    left: -2%;
  }

`;

const Clouds = styled.ul`
  position: absolute;
  bottom: ${({ big }) => (big ? "-10%" : 0)};
  width: 100%;
  display: flex;
  z-index: 1;
  transform-origin: top center;
  transform: ${({ big }) => (big ? "scale(3)" : "")};
  @media screen and (max-width: 990px) {
    opacity: 0.85;
  }
`;

const CloudItem = styled.li`
  position: relative;
  height: 420px;
  width: 720px;
  img {
    height: 100%;
  }
  img:nth-child(2) {
    transform: rotateY(-180deg) translateX(-100%);
    position: absolute;
    top: 0;
    left: -100%;
  }
  animation: cloud 20s cubic-bezier(0.78, 0.66, 0.38, 0.3) infinite;
  @keyframes cloud {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-150%);
    }
  }
`;

function Home() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    return setModal(false);
  };

  return (
    <Main>
      <Global />
      <Scene id="home">
        {/* <Katakana>マゼンタ</Katakana> */}
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src="/magentafulllogo.png" style={{ width: "35vw" }} />
            <h1 style={{ fontSize: "3rem", fontWeight: "lighter" }}>
              {"Latin America's house of Talent"}
            </h1>
          </div>
        </div>
        <Clouds big={true}>
          <CloudItem>
            <img src="/nubes.png" alt="cloud" />
            <img src="/nubes.png" alt="cloud" />
          </CloudItem>
          <CloudItem>
            <img src="/nubes.png" alt="cloud" />
            <img src="/nubes.png" alt="cloud" />
          </CloudItem>
          <CloudItem>
            <img src="/nubes.png" alt="cloud" />
            <img src="/nubes.png" alt="cloud" />
          </CloudItem>
          <CloudItem>
            <img src="/nubes.png" alt="cloud" />
            <img src="/nubes.png" alt="cloud" />
          </CloudItem>
        </Clouds>
      </Scene>
    </Main>
  );
}

export default Home;
