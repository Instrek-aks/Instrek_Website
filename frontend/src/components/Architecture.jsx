import { useNavigate } from "react-router-dom";

const Architecture = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold"
        >
          ← Back to Cards
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore the art of building design that combines functionality
                with beauty. Architecture shapes our cities and defines our
                spaces.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-orange-900/30 rounded-lg border border-orange-500/30">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">
                    Modern Design
                  </h3>
                  <p className="text-gray-400">
                    Contemporary structures pushing boundaries of innovation.
                  </p>
                </div>

                <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-300 mb-2">
                    Sustainable Building
                  </h3>
                  <p className="text-gray-400">
                    Eco-friendly designs for a better tomorrow.
                  </p>
                </div>

                <div className="p-4 bg-pink-900/30 rounded-lg border border-pink-500/30">
                  <h3 className="text-lg font-semibold text-pink-300 mb-2">
                    Urban Planning
                  </h3>
                  <p className="text-gray-400">
                    Designing cities that work for everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architecture"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
