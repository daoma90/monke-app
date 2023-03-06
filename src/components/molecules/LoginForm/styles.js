import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

const InputsContainer = styled.View`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ForgotPasswordContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export { Container, InputsContainer, ForgotPasswordContainer };
