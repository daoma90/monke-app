import styled from "styled-components/native";

const StyledContainer = styled.View`
  border-radius: 100px;
  height: 45px;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.color};
`;

const StyledView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.View`
  margin-bottom: 5px;
`;

const SpinnerContainer = styled.View`
  position: absolute;
  right: 20px;
`;

export { StyledContainer, StyledView, TextContainer, SpinnerContainer };
