import styled from "styled-components/native";

const StyledImage = styled.Image`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 100px;
`;

export { StyledImage };
