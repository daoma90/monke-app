import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;
`;

const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.4;
`;

const ConstructionContainer = styled.View`
  position: absolute;
  transform: ${(props) => props.rotate};
`;

export { Container, BackgroundImage, ConstructionContainer };
