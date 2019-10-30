import { NowRequest, NowResponse } from "@now/node";
import data from "./_data";

const allPosts = (req: NowRequest, res: NowResponse) => {
  res.json(data);
};

export default allPosts;
