import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  const post = data?.post;

  if (!post) return <p>Post not found</p>;

  return (
    <div style={{ padding: "2rem" }}>
      {post.featuredImage?.node?.sourceUrl && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText || "Post image"}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <small>{new Date(post.date).toLocaleDateString()}</small>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
