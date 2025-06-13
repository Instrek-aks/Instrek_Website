import React, { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Thank goodness I was never sent to school; it would have rubbed off some of the originality.; it would have rubbed off some of the originality.",
      author: "BEATRIX POTTER, AUTHOR",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now. This perfectly captures our approach to digital transformation.",
      author: "STEVE JOBS, APPLE",
    },
    {
      quote:
        "Innovation distinguishes between a leader and a follower. We strive to be leaders in everything we create.",
      author: "ELON MUSK, TESLA",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 to-teal-600 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">TESTIMONIALS</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-48 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentTestimonial
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-white/80 font-medium">
                  - {testimonial.author}
                </cite>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
