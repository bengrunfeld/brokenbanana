import { Container, SectionTitle } from "./TeaserContainer.styles";

// TOOD: Figure out why ReactNode is not working as a type for children
const TeaserContainer = ({ children }: any) => (
  <div>
    <SectionTitle>Recent Articles</SectionTitle>
    <Container>{children}</Container>
  </div>
);

export default TeaserContainer;
