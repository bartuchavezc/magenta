import { PropTypes } from "prop-types";

Signature.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  shadowColor: PropTypes.string,
  shadow: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export function Signature({ width, height, backgroundColor, color, shadow, shadowColor }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      filter={shadow ? `drop-shadow(0px 0px 6px ${shadowColor ? shadowColor : color})` : ""}
    >
      <path
        d="M0 17.9186L5.13242 18.6652C5.13242 18.6652 33 2.33582e-05 65.0001 0C94.5001 -2.15333e-05 123 18.6652 123 18.6652L128 17.9186C128 17.9186 127.269 20.1337 127 21.6516C126.698 23.3554 126.714 24.373 126.632 26.1312C126.524 28.4581 126.632 32.1041 126.632 32.1041L127 164L1.00002 165L1.5 32.1041C1.5 32.1041 1.57135 27.5852 1.5 26.1312C1.43515 24.8098 1.32759 23.3563 1.00003 21.6516C0.710039 20.1423 0 17.9186 0 17.9186Z"
        fill={backgroundColor}
      />
      <path
        d="M128 311.081L122.868 310.335C122.868 310.335 95 329 62.9999 329C33.4999 329 5 310.335 5 310.335L0 311.081C0 311.081 0.730974 308.866 1 307.348C1.30198 305.645 1.28566 304.627 1.36758 302.869C1.476 300.542 1.36758 296.896 1.36758 296.896L1 165L6 160.5L125 160.5L127 164L126.5 296.896C126.5 296.896 126.429 301.415 126.5 302.869C126.565 304.19 126.672 305.644 127 307.348C127.29 308.858 128 311.081 128 311.081Z"
        fill={backgroundColor}
      />
      <path
        d="M59.75 253.6L57 256.4C63.2 260.25 71.75 266.4 76.35 270.6L79.3 267.1C74.35 263.1 66.15 257.35 59.75 253.6ZM82.6 244.5L79.3 242.5C78.5 242.8 77.4 242.95 76.05 242.95H60.15L58.55 246.55H77.05C75.9 251.2 72.75 257.55 68.9 262.15C64.4 267.5 57.6 272.8 48.3 275.6L51.85 278.75C61.35 275.25 67.85 269.9 72.4 264.3C76.8 258.9 79.95 252.25 81.45 247.15C81.7 246.35 82.2 245.2 82.6 244.5ZM65.75 237.25L61.2 235.8C60.9 237.1 60.1 238.9 59.6 239.75C57.3 244.35 52.15 251.85 43.6 257.2L46.9 259.75C54.9 254.25 60.55 246.7 63.5 241.2C64 240.25 64.9 238.55 65.75 237.25Z"
        fill={color}
      />
      <path
        d="M50.35 174.4L47.45 177.45C51.2 179.9 57.4 185.3 59.95 187.9L63.05 184.7C60.3 181.95 53.85 176.75 50.35 174.4ZM46.05 207.9L48.65 212C57 210.45 63.3 207.35 68.35 204.2C75.9 199.45 81.7 192.65 85.1 186.45L82.7 182.15C79.8 188.35 73.75 195.75 66 200.6C61.25 203.55 54.75 206.6 46.05 207.9Z"
        fill={color}
      />
      <path
        d="M85.4 48.3L82.25 45.8C81.55 46.05 80.4 46.15 79.05 46.15C74.05 46.15 51.8 46.15 49.25 46.15C47.5 46.15 45.5 46 44.15 45.8V50.25C45.1 50.15 47.25 50 49.25 50C52.1 50 74.15 50 78.65 50C76 54.75 69.55 62.85 61.55 68.4L64.65 71.2C73.5 64.8 80.4 56 84.15 49.85C84.45 49.4 84.9 48.85 85.4 48.3ZM61.85 72.05C65.05 75.3 69.05 79.7 70.9 82.25L74.55 79.35C72.4 76.75 68.5 72.65 65.35 69.5C61.75 66 55.95 61.25 53.65 59.6L50.45 62.2C53.1 64.1 58.85 69.05 61.85 72.05Z"
        fill={color}
      />
      <path
        d="M77.1 105.75L74.45 106.85C75.8 108.75 77.5 111.75 78.45 113.8L81.15 112.6C80.15 110.55 78.35 107.5 77.1 105.75ZM82.55 103.75L79.95 104.85C81.35 106.75 83 109.55 84.1 111.75L86.75 110.55C85.8 108.7 83.9 105.55 82.55 103.75ZM53.6 139.95C53.6 144.9 55.3 147.35 64.65 147.35C70.9 147.35 75.85 146.95 80.35 146.3L80.5 142C75.5 142.95 70.7 143.45 64.9 143.45C58.95 143.45 57.65 142.35 57.65 138.9C57.65 133.95 57.65 117.65 57.65 112.35C57.65 110.9 57.8 109.2 58 107.75H53.25C53.5 109.2 53.6 110.85 53.6 112.35C53.6 117.7 53.6 135.4 53.6 139.95ZM82.65 117.65L79.7 115.35C79.05 115.7 78.1 116 77.05 116.25C73.25 117.1 47.65 122.25 41.3 123.05L42.1 127.25C48.05 125.9 75.05 120.55 76.6 120.2C75.1 123.2 71.4 128.7 67.65 132.1L71.15 134.2C75.15 130.05 79.1 123.8 81.4 119.65C81.75 119 82.25 118.15 82.65 117.65Z"
        fill={color}
      />
    </svg>
  );
}
