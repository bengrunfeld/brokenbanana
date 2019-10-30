import Link from "next/link";
import { TeaserContent, TeaserProps } from "./types";
import {
  ArticleContainer,
  TeaserImg,
  ImgContainer,
  TeaserTitle,
  TeaserExcerpt
} from "./Teaser.styles";

const Teaser = ({ content }: TeaserProps) => (
  <Link href={`/article?post=${content.id}`}>
    <ArticleContainer>
      <ImgContainer>
        <TeaserImg src={content.img} />
      </ImgContainer>
      <TeaserTitle>{content.title}</TeaserTitle>
      <TeaserExcerpt>{content.excerpt}</TeaserExcerpt>
    </ArticleContainer>
  </Link>
);

export default Teaser;
