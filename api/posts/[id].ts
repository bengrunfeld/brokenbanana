import data from "../_data";

const getPost = (req: any, res: any) => {
  const {
    postId: { id }
  } = req;

  if (!postId) throw `ERROR: Post ID invalid - ${postId}`;

  const post = data.reduce((a, b) => {
    if (a) return a;
    if (b.id === postId) return b;
  }, false);

  res.json(post);
};

export default getPost;
