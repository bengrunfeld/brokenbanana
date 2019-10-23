import fetch from "isomorphic-unfetch";
import styled from "styled-components";

const Title = styled.h1`
  font-family: helvetica;
  color: darkblue;
`;

type TeaserContent = {
  id: string;
  title: string;
  excerpt: string;
};

type TeaserProps = {
  content: TeaserContent;
};

type MainProps = {
  data: TeaserContent[];
};

const Teaser = ({ content }: TeaserProps) => (
  <article>
    <h2>{content.title}</h2>
    <p>{content.excerpt}</p>
  </article>
);

const Main = ({ data }: MainProps) => (
  <div>
    <Title>The Broken Banana</Title>
    <p>An online magazine for troubled bananas</p>
    {data.map(item => (
      <Teaser key={`teaser-${item.id}`} content={item} />
    ))}
  </div>
);

Main.getInitialProps = async () => {
  const res = await fetch("http://brokenbanana.tech/api/allPosts");
  const data = await res.json();

  return { data };
};

export default Main;
