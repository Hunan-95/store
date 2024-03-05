import styled from "styled-components";

// orinak
export const Button = styled.button`
  width: 250px;
  height: 50px;
  padding: 14px, 32px, 14px, 32px;
  border-radius: 5px;
  border: ${({ border }) => border || "none"};
  color: ${({ color }) => color || "white"};
  &:hover {
    background-color: ${({ theme, bg }) => bg || theme.color.orange};
  }
  background-color: ${({ theme, bg }) => bg || theme.color.orange};
  cursor: pointer;
`;
//
