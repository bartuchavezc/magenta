import styled, { createGlobalStyle } from "styled-components";

import Contact from "../Contact";
import { MainButton } from "../Nav/Nav";
import { Parallax } from "react-parallax";
import { useState } from "react";

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
`;

const BigMountain = styled.img`
  z-index: 2;
  transition: 1s ease;
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
      {modal && <Contact closeModal={handleClose} />}
      <Global />
      <Scene id="home">
        <Katakana>マゼンタ</Katakana>
        <MainMountainContainer>
          <Mountain>
            <Parallax
              className={"mountain"}
              renderLayer={(percentage) => (
                <>
                  <LogoContainer>
                    <Logo
                      style={{
                        height: "80px",
                        opacity: (-percentage + 1.5).toFixed(1),
                        transform: `scale(${(percentage * 1.3).toFixed(1)})`,
                      }}
                      src="/magentalogotori.png"
                      alt="Magenta logo"
                    />
                  </LogoContainer>
                  <BigMountain
                    style={{
                      transform: `scale(${(percentage * 1.3).toFixed(1)})`,
                      opacity: (-percentage + 1.4).toFixed(1),
                    }}
                    src="/main-mountain.png"
                    alt="big mountain"
                  />
                </>
              )}
            ></Parallax>
          </Mountain>
          <MainDescription>
            <Title>
              <strong>
                reach the <i>next</i> level
              </strong>
            </Title>
            <Text>
              We focus on creating the best professional development for senior
              engineers who seek to reach their next level, professionally and
              in their lives.
            </Text>
            <MainButton onClick={() => setModal(true)}>
              I want to know more
            </MainButton>
          </MainDescription>
        </MainMountainContainer>
        <LilMountain>
          <Parallax
            className={"small-mountain"}
            renderLayer={(percentage) => (
              <img
                style={{
                  transform: `translateY(${Math.floor(
                    percentage * 400
                  )}px) translateX(${Math.floor(percentage * 400)}px)`,
                }}
                src="/lil-mountain.png"
                alt="small mountain"
              />
            )}
          ></Parallax>
        </LilMountain>

        <LowerMountain>
          <Parallax
            className={"lower-mountain"}
            renderLayer={(percentage) => (
              <img
                style={{
                  transform: `translateY(${Math.floor(
                    percentage * 400
                  )}px) translateX(-${Math.floor(percentage * 400)}px)`,
                }}
                src="/lower-mountain.png"
                alt="lower mountain"
              />
            )}
          ></Parallax>
        </LowerMountain>

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
