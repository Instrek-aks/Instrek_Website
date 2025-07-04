import { useNavigate } from "react-router-dom";

const Technology = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
        >
          ← Back to Cards
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Welcome to the future of technology! Here we explore the
                cutting-edge innovations that are shaping our digital world.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    Artificial Intelligence
                  </h3>
                  <p className="text-gray-400">
                    Revolutionary AI systems transforming industries worldwide.
                  </p>
                </div>

                <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    Quantum Computing
                  </h3>
                  <p className="text-gray-400">
                    Next-generation computing power solving complex problems.
                  </p>
                </div>

                <div className="p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    Blockchain
                  </h3>
                  <p className="text-gray-400">
                    Decentralized technologies creating new possibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
