import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./Blogs";
import { ArrowLeft, Clock, Share2, Calendar, User } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload the logo image
    const img = new Image();
    img.src = "./optimized/Logo_White.webp";
    img.onload = () => setIsLoaded(true);
  }, []);

  const blog = blogs.find((b) => b.id === parseInt(id));

  const handleBackClick = () => {
    navigate("/blog");
  };

  // Function to render markdown content with enhanced parsing
  const renderContent = (content) => {
    if (!content) return null;

    // Split content into lines
    const lines = content.split("\n");
    const elements = [];
    let currentList = [];
    let inList = false;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle headers
      if (trimmedLine.startsWith("# ")) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
            >
              {currentList.map((item, i) => (
                <li key={i} className="text-base sm:text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h1
            key={index}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 mt-8 sm:mt-12 first:mt-0 leading-tight"
          >
            {trimmedLine.substring(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith("## ")) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
            >
              {currentList.map((item, i) => (
                <li key={i} className="text-base sm:text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h2
            key={index}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 mt-6 sm:mt-10 leading-tight"
          >
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
            >
              {currentList.map((item, i) => (
                <li key={i} className="text-base sm:text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h3
            key={index}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 mt-6 sm:mt-8 leading-tight"
          >
            {trimmedLine.substring(4)}
          </h3>
        );
      } else if (trimmedLine.startsWith("• ")) {
        // Handle bullet points
        if (!inList) {
          inList = true;
        }
        currentList.push(trimmedLine.substring(2));
      } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
        // Handle bold text
        if (inList && currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
            >
              {currentList.map((item, i) => (
                <li key={i} className="text-base sm:text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <p
            key={index}
            className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"
          >
            {trimmedLine.substring(2, trimmedLine.length - 2)}
          </p>
        );
      } else if (trimmedLine === "") {
        // Handle empty lines
        if (inList && currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
            >
              {currentList.map((item, i) => (
                <li key={i} className="text-base sm:text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(<div key={index} className="mb-3 sm:mb-4"></div>);
      } else if (trimmedLine !== "") {
        // Handle regular paragraphs
        if (inList && currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${index}`}
              className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
            >
              {currentList.map((item, i) => (
                <li key={i} className="text-base sm:text-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <p
            key={index}
            className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6"
          >
            {trimmedLine}
          </p>
        );
      }
    });

    // Handle any remaining list items
    if (inList && currentList.length > 0) {
      elements.push(
        <ul
          key="final-list"
          className="list-disc list-inside space-y-2 mb-4 sm:mb-6 text-gray-300"
        >
          {currentList.map((item, i) => (
            <li key={i} className="text-base sm:text-lg leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Blog Post Not Found
          </h1>
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
      <Header />

      {/* Hero Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden pt-16 sm:pt-20">
        {/* Left - Title & Description */}
        <div className="relative z-10 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-black via-black/90 to-black/50">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold pt-6 sm:pt-8 lg:pt-10 mb-4 sm:mb-6 leading-tight
"
          >
            {blog.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-300">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 max-w-4xl mx-auto">
        {/* Category Badge */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <span className="bg-[#ea4820]/10 text-[#ea4820] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-[#ea4820]/20">
            {blog.category}
          </span>
        </div>

        {/* Blog Content */}
        <article className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none">
          <div className="space-y-4 sm:space-y-6">
            {renderContent(blog.content)}
          </div>
        </article>

        {/* Key Takeaways Section */}
        <div className="bg-gradient-to-r from-[#2A2342] to-[#1a1a2e] rounded-xl sm:rounded-2xl p-6 sm:p-8 my-8 sm:my-12 border border-[#ea4820]/20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="text-[#ea4820]">✦</span>
            Key Takeaways
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-[#ea4820] mt-1">•</span>
              <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Innovation drives industry transformation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ea4820] mt-1">•</span>
              <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Technology integration is key to success
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ea4820] mt-1">•</span>
              <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Future-proofing through digital adoption
              </span>
            </li>
          </ul>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-white bg-[#ea4820] hover:bg-[#ea4820]/90 px-3 sm:px-4 py-2 rounded-lg w-max transition-all duration-300 text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
              Back to Blogs
            </button>
            <div className="flex gap-3 sm:gap-4">
              <button className="text-gray-400 hover:text-[#ea4820] transition-colors duration-300 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg hover:bg-[#ea4820]/10 text-sm sm:text-base">
                <Share2 size={16} className="sm:w-5 sm:h-5" />
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
