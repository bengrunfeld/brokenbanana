import Link from "next/link";
import { HeaderContainer, SiteName, HomeLink } from "./ArticleHeader.styles";

const ArticleHeader = () => (
  <HeaderContainer>
    <SiteName>The Broken Banana</SiteName>
    <Link href="/">
      <HomeLink>Home</HomeLink>
    </Link>
  </HeaderContainer>
);

export default ArticleHeader;
