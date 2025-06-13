import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-20 bg-[#7fa] relative overflow-hidden "
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-5xl font-black mb-4">
                <span className="text-[#EA6220]">ABOUT US</span>
              </h2>
              <h3 className="text-5xl font-light text-white mb-8">
                Empowering Futures,
                <br />
                Engineered Today
              </h3>
            </div>

            <div className="space-y-6 text-gray-600">
              {/* <p className="text-lg leading-relaxed">
                <span className="text-cyan-400 font-medium">/</span> Suspendisse
                interdum tortor augue, in tempus urna ultricies
              </p>

              <p className="leading-relaxed">
                Vivamus fringilla eu nisl non laoreet. Nunc nec faucibus arcu,
                quis pretium odio. Nullam non turpis imperdiet, venenatis felis
                id, fermentum urna.
              </p> */}

              <p className="text-[#EA6220] font-medium text-2xl">
                To create a future where technology is accessible, inclusive,
                and truly transformative empowering individuals, communities,
                and institutions to thrive in a digitally connected world.
              </p>

              <p className="leading-relaxed text-xl text-[#005150]">
                Instrek is a purpose led technology company committed to solving
                real-world problems through smart innovation. From AI-driven
                career guidance systems to scalable smart city platforms, we
                create solutions that matter. Our approach blends deep tech with
                human insight building tools that empower people, enable
                transformation, and drive lasting impact.
              </p>

              {/* <p className="font-medium text-gray-800">
                Nulla hendrerit posuere nisl vitae sollicitudin.
              </p>

              <p className="leading-relaxed">
                Duis diam urna, venenatis eu felis in, pulvinar consequat sem.
                Proin accumsan
              </p> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in delay-300">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <img
                src="./images/ab.png"
                alt="Creative workspace"
                className="w-full h-96 object-cover rounded-lg"
              />
              {/* Floating devices effect */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-12 bg-[#EA6220] rounded"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-8 bg-black rounded"></div>
              </div>
            </div>

            {/* Paint splash */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-500 opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
