import { Parallax } from "react-parallax";
import Main from "../../Shared/Components/Main";
import Global from "../../Shared/Components/Global";
import Scene from "../../Shared/Components/Scene";
import CloudItem from "../../Shared/Components/CloudItem";
import Clouds from "../../Shared/Components/Clouds";
import {
  MainMountainContainer,
  BigMountain,
  LowerMountain,
  LilMountain,
  Mountain,
} from "../../Shared/Components/Mountain";

import { MainDescription } from "../../Shared/Components/Text";

function Benefits() {
  return (
    <Main>
      <Global />
      <Scene id="benefits">
        <Clouds big={true} bottom={"auto"} top="-66%">
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
        <MainMountainContainer>
          <Mountain>
            <Parallax
              className={"mountain"}
              renderLayer={(percentage) => (
                <>
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
            <h1
              id="benefits-title"
              style={{
                width: "100%",
                textAlign: "left",
                fontSize: "4rem",
                padding: "4rem",
              }}
            >
              Enjoy <span> real </span> benefits
            </h1>
            <ul
              style={{ width: "100%", textAlign: "left", fontSize: "1.6rem" }}
            >
              <li style={{ padding: ".6rem 0" }}>
                You set your rate (monthly or per hour).
              </li>
              <li style={{ padding: ".6rem 0" }}>
                Work remotely from anywhere in the world.
              </li>
              <li style={{ padding: ".6rem 0" }}>
                A Career Path made to size.
              </li>
              <li style={{ padding: ".6rem 0" }}>
                14 PTOs + 7 National Holidays.
              </li>
              <li style={{ padding: ".6rem 0" }}>
                We invest in Talents ideas.
              </li>
            </ul>
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
        <Clouds big={true} bottom={"5%"}>
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

export default Benefits;
