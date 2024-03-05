import styled from "styled-components";
import { theme } from "./theme";

export const Text = styled.h1`
  display: ${({ display }) => display || "flex"};
  font-size: ${({ size }) => size || theme.fontSize.text};
  color: ${({ color }) => color || theme.color.white};
  position: ${({ position }) => position};
  margin-left: 3px;
`;
