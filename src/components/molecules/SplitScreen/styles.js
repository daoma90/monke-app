import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${(props) => props.color};
`;

const TopContainer = styled.View`
  display: flex;
  width: 100%;
  height: auto;
`;

const BottomContainer = styled.View`
  background-color: ${(props) => props.color};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  height: 100%;
`;

export { Container, TopContainer, BottomContainer };
