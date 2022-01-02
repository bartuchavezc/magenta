import styled, { createGlobalStyle } from 'styled-components';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react';

const Modal = styled.section`
  display: flex;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  justify-content: center;
  background: rgba(0,0,0,0.8);
  align-items: flex-start;
  animation: fadeIn 0.5s ease;
  z-index: 9;
  @keyframes fadeIn {
    0%{opacity: 0};
    100%{opacity: 1};
  }
`

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.h1};
  text-align: left;
  margin-bottom: 40px;
`

const ContactContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  border: 1px solid gray;
  background: white;
  margin-top: 10%;
  min-height: 300px;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding-top: 60px;
`

const Cross = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 24px;
  color: gray;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  cursor: pointer;
`

const Title = styled.h2`
  display: flex;
  color: ${props => props.theme.h1};
  font-size: 16px;
  width: 100%;
  margin-bottom: 5px;
`

const Subtitle = styled.h3`
  color: ${props => props.theme.h1};
  font-size: 14px;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
`

const CircleButton = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  display: flex;
  border-radius: 50%;
  padding: 12px;
  background: ${props => props.theme.main};
  margin-right: 40px;
  svg, path {
    fill: white;
  }
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    opacity: .7
  }
`

const SocialContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SignUp = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;
  label {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    input[type="email"] {
      margin-right: 10px;
      flex: 1;
      height: 40px;
      max-height: 40px;
      padding: 4px;
      box-sizing: border-box;
      border: 1px solid gray;
    }
    input[type="submit"] {
      flex: 1;
      max-width: 100px;
      height: 40px;
      padding: 4px;
      background: ${props => props.theme.main};
      border: none;
      color: white;
      cursor: pointer;
    }
  }

`



// eslint-disable-next-line react/prop-types
function Contact({closeModal}) {

  return (
    <Modal>
      <ContactContainer>
        <Cross onClick={closeModal}>
          <svg
            height={32}
            width={32}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m17.459 16.014 8.239-8.194a.992.992 0 0 0 0-1.414 1.016 1.016 0 0 0-1.428 0l-8.232 8.187L7.73 6.284a1.009 1.009 0 0 0-1.428 0 1.015 1.015 0 0 0 0 1.432l8.302 8.303-8.332 8.286a.994.994 0 0 0 0 1.414 1.016 1.016 0 0 0 1.428 0l8.325-8.279 8.275 8.276a1.009 1.009 0 0 0 1.428 0 1.015 1.015 0 0 0 0-1.432l-8.269-8.27z"
              fill="#121313"
            />
          </svg>
        </Cross>
        <MainTitle>
          Contact us
        </MainTitle>
        <SignUp action="https://magicenergytalent.us20.list-manage.com/subscribe/post?u=bc38f943ee787805892d4786e&amp;id=041ac4ecac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <Title htmlFor="mce-EMAIL">Get in touch</Title>
          <div>
            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </div>
        </SignUp>
        <SocialContact>
          <Subtitle>
            or through the following:
          </Subtitle>
          <ButtonsContainer>
            <CircleButton href="https://api.whatsapp.com/send?phone=+541130300398"> 
              <svg
                height={32}
                width={32}
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.004 31c-2.868 0-5.646-.811-8.05-2.347l-5.348 1.709a.498.498 0 0 1-.626-.635l1.725-5.146A14.837 14.837 0 0 1 1 16c0-4.076 1.612-7.891 4.539-10.742a.5.5 0 0 1 .697.716A13.895 13.895 0 0 0 2 16c0 2.974.922 5.811 2.665 8.204a.5.5 0 0 1 .069.454L3.242 29.11l4.633-1.481a.501.501 0 0 1 .429.059 13.912 13.912 0 0 0 7.7 2.312C23.722 30 30 23.72 30 16c0-7.719-6.278-14-13.996-14h-.003a13.83 13.83 0 0 0-6.164 1.429.5.5 0 0 1-.441-.897A14.823 14.823 0 0 1 15.996 1C24.272 1 31 7.729 31 16s-6.728 15-14.996 15z"
                  fill="#263238"
                />
                <path
                  d="M20.602 24.493c-1.011 0-2.422-.39-4.439-1.226-2.633-1.09-5.243-3.374-7.35-6.429l-.075-.107c-.696-.951-1.823-2.773-1.823-4.675 0-2.229 1.115-3.36 1.592-3.843.449-.461 1.12-.706 1.874-.706.19 0 .36.009.515.018.635.025 1.003.185 1.353 1.022l.363.88c.384.931.857 2.08.931 2.235.082.169.331.688.054 1.228-.148.316-.293.483-.492.713-.14.161-.233.261-.328.361-.11.118-.222.234-.334.375-.193.226-.193.226-.128.339.37.625 1.157 1.825 2.253 2.8 1.422 1.265 2.571 1.73 3.123 1.954l.137.056c.145.06.328.103.465-.042.248-.267.562-.706.894-1.171l.199-.279c.349-.493.779-.597 1.078-.597.175 0 .357.035.543.105.465.162 2.912 1.381 2.937 1.393l.235.115c.35.168.626.301.784.579.229.398.139 1.442-.209 2.427-.417 1.179-1.967 2.1-3.213 2.368a4.31 4.31 0 0 1-.939.107zM10.38 8.507c-.472 0-.902.142-1.124.369-.461.468-1.342 1.361-1.342 3.18 0 1.181.585 2.658 1.605 4.051l.116.165c1.998 2.898 4.452 5.055 6.909 6.072 1.893.785 3.182 1.15 4.057 1.15.3 0 .523-.042.727-.085.973-.21 2.198-.929 2.479-1.724.304-.857.298-1.516.262-1.647-.002.031-.182-.054-.327-.124l-.249-.122c-.701-.351-2.513-1.236-2.83-1.347a.573.573 0 0 0-.202-.045c-.045 0-.138 0-.264.178l-.2.28c-.351.492-.682.956-.976 1.272-.377.403-1.024.515-1.581.283l-.127-.052c-.557-.225-1.862-.753-3.413-2.133-1.196-1.066-2.049-2.363-2.451-3.042-.423-.729.006-1.231.212-1.472.131-.163.259-.298.387-.434.084-.089.168-.178.254-.278.225-.259.299-.345.396-.552.029-.057.045-.138-.059-.354-.076-.16-.562-1.334-.953-2.286l-.362-.877c-.165-.396-.165-.396-.479-.408a6.578 6.578 0 0 0-.465-.018z"
                  fill="#263238"
                />
                <circle cx={7.5} cy={4} fill="#263238" r={0.5} />
              </svg>
            </CircleButton>
            <CircleButton href="tg://resolve?domain=@eljefedelosminisupers" alt="telegram_share">
              <svg height={32} width={32} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.687 30.163c-.402 0-.843-.132-1.32-.395l-10.803-7.976a.502.502 0 0 1-.038-.774L25.322 9.503a.499.499 0 1 1 .669.743l-12.34 11.106 10.254 7.576c.271.145.729.329 1.055.178.332-.152.496-.637.576-1.017l4.375-20.617c.17-.681.088-1.229-.215-1.481-.231-.192-.575-.206-.947-.038L3.033 15.871c-.789.317-1.037.643-1.033.751.003.071.173.267.68.422l6.375 1.99 6.999-4.416a.5.5 0 0 1 .533.845l-7.194 4.539a.504.504 0 0 1-.416.055l-6.592-2.058c-1.17-.358-1.37-.99-1.384-1.335-.02-.473.253-1.157 1.667-1.723l25.695-9.908c.697-.318 1.445-.25 1.974.191.613.511.813 1.413.549 2.474l-4.371 20.598c-.184.878-.566 1.457-1.137 1.719a1.63 1.63 0 0 1-.691.148z"
                  fill="#263238"
                />
                <path
                  d="M24.687 30.163c-.402 0-.843-.132-1.32-.395l-6.72-4.959a.5.5 0 1 1 .594-.804l6.664 4.923c.271.145.729.329 1.055.178.332-.152.496-.637.576-1.017l4.375-20.617c.17-.681.088-1.229-.215-1.481-.231-.192-.575-.206-.947-.038L3.033 15.871c-.789.317-1.037.643-1.033.751.003.071.173.267.68.422l6.594 2.058a.503.503 0 0 1 .33.332l2.267 7.461c.061.167.108.333.149.477.032.114.072.256.099.298-.004-.005.076.019.289.02.447 0 .617-.167.957-.498l1.66-1.614a.5.5 0 0 1 .697.717L14.09 27.88c-.402.393-.828.809-1.682.809-.98 0-1.178-.434-1.351-1.046-.035-.124-.075-.267-.135-.432l-2.198-7.233-6.339-1.979c-1.17-.358-1.37-.99-1.384-1.335-.02-.473.253-1.157 1.667-1.723l25.695-9.908c.697-.318 1.445-.25 1.974.191.613.511.813 1.413.549 2.474l-4.371 20.598c-.184.878-.566 1.457-1.137 1.719a1.63 1.63 0 0 1-.691.148z"
                  fill="#263238"
                />
                <path
                  d="M18.5 14c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5s.5.225.5.5z"
                  fill="#263238"
                />
              </svg>
            </CircleButton>
            <CircleButton href="mailto:james@magicenergytalent.com">
              <svg
                height={32}
                width={32}
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 27a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM5 27a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM16 14.432a.499.499 0 0 1-.282-.087L3.553 6.021a.5.5 0 1 1 .565-.825L16 13.326l8.958-6.129a.5.5 0 0 1 .565.825l-9.24 6.322a.498.498 0 0 1-.283.088z"
                  fill="#263238"
                />
                <path
                  d="M28.5 27h-25A2.503 2.503 0 0 1 1 24.5v-17a.5.5 0 0 1 1 0v17c0 .827.673 1.5 1.5 1.5h25c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5a.5.5 0 0 1 0-1C29.878 5 31 6.122 31 7.5v17c0 1.378-1.122 2.5-2.5 2.5z"
                  fill="#263238"
                />
                <path
                  d="M16 19a.5.5 0 0 1-.284-.088L2.066 9.498A2.466 2.466 0 0 1 1 7.467 2.47 2.47 0 0 1 3.467 5h25.065a2.467 2.467 0 0 1 1.402 4.498l-13.65 9.414A.5.5 0 0 1 16 19zM3.467 6a1.469 1.469 0 0 0-.833 2.675L16 17.893l13.366-9.218A1.467 1.467 0 0 0 28.533 6H3.467z"
                  fill="#263238"
                />
              </svg>
            </CircleButton>
          </ButtonsContainer>
        </SocialContact>

      </ContactContainer>
    </Modal>
  );
}

export default Contact;
