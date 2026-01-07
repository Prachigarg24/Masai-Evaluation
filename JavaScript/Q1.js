const fetch = (...args)=> 
  import("node-fetch").then(({default: fetch}) => fetch(...args));
async function fetchPostsWithComments() {
  try{
    const [postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments")

    ]);
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    const commentMap= comments.reduce((acc, comment) => {
      if(!acc[comment.postId]){
        acc[comment.postId] = [];
      }
      acc[comment.postId].push(comment);
      return acc;
    }, {});
    const results = posts.filter(post => commentMap[post.id])
    .map(post => {
      const postComments = commentMap[post.id];
      return {
        postId: post.id,
        title: post.title,
        commentCount: postComments.length,
        firstCommenterEmail: postComments[0].email
      };
    })
    .sort((a,b) => b.commentCount - a.commentCount)
    .slice(0,5);
    return results;
  } catch (error){
    console.log("Something Went Wrong:", error)
    return [];
  }
}
fetchPostsWithComments()
.then(results => console.log(results))
.catch(err => console.log(err))