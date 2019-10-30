import { NowRequest, NowResponse } from "@now/node";
import data from "./_data";

const post = (req: NowRequest, res: NowResponse) => {
  const { query } = req;

  const post = data.reduce((a: any, b: any) => {
    if (a) return a;
    if (b.id === query.id) return b;
    return false;
  }, false);

  res.json(post);
};

export default post;
