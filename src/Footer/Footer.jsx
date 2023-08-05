import Contact from "../Contact/index";
import { Signature } from "../Shared/Components/Signature";
import styled from "styled-components";
import { useState } from "react";
import Iframe from "react-iframe";

const FooterContainer = styled.footer`
  padding: 5rem 9rem 4rem 9rem;
  z-index: 2;
  position: relative;
  // margin-top: -443px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 80%
  );
  @media screen and (max-width: 990px) {
    padding: 0 20px;
    // margin-top: -300px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;

  @media screen and (max-width: 990px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const SignatureContainer = styled.div``;

const NonDecoratedLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const FooterDataContainer = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
`;

export default function Footer() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    return setModal(false);
  };
  //<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/app5iGrQT7xYzcBp8/shrrAfk2TXeVRfoRi?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="612" style="background: transparent; border: 1px solid #ccc;"></iframe>
  return (
    <>
      <FooterContainer>
        <Iframe
          url="https://airtable.com/embed/app5iGrQT7xYzcBp8/shrrAfk2TXeVRfoRi?backgroundColor=blue"
          id=""
          className="airtable-embed"
          frameborder="0"
          display="block"
          width="100%"
          height="612"
          style="background: transparent; border: 1px solid #ccc;margin-top: 2rem;"
        />
        <FlexContainer>
          <FooterDataContainer>
            <div style={{ padding: "12px" }}>
              <NonDecoratedLink onClick={() => setModal(true)}>
                Lets Talk
              </NonDecoratedLink>
            </div>

            <div style={{ display: "flex", padding: "12px" }}>
              <p>Social media</p>
              <span style={{ padding: "0 1rem" }}>|</span>
              <div>
                <NonDecoratedLink
                  href="magicenergytalent.com"
                  style={{ padding: "20px" }}
                >
                  <img
                    style={{ width: "29px", paddingBottom: "4px" }}
                    src="discord-6.svg"
                    alt="discord"
                  />
                </NonDecoratedLink>
                <NonDecoratedLink
                  href="magicenergytalent.com"
                  style={{ padding: "20px" }}
                >
                  {" "}
                  <img
                    style={{ width: "28px" }}
                    src="linkedin-icon-2.svg"
                    alt="discord"
                  />{" "}
                </NonDecoratedLink>
                <NonDecoratedLink
                  href="magicenergytalent.com"
                  style={{ padding: "20px" }}
                >
                  {" "}
                  <img
                    style={{ width: "28px" }}
                    src="instagram-2-1.svg"
                    alt="discord"
                  />{" "}
                </NonDecoratedLink>
              </div>
            </div>

            <div style={{ padding: "12px" }}>
              <NonDecoratedLink href="magicenergytalent.com">
                Join our community
              </NonDecoratedLink>
            </div>
          </FooterDataContainer>
          <SignatureContainer>
            <Signature color="#F7157B" width="4rem" backgroundColor="#222222" />
          </SignatureContainer>
        </FlexContainer>
        <p style={{ textAlign: "left", color: "#a0a0a0", padding: "12px" }}>
          © 2022 Magenta. All Rights Reserved.
        </p>
      </FooterContainer>
      {modal && <Contact closeModal={handleClose} />}
    </>
  );
}
