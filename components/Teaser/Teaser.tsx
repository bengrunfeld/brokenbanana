import { TeaserContent, TeaserProps } from "./types";

const Teaser = ({ content }: TeaserProps) => {
  console.log("->", content.img);
  return (
    <article>
      <h2>{content.title}</h2>
      <p>{content.excerpt}</p>
      <img src={content.img} />
    </article>
  );
};

export default Teaser;
