import Link from "next/link";
import { ArticleHeader } from "./components/ArticleHeader";
import uuid from "uuid";

import {
  ArticleLayout,
  ArtilceTitle,
  ArticleContent,
  TitleContainer,
  ContentContainer
} from "./Article.styles";

const Article = ({ content }: any) => {
  const paragraphs = content.text.split("\n");

  return (
    <ArticleLayout>
      <ArticleHeader />
      <TitleContainer>
        <ArtilceTitle>{content && content.title}</ArtilceTitle>
      </TitleContainer>
      <ContentContainer>
        {paragraphs &&
          paragraphs.map(
            (item: string) =>
              item && (
                <ArticleContent key={`para-${uuid()}`}>{item}</ArticleContent>
              )
          )}
      </ContentContainer>
    </ArticleLayout>
  );
};

export default Article;
