import fetch from "isomorphic-unfetch";
import { Homepage } from "../components/Homepage";
import { HomepageProps as IndexProps } from "../components/Homepage/types";

const Index = ({ data }: IndexProps) => (
  <div>
    <Homepage data={data} />
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch("http://brokenbanana.tech/api/allPosts");
  const data = await res.json();

  console.log(data);

  return { data };
};

export default Index;
