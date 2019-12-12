import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const BounceKeyframes = keyframes`
  0%, 100% {
    transform: scale(0,0);
  }

  50% {
    transform: scale(0.8);
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const BounceAnimation = ({
  time = "2s",
  type = "ease-in-out"
} = {}) => css`
  animation: ${time} ${BounceKeyframes} infinite ${type};
`;
