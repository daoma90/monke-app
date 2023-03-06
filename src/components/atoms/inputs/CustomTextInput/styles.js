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

export { Container, LabelContainer, StyledInput, BorderBottom, ErrorContainer };
