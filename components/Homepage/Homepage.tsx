import { Header } from "../Header";
import { HeroImage } from "../HeroImage";
import { HomepageProps } from "./types";
import { TeaserContainer } from "../TeaserContainer";
import { Teaser } from "../Teaser";

import styled from "styled-components";

const Homepage = ({ data }: HomepageProps) => (
  <div>
    <Header />
    <HeroImage />
    <TeaserContainer>
      {data &&
        data.map(item => <Teaser key={`teaser-${item.id}`} content={item} />)}
    </TeaserContainer>
  </div>
);

export default Homepage;
