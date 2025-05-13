import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import Link from "next/link";

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
    <div className="relative min-h-screen">
      {/* Grainy background effect using the provided image */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: "#f8f8f8",
          backgroundImage: `url("https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/09/noisy-gradient.png?fit=2400%2C1200&amp;ssl=1")`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply", // Changed from soft-light to multiply
          opacity: 0.3, // Increased from 0.1 to 0.2
        }}
      ></div>

      {/* Content container with proper z-index to appear above the background */}
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#0f304f] hover:text-blue-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blogs
          </Link>
        </div>

        <div className="p-6 md:p-8">
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 text-center"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <div className="mb-8 text-gray-500 text-center">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          {post.featuredImage?.node?.sourceUrl && (
            <div className="flex justify-center mb-8">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || "Post image"}
                className="w-auto h-[400px] rounded-lg shadow-md object-contain max-h-[500px]"
              />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-blue-600 prose-img:rounded-md prose-img:shadow-md prose-img:mx-auto text-left"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );  
}
