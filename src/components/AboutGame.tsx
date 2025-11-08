import { Target, Book, Users, Zap } from 'lucide-react';

export default function AboutGame() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Tentang Game
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Game edukatif inovatif yang menggabungkan pembelajaran bahasa isyarat dengan petualangan seru
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Target className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tujuan Game</h3>
                <p className="text-gray-600">
                  Membantu pemain mempelajari Bahasa Isyarat Indonesia (BISINDO) melalui gameplay yang menyenangkan
                  dan interaktif, memudahkan komunikasi dengan komunitas tuli.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Book className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Alur Cerita</h3>
                <p className="text-gray-600">
                  Ikuti petualangan karakter utama yang harus menyelesaikan misi dengan berkomunikasi
                  menggunakan bahasa isyarat. Setiap level mengajarkan kosakata dan frasa baru.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Users className="text-purple-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Target Pemain</h3>
                <p className="text-gray-600">
                  Dirancang untuk semua usia yang ingin belajar bahasa isyarat, dari pemula hingga menengah.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-xl">
            <div className="aspect-video bg-white/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <p className="text-gray-600 font-medium">Game Screenshot / Trailer Placeholder</p>
                <div className="mt-4 text-sm text-gray-500">1920 x 1080</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-xl flex-shrink-0">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Metode Rapid Application Development (RAD)</h3>
              <p className="text-gray-700 leading-relaxed">
                Game ini dikembangkan menggunakan metodologi <span className="font-semibold">Rapid Application Development (RAD)</span>,
                yang memungkinkan pengembangan cepat dengan iterasi berkelanjutan. Melalui pendekatan RAD, kami dapat:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Mengumpulkan feedback pengguna sejak tahap awal pengembangan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Melakukan prototyping cepat untuk menguji konsep gameplay
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Iterasi fitur berdasarkan masukan dari komunitas tuli dan pendidik
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Mempercepat waktu rilis dengan fokus pada fitur esensial
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
