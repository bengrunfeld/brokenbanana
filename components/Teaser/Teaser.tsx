import { TeaserContent, TeaserProps } from "./types";
import {
  ArticleContainer,
  TeaserImg,
  ImgContainer,
  TeaserTitle,
  TeaserExcerpt
} from "./Teaser.styles";

const Teaser = ({ content }: TeaserProps) => (
  <ArticleContainer>
    <ImgContainer>
      <TeaserImg src={content.img} />
    </ImgContainer>
    <TeaserTitle>{content.title}</TeaserTitle>
    <TeaserExcerpt>{content.excerpt}</TeaserExcerpt>
  </ArticleContainer>
);

export default Teaser;
