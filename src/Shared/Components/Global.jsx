import { createGlobalStyle } from "styled-components";

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
    img {
      will-change: transform;
      transition: 0.2s ease;
    }
  }
  .lower-mountain {
    left: -2%;
  }
`;

export default Global;