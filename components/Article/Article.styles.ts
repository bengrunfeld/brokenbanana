import styled from "styled-components";

export const ArticleLayout = styled.article``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #e3e3e3;
`;

export const ArtilceTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.byline.family};
  font-size: ${({ theme }) => theme.font.title.size};
  padding: 2.5rem 4rem;
  text-align: center;
  margin: 0;

  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => theme.layout.contentWidth};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 3rem;
`;

export const ArticleContent = styled.p`
  font-family: ${({ theme }) => theme.font.paragraph.family};
  font-size: ${({ theme }) => theme.font.paragraph.size};
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  line-height: 2rem;

  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => theme.layout.contentWidth};
  }
`;
