import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 13rem;
  margin: 1rem 0;

  > * {
    flex-basis: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.title.family};
  font-size: ${({ theme }) => theme.font.title.size};
  display: inline-block;
  color: ${({ theme }) => theme.colors.siteTitle};
  letter-spacing: 0.6rem;
  text-align: center;

  @media screen and (min-width: 810px) {
    font-size: ${({ theme }) => theme.font.title.sizeDesktop};
  }
`;

export const Byline = styled.h3`
  font-size: ${({ theme }) => theme.font.byline.size};
  font-family: ${({ theme }) => theme.font.byline.family};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
