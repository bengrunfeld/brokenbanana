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
`;

export const ArticleContent = styled.p`
  font-family: ${({ theme }) => theme.font.paragraph.family};
  font-size: ${({ theme }) => theme.font.paragraph.size};

  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => theme.layout.contentWidth};
  }
`;
