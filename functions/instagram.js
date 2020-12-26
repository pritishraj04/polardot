const fetch = require("isomorphic-fetch");

const url = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"5645621898","first":15}`;

const cache = {
  lastFetch: 0,
  posts: [],
};

async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetchl;
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }

  const data = await fetch(url).then((res) => res.json());
  const posts = slimUpPosts(data);
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return posts;
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    thumbnail: edge.node.thumbnail_src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    id: edge.node.id,
  }));
}

// module.exports.doStuff = async function doStuff(event, context, callback) {
//   const posts = await getPosts();
//   callback(null, {
//     statusCode: 200,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(posts),
//   });
// };

// module.exports = doStuff;
// exports.handler = function (event, context, callback) {
//   callback(null, {
//     statusCode: 200,
//     body: "Hello, World",
//   });
// };

exports.handler = async function (event, context, callback) {
  const posts = await getPosts();
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(posts),
  });
};
