import styled from "styled-components";
import { Signature } from "../Shared/Components/Signature";

const FooterContainer = styled.div`
  padding: 5rem 9rem 4rem 9rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
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
  return (
    <FooterContainer>
      <FlexContainer>
        <FooterDataContainer>
          <div style={{ padding: "12px" }}>
            <NonDecoratedLink href="magicenergytalent.com">
              Lets Talk
            </NonDecoratedLink>
          </div>

          <div style={{ display: "flex", padding: "12px" }}>
            <p>Social media</p>
            <span style={{ padding: "0 1rem" }}>|</span>
            <div>
              <NonDecoratedLink href="magicenergytalent.com" style={{ padding: "20px" }}>
                <img
                  style={{ width: "29px", paddingBottom: "4px" }}
                  src="discord-6.svg"
                  alt="discord"
                />
              </NonDecoratedLink>
              <NonDecoratedLink href="magicenergytalent.com" style={{ padding: "20px" }}>
                {" "}
                <img
                  style={{ width: "28px" }}
                  src="linkedin-icon-2.svg"
                  alt="discord"
                />{" "}
              </NonDecoratedLink>
              <NonDecoratedLink href="magicenergytalent.com" style={{ padding: "20px" }}>
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
              Join our comunity
            </NonDecoratedLink>
          </div>
        </FooterDataContainer>
        <SignatureContainer>
          <Signature color="#F7157B" width="4rem" backgroundColor="#000" />
        </SignatureContainer>
      </FlexContainer>
      <p style={{ textAlign: "left", color: "#a0a0a0", padding: "12px"  }}>
        © 2022 Vurvey. All Rights Reserved.
      </p>
    </FooterContainer>
  );
}
