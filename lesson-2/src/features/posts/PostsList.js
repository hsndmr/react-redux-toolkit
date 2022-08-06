import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
          </p>
        </article>
      ))}
    </section>
  );
};

export default PostsList;
