import { Parallax } from "react-parallax";
import styled from "styled-components";
import { LilMountain } from "../Shared/Components/Mountain";

const Wrapper = styled.div`
  overflow: hidden;
`;

const ShortScene = styled.section`
  position: relative;
  width: 100%;
  display: flex;
`;

const GrowthText = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vh;
  background: #12134c;
  .growthContainer {
    display: flex;
    background-image: linear-gradient(to right, #a60397, #f7157b);
    padding: 3rem;
    border-radius: 32px;
    h2 {
      font-weight: 600;
      font-size: 4rem;
      text-align: left;
      color: #fff;
      margin-bottom: 40px;
      span {
        color: ${(props) => props.theme.main};
      }

      padding-left: 8rem;
    }
    h3 {
      padding-left: 8rem;
      color: #fff;
      text-align: left;
      font-size: 2rem;
      line-height: 2.6rem;
      font-weight: 400;
    }
  }
`;

const MainText = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 20px;
  background: #fff;
  div {
    // padding: 0 1rem;
    h2 {
      font-weight: 600;
      font-size: 4rem;
      text-align: left;
      // color: #f7157b;
      margin-bottom: 40px;
      span {
        color: ${(props) => props.theme.main};
      }
    }
    h3 {
      text-align: left;
      font-size: 2rem;
      line-height: 2.6rem;
      font-weight: 400;
    }
    .workSchema {
      display: flex;
    }
    .item {
      h3 {
        text-align: left;
        font-size: 3.8rem;
        font-weight: 400;
        padding: 1rem 0;
      }
      h4 {
        text-align: left;
        font-size: 3rem;
        font-weight: 400;
        padding: 1rem 0;
      }
      p {
        text-align: left;
        font-size: 2rem;
        font-weight: 200;
      }
    }
  }

  @media screen and (max-width: 990px) {
    box-sizing: border-box;
    padding: 0 10px;
  }
`;

const WhatContainer = styled.article`
  width: 100%;
  padding: 10vh 20px;
  background: #fff;
  img {
    heigth: 60% !important;
  }
  .toriContainer {
    display: flex;
    justify-content: center;
    // align-items: center;
    div {
      padding: 0 1rem;
      a {
        // width: 200px;
        margin: 2rem 0;
        padding: 30px;
        background-image: linear-gradient(to right, #a60397, #f7157b);
        color: #fff;
        font-size: 1.4rem;
        display: block;
      }
      h2 {
        font-weight: 600;
        font-size: 4rem;
        text-align: left;
        // color: #f7157b;
        margin-bottom: 40px;
        span {
          color: ${(props) => props.theme.main};
        }
      }
      h3 {
        text-align: left;
        font-size: 2rem;
        line-height: 2.6rem;
        font-weight: 400;
      }
    }
  }
`;

//           <div>
{
  /* <Clouds>
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
</div> */
}

function WhatWeDo() {
  return (
    <Wrapper style={{ background: "#f4f4f4" }}>
      <ShortScene>
        <WhatContainer>
          <LilMountain position="auto">
            <Parallax
              className={"small-mountain"}
              renderLayer={() => (
                <img src="/lil-mountain.png" alt="small mountain" />
              )}
            ></Parallax>
          </LilMountain>
          <div className="toriContainer">
            <div>
              <h2 id="talents">Reach the next level.</h2>
              <h3>
                We represent and manage talent in the technology industry,
                focusing on creating the best professional development for
                outstanding people seeking to reach their full potential,
                personally and professionally.
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "0",
                }}
              >
                <a className="tlkaBtn">Talk to an Agent</a>
              </div>
            </div>
            <img
              style={{
                borderRadius: "32px",
                margin: "6rem 2rem",
                height: "fit-content",
              }}
              width="50%"
              src="/tori.png"
              alt=""
            />
          </div>
        </WhatContainer>
      </ShortScene>

      <ShortScene>
        <MainText>
          <div style={{ padding: "1rem" }}>
            <h2 style={{ margin: "10vh 0" }} id="how_works">
              How it works
            </h2>
            <div className="workSchema">
              <div className="item">
                <h3>1</h3>
                <h4>Discovery Call</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully understand your interest, needs, and goals required
                  to boost your career.
                </p>
              </div>
              <div className="item">
                <h3>2</h3>
                <h4>Assessments</h4>
                <p>
                  Completing the test will give us a 360 profiling report of
                  your current state. Check your current level, and unlock your
                  human potential through Magenta.
                </p>
              </div>
              <div className="item">
                <h3>3</h3>
                <h4>Wait for the news</h4>
                <p>
                  Our network, company research and negotiation tactics will
                  land you a top-of-market offer. Your only obligation is to
                  interview. We take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </MainText>
      </ShortScene>

      <ShortScene>
        <GrowthText>
          <div className="growthContainer">
            <img
              style={{
                borderRadius: "32px",
                margin: "-6rem -6rem",
                height: "fit-content",
              }}
              width="50%"
              src="/growth4.png"
              alt=""
            />
            <div>
              <h2 style={{ textAling: "center" }}>Your growth, accelerated</h2>
              <h3>
                Magenta is all about unlocking your potential. Your manager will
                be focused on helping you reach the next level, choosing the
                right deals that exceeds your short-term needs and expands your
                long-term optionality.
              </h3>
            </div>
          </div>
        </GrowthText>
      </ShortScene>

      <ShortScene>
        <MainText>
          <div style={{ padding: "3rem" }}>
            <h2 style={{ margin: "10vh 0" }} id="how_works">
              Enjoy real benefits
            </h2>
            <div className="workSchema">
              <div className="item">
                <h4>Regular check-ins</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
              <div className="item">
                <h4>Interview preparation</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
              <div className="item">
                <h4>Search automation</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
            </div>
            <div style={{ width: "100%", height: "1rem" }}></div>
            <div className="workSchema">
              <div className="item">
                <h4>Self-development</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
              <div className="item">
                <h4>Professional growth</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
              <div className="item">
                <h4>Life-work balance</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
            </div>
          </div>
        </MainText>
      </ShortScene>

      <ShortScene>
        <MainText>
          <div style={{ padding: "3rem" }}>
            <h2 style={{ margin: "10vh 0" }} id="how_works">
              Pricing
            </h2>
            <h3>
              Magenta Agency is motivated by talent outcomes, which is why we
              work exclusively for the talent-side of the table. Constantly
              providing value so that you can obtain the life you are looking
              for is our main commitment. There are three ways to engage with
              us:
            </h3>
            <div style={{ width: "100%", height: "3rem" }}></div>
            <div className="workSchema">
              <div className="item">
                <h4>First Steps</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
              <div className="item">
                <h4>Pro Player</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
              <div className="item">
                <h4>Transcends</h4>
                <p>
                  Meet your agent through an online interview where we are going
                  to fully
                </p>
              </div>
            </div>
          </div>
        </MainText>
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
