import styled, { css } from "styled-components";
const defaultSize = 32;

const COLORS = {
  default: ["rgba(255, 255, 255, 0.2)", "#FFF"],
  primary: ["var(--primary-lighten)", "var(--primary-darken)"],
};

const Spiner = styled.div`
  animation: load8 1.1s infinite linear;

  ${({ size = defaultSize, color = "default" }) => {
    const _size = size / 6;
    const [filed, bg] = COLORS[color] || COLORS.default;
    return css`
      border-bottom: ${_size}px solid ${bg};
      border-left: ${_size}px solid ${filed};
      border-right: ${_size}px solid ${bg};
      border-top: ${_size}px solid ${bg};
    `;
  }}
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);

  &,
  &:after {
    border-radius: 50%;
    ${({ size = defaultSize }) => css`
      height: ${size}px;
      width: ${size}px;
    `}
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Spiner;
