import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const BlogCard = ({ blog, featured = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  // Use the blog's image property directly
  const getImageUrl = (blog) => {
    return blog.image || "/optimized/images/digitaltrans.webp"; // Fallback image if blog.image is not available
  };

  if (featured) {
    return (
      <Link
        to={`/blog/${blog.id}`}
        className="group relative overflow-hidden rounded-xl bg-[#2A2342] hover:bg-[#2A2342]/80 transition-all duration-300 cursor-pointer"
      >
        {/* Image Container */}
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={getImageUrl(blog)}
            alt={blog.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content Container */}
        <div className="p-8">
          {/* Category Tag */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#ea4820]/10 text-[#ea4820] text-sm font-medium mb-4">
            {blog.category}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#ea4820] transition-colors duration-300">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-6 line-clamp-3">
            {blog.description}
          </p>

          {/* Author Info and Date */}
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center space-x-3">
              <img
                src={blog.authorImage || "/optimized/Vineet.webp"} // Fallback author image
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-white font-medium">{blog.author}</p>
                <p className="text-gray-400 text-sm">{blog.readTime}</p>
              </div>
            </div> */}

            {/* Read More Link */}
            <span className="text-[#ea4820] font-medium group-hover:text-[#ea4820]/80 transition-colors duration-300">
              Read More
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${blog.id}`}
      className="group block relative overflow-hidden rounded-xl bg-black/50 border border-[#121212] hover:border-black transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative h-48 overflow-hidden">
        <img
          src={getImageUrl(blog)}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="flex items-center space-x-2 text-sm text-blue-400 mb-3">
          <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs">
            {blog.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 text-left">
          {blog.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2 text-sm text-left">
          {blog.description}
        </p>
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center space-x-3 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{blog.readTime}</span>
            </div>
          </div> */}
          <ArrowRight
            className="text-blue-400 group-hover:translate-x-1 transition-transform"
            size={16}
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
