"use client";

import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { Loader2 } from "lucide-react";

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

export default function BlogPostPage({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await client.query({
          query: GET_POST_BY_SLUG,
          variables: { slug: resolvedParams.slug },
        });
        
        setPost(data?.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [resolvedParams.slug]);
  
  if (loading) return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <Loader2 className="animate-spin " /> 
    </div>
  );
  if (!post) return <p>Post not found</p>;

  return (
    <div className="relative min-h-screen bg-[#ffffff]">
      {/* Content container with proper z-index */}
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        

        {/* Header and featured image section with SVG background */}
        <div className="relative mb-0">
          {/* SVG background - now full width of screen with blur effect at bottom */}
          <div 
            className="absolute left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen h-full z-0 pointer-events-none" 
            style={{ 
              backgroundImage: `url("/ooorganize.svg")`, 
              backgroundSize: "332px 332px", 
              backgroundPosition: "center", 
              opacity: 0.5,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0))',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0))'
            }} 
          ></div>
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
          
          <div className="relative z-10 p-6 md:p-8">
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
                  className="lg:w-auto lg:h-[400px] rounded-lg object-contain max-h-[500px]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content section without SVG background */}
        <div className="" >
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-blue-600 prose-img:rounded-md prose-img:shadow-md prose-img:mx-auto text-left"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );  
}
