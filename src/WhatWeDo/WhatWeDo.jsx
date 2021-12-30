import styled, { createGlobalStyle } from 'styled-components';

import { Parallax } from 'react-parallax';

const Wrapper = styled.div`
  overflow: hidden;
`

const Scene = styled.section`
  height: calc(120vh - 117px);
  position: relative;
  width: 100%;
  display: flex;
`

const Clouds = styled.ul`
  position: absolute;
  top: -20%;
  width: 100%;
  display: flex;
  z-index: 1;
`

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
  animation: cloud 6s cubic-bezier(0.78, 0.66, 0.38, 0.3) infinite;
  @keyframes cloud {
    0%{
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-150%);
    }
  }
`

const MainText = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  text-align: left;
  z-index: 2;
  margin-left: 10%;
  margin-top: 330px;
  max-width: 373px;
  font-size: 14px;
  line-height: 24px;
  strong {
    font-weight: 600;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    color: ${({theme}) => theme.h1};
    margin-bottom: 40px;
  }
`

const BigMountain = styled.img`
  z-index: 2;
  transition: .2s ease;
  width: 100vw;
  
`
const Mountain = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  right: -8%;
  top: -2%;
  width: 100%;
  justify-content: center;
`

const LowMountain = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  left: 10%;
  bottom: -8%;
  width: 100%;
  justify-content: center;
  transform: rotateY(-180deg);
`

const BigMountain2 = styled.img`
  z-index: 2;
  transition: .2s ease;
  width: 120vw;
  
`


const TailContainer = styled.figure`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  transform: rotate(-90deg);
  z-index: 0;
  left: -12%;
  top: -4%;
`

const DragonTail = styled.img`
  z-index: 2;
  transition: .2s ease;
  opacity: 0.4;
  will-change: transform;
`

const DragonContainer = styled.figure`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  z-index: 1;
  right: -12%;
  bottom: 0%;
  right: -54%;
  bottom: 20%;
`

const Dragon = styled.img`
  z-index: 2;
  transition: .3s ease;
  opacity: 0.4;
  will-change: transform;
  transform-origin: bottom right;
`

// const BackgroundOverlay = styled.div`
//   background: ${props => props.theme.background};
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `

function WhatWeDo() {
  return (
    <Wrapper>

      <Scene>
        <Mountain>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => (
              <BigMountain style={{
                transform: `translateY(${Math.floor(percentage * 40)}%)`
              }} src="/main-mountain2.png" alt="big mountain"/>
            )}
          >
          </Parallax>
        </Mountain>
        <Clouds>
          <CloudItem>
            <img src="/nubes.png" alt="cloud"/>
            <img src="/nubes.png" alt="cloud"/>
          </CloudItem>
          <CloudItem>
            <img src="/nubes.png" alt="cloud"/>
            <img src="/nubes.png" alt="cloud"/>
          </CloudItem>
          <CloudItem>
            <img src="/nubes.png" alt="cloud"/>
            <img src="/nubes.png" alt="cloud"/>
          </CloudItem>        
          <CloudItem>
            <img src="/nubes.png" alt="cloud"/>
            <img src="/nubes.png" alt="cloud"/>
          </CloudItem>
        </Clouds>

        <TailContainer>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => (
              <DragonTail style={{
                transform: `translate(-${Math.floor(percentage * 50)}%, ${Math.floor(percentage * 50)}%)`
              }} src="/dragontail.png" alt="dragon tail"/>
            )}
          >
          </Parallax>
        </TailContainer>

        
        <DragonContainer>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => (
              <Dragon style={{
                transform: `rotate(-${Math.floor(percentage * 30)}deg) translateX(-${Math.floor(percentage * 40)}%)`,
                opacity: percentage >= 1.08 ? 0 : 0.4
              }} src="/dragon.png" alt="dragon"/>
            )}
          >
          </Parallax>
        </DragonContainer>

        <LowMountain>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => (
              <BigMountain2 style={{
                transform: `translateY(-${Math.floor(percentage * 40)}%)`
              }} src="/main-mountain2.png" alt="big mountain"/>
            )}
          >
          </Parallax>
        </LowMountain>



        <MainText>
          <h2>
            what we do
          </h2>
          <p>
            we focus on following the <strong>developer’s career</strong> by assisting with <strong>customized tools and needs</strong> for each person: Do you wish to get better at communication skills? Do you want to focus on a set of <strong>specific technologies</strong>? Which way do you want to take your career next? We find the <strong>exact opportunity</strong> for your <strong>specific needs</strong> creating the best professional development for senior engineers who seek to reach their next level, professionally and in their lives.
          </p>
        </MainText>
        {/* <BackgroundOverlay /> */}
      </Scene>
    </Wrapper>

  );
}

export default WhatWeDo;
