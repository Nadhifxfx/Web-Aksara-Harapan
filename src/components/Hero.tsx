import { Gamepad2, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-full shadow-2xl">
                <Gamepad2 size={80} className="text-blue-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
            Aksara Harapan
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            Belajar Bahasa Isyarat Melalui Petualangan Seru!
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Game petualangan 2D edukatif untuk mempelajari Bahasa Isyarat Indonesia (BISINDO)
            dengan teknologi AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <Gamepad2 size={24} />
              Coba Game
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            </button>

            <button className="group bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border-2 border-green-400">
              <GraduationCap size={24} className="text-green-400" />
              Pelajari Bahasa Isyarat
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold text-lg mb-2">Gameplay Seru</h3>
              <p className="text-gray-600">Petualangan interaktif dengan karakter menarik</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-bold text-lg mb-2">AI-Powered</h3>
              <p className="text-gray-600">Belajar dengan tutor AI Gemini yang interaktif</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Edukatif</h3>
              <p className="text-gray-600">Metode pembelajaran BISINDO yang efektif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
