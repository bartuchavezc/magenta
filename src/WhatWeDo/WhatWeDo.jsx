import { Parallax } from "react-parallax";
import styled from "styled-components";
import { LilMountain } from "../Shared/Components/Mountain";
import Clouds from "../Shared/Components/Clouds";
import CloudItem from "../Shared/Components/CloudItem";

const Wrapper = styled.div`
  overflow: hidden;
`;

const Scene = styled.section`
  height: 70vh;
  min-height: 750px;
  position: relative;
  width: 100%;
  display: flex;
`;

const ShortScene = styled.section`
  position: relative;
  width: 100%;
  display: flex;
`;

const MainText = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%
  );
  line-height: 1.6rem;
  strong {
    font-weight: 600;
  }
  h2 {
    width: 50vw;
    font-weight: 600;
    font-size: 32px;
    color: ${({ theme }) => theme.h1};
    margin-bottom: 40px;
    span {
      color: ${(props) => props.theme.main};
    }
  }
  p {
    text-align: center;
    width: 50vw;
    font-size: 24px;
    font-weight: 400;
  }

  @media screen and (max-width: 990px) {
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

const MainTextWhite = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  line-height: 1.6rem;
  strong {
    font-weight: 600;
  }
  h2 {
    width: 50vw;
    font-weight: 600;
    font-size: 32px;
    color: ${({ theme }) => theme.h1};
    margin-bottom: 40px;
    span {
      color: ${(props) => props.theme.main};
    }
  }
  p {
    text-align: center;
    width: 50vw;
    font-size: 24px;
    font-weight: 400;
  }

  @media screen and (max-width: 990px) {
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

function WhatWeDo() {
  return (
    <Wrapper style={{ background: "#f4f4f4" }}>
      <Scene>
        <Clouds big={true} bottom={"auto"} top="-100%">
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
        <MainText style={{ zIndex: "1" }}>
          <LilMountain marginBottom="300px" position="auto">
            <Parallax
              className={"small-mountain"}
              renderLayer={() => (
                <img src="/lil-mountain.png" alt="small mountain" />
              )}
            ></Parallax>
          </LilMountain>
          <Clouds>
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
        </MainText>
      </Scene>
      <ShortScene>
        <MainTextWhite>
          <h2 id="talents">Reach the next level.</h2>
          <p>
            Work on your ideal job by doing what you love, We take care of the
            rest.
          </p>
          <h2 id="talents" style={{ textAlign: "left" }}>
            Your current job doesn&apos;t <span> fill </span> you?
          </h2>
          <p style={{ textAlign: "left" }}>
            We focus on creating the best professional development for
            outstanding people who seek to reach the next level, professionally
            and in their lives.
          </p>
        </MainTextWhite>
      </ShortScene>
      {/* <Clouds bottom={"auto"}>
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
      </Clouds> */}
    </Wrapper>
  );
}

export default WhatWeDo;
