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
  top: 0;
  width: 100%;
  display: flex;
  z-index: 1;
  opacity: 0.8;
`

const CloudItem = styled.li`
  position: relative;
  height: 300px;
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
  margin-left: auto;
  margin-right: 10%;
  text-align: right;
  margin-top: 40%;
  max-width: 373px;
  font-size: 14px;
  line-height: 24px;
  strong {
    font-weight: 600;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    color: ${props => props.theme.h1};
    margin-bottom: 40px;
  }
`

const GrassFloorContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  left: -10%;
  bottom: -1%;
  width: 100%;
`

const Floor = styled.img`
  z-index: 2;
  transition: .2s ease;
  will-change: transform;
  width: 100%;
  max-width: 800px;
`

const TreeContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  left: -10%;
  bottom: -1%;
  width: 100%;
`

const Tree = styled.img`
  z-index: 2;
  transition: .2s ease;
  will-change: transform;
  max-width: 400px;
`
const LilMountainContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  right: -10%;
  top: 15%;
  transform: rotateY(-180deg);
`

const LilMountain = styled.img`
  z-index: 2;
  transition: .2s ease;
  will-change: transform;
  max-width: 400px;
`
const BoatContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  left: 40%;
  top: 50%;
`

const Boat = styled.img`
  z-index: 2;
  transition: .2s ease;
  will-change: transform;
  max-width: 100px;
`



function Services() {
  return (
    <Wrapper>

      <Scene>
        <LilMountainContainer>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => {
              return(
                <LilMountain style={{
                  transform: `translateX(${percentage <= 0.5 && Math.floor(percentage * 40)}%)`
                }} src="/lower-mountain.png" alt="little mountain"/>
              )}}
          >
          </Parallax>
        </LilMountainContainer>

        <GrassFloorContainer>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => {
              return(
                <Floor style={{
                  transform: `translateX(${percentage <= 0.35 && Math.floor(percentage * 40)}%)`
                }} src="/floor.png" alt="grass floor"/>
              )}}
          >
          </Parallax>
        </GrassFloorContainer>

        
        <BoatContainer>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => {
              return(
                <Boat style={{
                  transform: `translateX(${Math.floor(percentage * 100)}%)`,
                  opacity:  (percentage).toFixed(1)
                }} src="/boat.png" alt="boat"/>
              )}}
          >
          </Parallax>
        </BoatContainer>


        
        <TreeContainer>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => (
              <Tree style={{
                transform: `translateX(${Math.floor(percentage * 40)}%)`
              }} src="/tree.png" alt="tree"/>
            )}
          >
          </Parallax>
        </TreeContainer>

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


        <MainText>
          <h2>
            services
          </h2>
          <p>
            Because we want to be a differentiated player in the market, we have <strong>boutique services</strong> that stand out by themselves:  
          </p>
          <ul>
            <li>
              <strong>
                Software
              </strong> 
            </li>
            <li>
              <strong>
              Data (Science, ML, AI, Engineering) 
              </strong>
            </li>
            <li>
              <strong>
              UX/UI Design 
              </strong>
            </li>
            <li>
              <strong>
              Infrastructure  
              </strong>
            </li>
            <li>
              <strong>
              Cybersecurity  
              </strong>
            </li>
          </ul>
        </MainText>
      </Scene>
    </Wrapper>

  );
}

export default Services;
