import fetch from "isomorphic-unfetch";
import getUrlPrefix from "../utils/getUrlPrefix";
import { Article } from "../components/Article";

const Index = ({ data }: any) => {
  return (
    <div>
      <Article content={data} />
    </div>
  );
};

Index.getInitialProps = async ({ query }: any) => {
  const { post } = query;
  const urlPrefix = getUrlPrefix();
  const res = await fetch(`${urlPrefix}/api/post?id=${post}`);
  const data = await res.json();

  return { data };
};

export default Index;
