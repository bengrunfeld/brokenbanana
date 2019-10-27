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
  console.log(paragraphs);

  return (
    <ArticleLayout>
      <ArticleHeader />
      <TitleContainer>
        <ArtilceTitle>{content && content.title}</ArtilceTitle>
      </TitleContainer>
      <ContentContainer>
        {paragraphs &&
          paragraphs.map((item: string) => (
            <ArticleContent key={uuid()}>{item}</ArticleContent>
          ))}
      </ContentContainer>
    </ArticleLayout>
  );
};

export default Article;
