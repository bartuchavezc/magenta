import styled, { createGlobalStyle } from 'styled-components';

import { MainButton } from '../Nav/Nav';
import { Parallax } from 'react-parallax';
import { useState } from 'react';

const Main = styled.main`
  min-height: calc(200vh - 117px);
  display: flex;
  flex-wrap: wrap;
`

const MainDescription = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 420px;
  text-align: right;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  margin-left: 10%;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: ${props => props.theme.h1};
  b {
    color: ${props => props.theme.main};
    font-weight: 600;
  }
`

const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;
`

const Katakana = styled.span`
  font-size: 200px;
  color: white;
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  opacity: 0.5;
`

const MainMountainContainer = styled.section`
  display: flex;
  width: 100%;
  margin-top: 20%;
`

const Mountain = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  right: -8%;
  top: 25%;
`

const BigMountain = styled.img`
  z-index: 2;
  transition: .2s ease;
`

const LilMountain = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  bottom: 10%;
  margin-bottom: 150px;
  position: absolute;
`

const LowerMountain = styled.div`
  display: flex;
  width: 100%;
  align-self: flex-end;
  bottom: 0;
  position: absolute;
  bottom: 10%;
  left: 10%;
`

const Logo = styled.img`
  z-index: 1;
  width: 80px;
  transition: 0.2s ease;
`

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
    will-change: transform;
    img {
      transition: 0.2s ease;
    }
  }
  .lower-mountain {
    left: -2%;
  }
`

function Home() {

  return (
    <Main>
      <Global />
      <Katakana>
        マゼンタ
      </Katakana>
      <MainMountainContainer>
        <Mountain>
          <Parallax
            className={'logo-main-mountain'}
            renderLayer={percentage => (
              <Logo
                style={{
                  transform: `translateY(${Math.floor(percentage * 220)}px) scale(${(percentage * 1.2).toFixed(1)})`
                }}
                src="/magentalogo.png" alt="Magenta logo"
              />
            )}
          >
          </Parallax>
          <Parallax
            className={'mountain'}
            renderLayer={percentage => (
              <BigMountain style={{
                transform: `scale(${(percentage * 1.2).toFixed(1)}) translateY(${Math.floor(percentage * 150)}px)`
              }} src="/main-mountain.png" alt="big mountain"/>
            )}
          >
          </Parallax>
        </Mountain>
        <MainDescription>
          <Title>
            where <b>talent</b> is the client
          </Title>
          <Text>
            We focus on creating the best professional development for senior engineers who seek to reach their next level,professionally and in their lives.
          </Text>
          <MainButton>
            I want to know more
          </MainButton>
        </MainDescription>
      </MainMountainContainer>
      <LilMountain   
      >
        <Parallax
          className={'small-mountain'}
          renderLayer={percentage => (
            <img 
              style={{
                transform: `translateY(${Math.floor(percentage * 400)}px) translateX(${Math.floor(percentage * 400)}px)`
              }} 
              src="/lil-mountain.png" alt="small mountain"
            />
          )}
        >
        </Parallax>
      </LilMountain>

      <LowerMountain>
        <Parallax
          className={'lower-mountain'}
          renderLayer={percentage => (
            <img  style={{
              transform: `translateY(${Math.floor(percentage * 400)}px) translateX(-${Math.floor(percentage * 400)}px)`
            }} 
            src="/lower-mountain.png" alt="lower mountain"/>
          )}
        >
        </Parallax>
      </LowerMountain> 
    </Main>
  );
}

export default Home;
