import data from "../data/data";

const allPosts = (req: any, res: any) => {
  res.json(data);
};

export default allPosts;
