import React, { useState } from "react";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("ALL");

  const portfolioItems = [
    {
      id: 1,
      category: "DESIGN",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Business Card Design",
    },
    {
      id: 2,
      category: "VIDEO",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Video Production",
    },
    {
      id: 3,
      category: "WEB",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Website Development",
    },
    {
      id: 4,
      category: "PHOTOGRAPHY",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Product Photography",
    },
    {
      id: 5,
      category: "DESIGN",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mobile App Design",
    },
    {
      id: 6,
      category: "WEB",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Platform",
    },
  ];

  const categories = ["ALL", "PHOTOGRAPHY", "DESIGN", "VIDEO", "WEB", "MUSIC"];

  const filteredItems =
    filter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-4">
            <span className="text-gray-800">PORTFOLIO</span>
            <span className="text-cyan-400"> /</span>
            <span className="text-gray-300"> PHOTOGRAPHY</span>
          </h2>
          <div className="text-4xl font-light text-gray-300 mb-8">
            <span className="text-gray-300">DESIGN</span>
            <span className="text-gray-300"> / VIDEO / WEB / MUSIC</span>
            <span className="text-6xl font-black text-cyan-400 ml-4">ALL</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-cyan-400 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-cyan-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-cyan-400 text-sm font-medium mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
