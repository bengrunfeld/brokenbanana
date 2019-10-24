import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;

  > * {
    padding: 2rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.byline.family};
  font-size: ${({ theme }) => theme.font.byline.size};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 4rem 2rem 0 2rem;
`;
