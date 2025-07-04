import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./Blogs";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Footer from "./Footer";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    // Force scroll to top immediately when component mounts
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs.find((b) => b.id === parseInt(id));

  const handleBackClick = () => {
    // First scroll to top
    window.scrollTo(0, 0);
    // Then navigate
    navigate("/blog");
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={handleBackClick}
            className="text-[#ea4820] hover:text-[#ea4820]/80 transition-colors"
          >
            Return to Blog List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-[60vh] overflow-hidden">
        {/* Left - Title & Description */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 bg-gradient-to-r from-black via-black/80 to-black/50">
          <button
            onClick={handleBackClick}
            className="mb-4 flex items-center gap-2 text-white bg-[#ea4820] hover:bg-[#ea4820]/90 px-4 py-2 rounded-lg w-max"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {blog.description}
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative h-full w-full">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black  to-transparent " />
        </div>
      </div>

      {/* Introduction & Content */}
      <div className="w-full px-8 md:px-12 py-12 max-w-screen-2xl mx-auto">
        {/* Category and Meta Info */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-[#ea4820]/10 text-[#ea4820] px-4 py-1 rounded-full text-sm">
            {blog.category}
          </span>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Introduction */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Introduction
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Welcome to our latest blog post where we explore{" "}
          {blog.category.toLowerCase()}. This article provides a detailed
          overview of the topic and offers insightful perspectives on industry
          trends, expert opinions, and actionable recommendations. Let's dive
          in.
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-8">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{blog.author}</h3>
            <p className="text-gray-400 text-sm">{blog.date}</p>
          </div>
          <button className="ml-auto text-[#ea4820] hover:text-[#ea4820]/80 transition-colors">
            <Share2 size={20} />
          </button>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            Understanding the Impact
          </h2>
          <pre
            className="text-gray-300 text-lg leading-relaxed mb-6"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
          >
            {blog.content ||
              `In today's rapidly evolving technological landscape, understanding the impact of emerging technologies is crucial. This blog post delves deep into the implications and potential applications of these innovations.

              The integration of cutting-edge solutions has revolutionized how businesses operate and how we approach problem-solving in various industries. From artificial intelligence to blockchain technology, each advancement brings new opportunities and challenges.`}
          </pre>

          {/* Key Points */}
          <div className="bg-[#2A2342] rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Key Takeaways
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-[#ea4820]">•</span>
                Innovation drives industry transformation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#ea4820]">•</span>
                Technology integration is key to success
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#ea4820]">•</span>
                Future-proofing through digital adoption
              </li>
            </ul>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-medium">Share this article</h4>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-[#ea4820] transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
