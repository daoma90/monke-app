import styled from "styled-components/native";
import { MotiView } from "moti";
import { TextInput } from "react-native";

const Container = styled.View`
  // margin-top: 20px;
`;

const LabelContainer = styled(MotiView)`
  position: absolute;
`;

const StyledInput = styled(TextInput)`
  color: ${(props) => props.color};
  padding-right: 40px;
`;

const IconContainer = styled.View`
  position: absolute;
  right: 5px;
  bottom: 20px;
  padding: 5px;
  border-radius: 100px;
  overflow: hidden;
`;

const BorderBottom = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 2px;
  margin-bottom: 2px;
  background-color: ${(props) => props.color};
`;

const ErrorContainer = styled.View`
  height: 20px;
`;

export { Container, LabelContainer, StyledInput, IconContainer, BorderBottom, ErrorContainer };
