import { Container } from "./TeaserContainer.styles";

// TOOD: Figure out why ReactNode is not working as a type for children
const TeaserContainer = ({ children }: any) => (
  <Container>{children}</Container>
);

export default TeaserContainer;
