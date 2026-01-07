function PostList({posts, loading,userId}){
  if(!userId){
    return <p>Please select a user to view posts</p>

  }
  if(loading){
    return <p>Loading posts...</p>

  }
  return(
    <div>
      <p>Total Posts: {posts.length}</p>
      { posts.map(post => (
<div key={post.id} style={{ border:"1px solid #ccc", margin:"10px"}}>
  <h3>{post.title}</h3>
  <p>{post.body}</p>
  </div>
        ))}
    </div>
  );
}
export default PostList;