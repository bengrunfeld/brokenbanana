import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 13rem;

  > * {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 6rem;
  display: inline-block;
  color: #3d3d3d;
  margin: 0;
  letter-spacing: 0.6rem;
`;

export const Byline = styled.h3`
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  margin: 0;
`;
