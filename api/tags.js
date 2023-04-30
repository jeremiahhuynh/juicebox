const { getPostsByTagName } = require('../db');

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  const { tagName } = req.params;

  try {
    const posts = await getPostsByTagName(tagName);

    res.send({ posts });
  } catch ({ name, message }) {
    next({ name, message });
  }
});