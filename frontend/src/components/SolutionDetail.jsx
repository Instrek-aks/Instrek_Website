import { useParams, Link, Navigate } from "react-router-dom";
import { solutions } from "./Solution";
import { ArrowLeft, CheckCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "../components/Button";

const SolutionDetail = () => {
  const { id } = useParams();
  const solution = solutions.find((s) => s.id === id);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a2e]">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${solution.image})` }}
        />
        {/* Gradient overlay with primary color accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#1a1a2e]/80 to-[#EA6220]/10" />
        
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA6220] via-[#ff724a] to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#EA6220] transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {solution.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">{solution.headline}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Description Section */}
        <div className="max-w-4xl mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#1a1a2e] to-[#121212] border border-[#EA6220]/20">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#EA6220]" />
            Overview
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            {solution.description}
          </p>
        </div>

        {/* Features & Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#121212] rounded-2xl p-8 border border-[#EA6220]/30 hover:border-[#EA6220]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#EA6220]/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EA6220] to-[#ff724a] flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Key Features
              </h3>
            </div>
            <ul className="space-y-4">
              {solution.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-[#EA6220] mt-0.5 flex-shrink-0 group-hover:text-[#ff724a] transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#121212] rounded-2xl p-8 border border-[#EA6220]/30 hover:border-[#EA6220]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#EA6220]/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EA6220] to-[#ff724a] flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Benefits</h3>
            </div>
            <ul className="space-y-4">
              {solution.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-[#EA6220] mt-0.5 flex-shrink-0 group-hover:text-[#ff724a] transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-[#EA6220]" />
            Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solution.detailImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl aspect-video group border border-[#EA6220]/20 hover:border-[#EA6220]/60 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`${solution.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#EA6220]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#EA6220]/15 via-[#ff724a]/10 to-[#EA6220]/5 rounded-2xl p-8 md:p-12 text-center border border-[#EA6220]/30 hover:border-[#EA6220]/60 transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how our{" "}
            <span className="text-[#EA6220] font-semibold">
              {solution.title.toLowerCase()}
            </span>{" "}
            solution can help drive innovation and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-[#EA6220] to-[#ff724a] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#EA6220]/40 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#EA6220] text-[#EA6220] font-semibold rounded-xl hover:bg-[#EA6220]/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
