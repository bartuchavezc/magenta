import { MainButton } from '../Nav/Nav';
import styled from 'styled-components';
import { useState } from 'react';

const Main = styled.main`
  min-height: calc(100vh - 117px);
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
  position: relative;
`

const Mountain = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  z-index: 1;
`

const BigMountain = styled.img`
  z-index: 2;
`

const LilMountain = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  bottom: 0;
  margin-bottom: 150px;
  position: absolute;
`

const LowerMountain = styled.div`
  display: flex;
  width: 100%;
  align-self: flex-end;
  bottom: 0;
  position: absolute;
`

const Logo = styled.img`
  position: absolute;
  z-index: 1;
  width: 80px;
  left: 44%;
  top: 12%;
`

function Home() {

  return (
    <Main>
      <Katakana>
        マゼンタ
      </Katakana>
      <MainMountainContainer>
        <Mountain>
          <Logo src="/magentalogo.png" alt="Magenta logo"/>
          <BigMountain src="/main-mountain.png" alt="big mountain"/>
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
      <LilMountain>
        <img src="/lil-mountain.png" alt="small mountain"/>
      </LilMountain>
      <LowerMountain>
        <img src="/lower-mountain.png" alt="lower mountain"/>
      </LowerMountain> 
    </Main>
  );
}

export default Home;
