//import Navigation from "../components/Navigation";
import BlogCard from "./BlogCard";
import { blogs } from "./Blogs";
import { ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const BlogIndex = () => {
  const navigate = useNavigate();
  // Show all blogs instead of slicing
  const regularBlogs = blogs;

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/optimized/droneR.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative max-w-7xl mx-auto z-10">
          {/* Home Button */}
          {/* <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white bg-[#ea4820] hover:bg-[#ea4820]/90 px-4 py-2 rounded-lg mb-8 transition-all"
          >
            <Home size={20} />
            Back to Home
          </button> */}

          <div className="text-left mb-16">
            {/* <div className="flex items-center space-x-2 text-[#ea4820] mb-6">
              <span className="text-lg font-medium">Blogs</span>
              <ArrowRight size={20} />
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text">
              Discover in
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-[#ea4820] mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text">
              Next-Gen Technologies
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed text-white">
              Explore cutting-edge insights, innovative solutions, and emerging
              trends that are shaping the future of technology and transforming
              industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Regular Blogs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center mt-6 text-white bg-[#ea4820] hover:bg-[#ea4820]/90 px-4 py-2 rounded-lg mb-8 transition-all"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>
      </section>

      {/* Remove the old footer and add the main Footer component */}
      <Footer />
    </div>
  );
};

export default BlogIndex;
