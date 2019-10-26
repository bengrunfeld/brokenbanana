import styled from "styled-components";

export const ArticleContainer = styled.article`
  display: flex;
  align-items: center;
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid #e3e3e3;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const ImgContainer = styled.div`
  height: 8rem;
  width: 8rem;
  overflow: hidden;
  flex-shrink: 0;
`;

export const TeaserImg = styled.img`
  width: 100%;
`;

export const TeaserTitle = styled.h3`
  padding-left: 2rem;
  font-family: ${({ theme }) => theme.font.byline.family};
  font-size: ${({ theme }) => theme.font.byline.size};
`;

export const TeaserExcerpt = styled.p`
  display: none;
`;
