import styled, { css } from "styled-components";

import {BounceAnimation} from "../../styles/animation";

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`;

export const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f75f6c;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  ${BounceAnimation()};

  ${props => props.second && css`
    animation-delay: -1.0s;
  `}
`;