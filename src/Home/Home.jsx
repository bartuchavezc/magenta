import { MainButton } from '../Nav/Nav';
import styled from 'styled-components';
import { useState } from 'react';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
`

const MainDescription = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 420px;
  margin-top: 20%;
  text-align: right;
  padding: 0 20px;
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

function Home() {

  return (
    <Main>
      <Katakana>
        マゼンタ
      </Katakana>
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

    </Main>
  );
}

export default Home;
