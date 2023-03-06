import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-vertical: 16px;
  padding-top: 20px;
  padding-horizontal: 42px;
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.color};
`;

export { Container, Divider };
