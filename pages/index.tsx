import fetch from "isomorphic-unfetch";
import getUrlPrefix from "../utils/getUrlPrefix";
import { Homepage } from "../components/Homepage";
import { HomepageProps as IndexProps } from "../components/Homepage/types";

const Index = ({ data }: IndexProps) => (
  <div>
    <Homepage data={data} />
  </div>
);

Index.getInitialProps = async () => {
  const urlPrefix = getUrlPrefix();
  const res = await fetch(`${urlPrefix}/api/allPosts`);
  const data = await res.json();

  return { data };
};

export default Index;
