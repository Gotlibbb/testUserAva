import React from "react";
import styled, { css } from "styled-components";

const AvaContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  width: ${(props) => props.width + props.margin + "px"};
  border-radius: ${(props) => props.width + props.margin + "px"};
  img {
    width: ${(props) => props.width + "px"};
    margin: ${(props) => props.margin + "px"};
  }
  background-color: ${(props) => props.backgroundColor};
  &:hover::before {
    background: ${(props) =>
      props.colors &&
      css`linear-gradient(to right,${props.hoverColors[0]}, ${props.hoverColors[1]})`};
  }
  &::before {
    content: "";
    position: absolute;
    top: -${(props) => props.colorWidth}px;
    bottom: -${(props) => props.colorWidth}px;
    left: -${(props) => props.colorWidth}px;
    right: -${(props) => props.colorWidth}px;
    border-radius: ${(props) => props.width + props.margin + "px"};
    background: ${(props) =>
      props.colors &&
      css`linear-gradient(to right,${props.colors[0]}, ${props.colors[1]})`};
    z-index: -1;
  }
`;

const ColoredUserpic = (props) => {
  return (
    <AvaContainer
      width={props.size}
      margin={props.margin}
      backgroundColor={props.backgroundColor}
      colorWidth={props.colorWidth}
      colors={props.colors}
      hoverColors={props.hoverColors}
    >
      <img src={props.src} alt="ava" />
    </AvaContainer>
  );
};

export default React.memo(ColoredUserpic);
