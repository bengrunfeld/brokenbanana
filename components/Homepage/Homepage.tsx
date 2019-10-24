import { Title } from "./Homepage.styles";
import { Header } from "../Header";
import { HeroImage } from "../HeroImage";
import { TeaserContent, TeaserProps, HomepageProps } from "./types";

import styled from "styled-components";

const Teaser = ({ content }: TeaserProps) => (
  <article>
    <h2>{content.title}</h2>
    <p>{content.excerpt}</p>
  </article>
);

const Homepage = ({ data }: HomepageProps) => (
  <div>
    <Header />
    <HeroImage />
    <Title>The Broken Banana</Title>
    <p>An online magazine for troubled bananas</p>
    {data &&
      data.map(item => <Teaser key={`teaser-${item.id}`} content={item} />)}
  </div>
);

export default Homepage;
