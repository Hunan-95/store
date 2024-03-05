import styled from "styled-components";

export const Div = styled.div`
  max-width: ${({ mw }) => mw};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  gap: ${({ gap }) => gap};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ direction }) => direction || "row"};
  background-color: ${({ bg }) => bg};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  border-radius: ${({ radius }) => radius};
  text-align: ${({ textalign }) => textalign};
  border: ${({ border }) => border || "none"};
  border-radius:${({radius})=>radius||"none"};
  @media ${({ theme }) => theme.media.tablat} {
    color: chartreuse;
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
  }
`;

export const Center = styled.div`
  max-width: ${({ mw }) => mw};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  padding: ${({ p }) => p};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  justify-content: center;
  align-items: center;
  position: ${({ position }) => position};
  text-align: ${({ text }) => text};
`;

export const DivRctangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  position: ${({ position }) => position};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ theme }) => theme.color.grey400};
  &:hover {
    background-color: ${({ theme }) => theme.color.orange};
  }
  @media screen and (max-width: 520px) {
    width:62px;
    height:72px
  }
`;


export const FlexRctangle = styled.div`
  position: absolute;
  margin-left: 32px;
  margin-bottom: 32px;
  width: 20px;
  border-radius: 50%;
  padding: 2px;
  background-color: #fc573b;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey400};
  }
`;

export const divPosition = styled.div`
  position: relative;
`;
