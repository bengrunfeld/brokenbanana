import styled from "styled-components";

export const HeaderContainer = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    margin: 0;
    padding: 0 2rem;
  }
`;

export const SiteName = styled.h3`
  font-family: ${({ theme }) => theme.font.byline.family};
  font-size: ${({ theme }) => theme.font.byline.size};
  color: ${({ theme }) => theme.colors.black};
`;

export const HomeLink = styled.a`
  font-family: ${({ theme }) => theme.font.paragraph.family};
  font-size: ${({ theme }) => theme.font.paragraph.size};
  color: ${({ theme }) => theme.colors.siteTitle};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
