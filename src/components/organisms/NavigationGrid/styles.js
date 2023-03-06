import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Grid = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 90%;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${(props) => props.height};
  padding-bottom: ${(props) => (props.noMarginBottom ? "0px" : "20px")};
`;

export { Grid, Row };
