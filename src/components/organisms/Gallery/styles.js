import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
`;

const GIFContainer = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledGIF = styled.Image`
  width: 100%;
  height: 100%;
`;

export { Container, GIFContainer, StyledGIF };
