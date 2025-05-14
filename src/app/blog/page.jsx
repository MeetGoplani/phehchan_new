"use client";

import React from "react";
import { gql, useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import ThreePartText from "@/components/section/common/3parttext";
import { Loader2 } from "lucide-react";

// GraphQL query
const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
        date
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

function BlogPageContent() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <div className="flex min-h-screen items-center justify-center w-full"><Loader2 className="animate-spin "/> </div>;
  if (error)
    return (
      <p className="text-center py-8 text-red-500">Error loading posts.</p>
    );

  const posts = data?.posts?.nodes || [];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <ThreePartText heading="BLOGS" />

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 mt-8 text-lg">No blogs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Image section */}
              <div className="relative h-56 m-2.5 overflow-hidden rounded-lg">
                {post.featuredImage?.node?.sourceUrl && (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || "Blog image"}
                    className="w-full h-full object-contain transition-transform rounded-lg overflow-hidden duration-300  group-hover:scale-105 "
                  />
                )}
              </div>

              {/* Text content */}
              <div className="p-4">
                <h6
                  className="mb-2 text-slate-800 text-xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <p className="text-slate-600 leading-normal font-light line-clamp-3">
                  {post.content.replace(/<[^>]+>/g, "").substring(0, 100)}...
                </p>
              </div>

              {/* Button */}
              <div className="px-4 pb-4 pt-0 mt-2">
                <span className="inline-block rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700">
                  Read more
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <ApolloProvider client={client}>
      <BlogPageContent />
    </ApolloProvider>
  );
}
