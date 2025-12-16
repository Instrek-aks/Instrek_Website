import { solutions } from "./Solution";
import SolutionCard from "../components/SolutionCard";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a2e]">
      {/* Header Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EA6220]/10 via-transparent to-[#EA6220]/5" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EA6220]/50 to-transparent" />
        
        <div className="relative container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#EA6220] transition-colors mb-8 font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-[#EA6220]" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Our Solutions
              </h1>
            </div>

            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Discover our comprehensive range of solutions designed to transform
              your business and drive sustainable growth in the digital age.
            </p>

            {/* Decorative line */}
            <div className="mt-8 h-1 w-32 bg-gradient-to-r from-[#EA6220] to-[#ff724a] rounded-full" />
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 py-16 px-8 md:px-12 bg-gradient-to-r from-[#EA6220]/20 to-[#ff724a]/10 rounded-3xl border border-[#EA6220]/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
            Our expert team can customize solutions tailored to your specific business needs. Let's discuss your requirements today.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#EA6220] to-[#ff724a] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#EA6220]/40 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
