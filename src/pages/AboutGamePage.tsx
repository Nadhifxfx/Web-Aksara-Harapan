import { Target, Book, Users, Zap, Home, Gamepad2, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutGamePage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <Home size={20} />
            Kembali ke Beranda
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Tentang SignAdventure
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Game petualangan 2D edukatif yang dirancang khusus untuk pembelajaran Bahasa Isyarat Indonesia (BISINDO)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                  <Target className="text-blue-500" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Tujuan Utama</h3>
                  <p className="text-gray-700 leading-relaxed">
                    SignAdventure dirancang untuk membuat pembelajaran bahasa isyarat menjadi menyenangkan dan interaktif. Game ini membantu pemain memahami dan menguasai kosakata BISINDO melalui gameplay yang engaging.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 p-4 rounded-xl flex-shrink-0">
                  <Users className="text-green-500" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Target Pemain</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Anak-anak dan remaja (8-18 tahun)</li>
                    <li>• Orang dewasa yang ingin belajar BISINDO</li>
                    <li>• Keluarga dengan anggota tuli</li>
                    <li>• Pendidik dan peneliti bahasa isyarat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="aspect-video bg-white/50 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎮</div>
                  <p className="text-gray-600">Gameplay Preview</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">Screenshot & Trailer Game</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  <Book className="text-purple-500" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Alur Cerita</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ikuti petualangan karakter utama yang harus berkomunikasi dengan berbagai NPC menggunakan bahasa isyarat. Setiap level membuka kosakata dan frasa baru untuk membuat cerita semakin menarik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-xl border-2 border-yellow-200 mb-20">
          <div className="flex items-start gap-6">
            <div className="bg-yellow-100 p-4 rounded-xl flex-shrink-0">
              <Zap className="text-yellow-600" size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Metode Rapid Application Development (RAD)</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                SignAdventure dikembangkan menggunakan metodologi RAD yang memungkinkan pengembangan cepat dengan iterasi berkelanjutan berdasarkan feedback pengguna real-time.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-lg mb-2 text-yellow-700">Fase Pengembangan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Requirements Planning</li>
                    <li>✓ User Design & Prototyping</li>
                    <li>✓ Construction & Iteration</li>
                    <li>✓ Testing & Deployment</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-bold text-lg mb-2 text-yellow-700">Keunggulan RAD</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>⚡ Pengembangan Cepat</li>
                    <li>🔄 Iterasi Berkelanjutan</li>
                    <li>👥 User-Centric Design</li>
                    <li>📈 Adaptif terhadap Perubahan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📚</div>
            <h4 className="text-2xl font-bold mb-3">Konten Edukatif</h4>
            <p className="text-gray-700">
              Materi pembelajaran dirancang berdasarkan kurikulum BISINDO yang komprehensif dan relevan.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="text-2xl font-bold mb-3">Gamifikasi</h4>
            <p className="text-gray-700">
              Sistem poin, achievement, dan leaderboard membuat pembelajaran lebih menyenangkan dan memotivasi.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🤖</div>
            <h4 className="text-2xl font-bold mb-3">AI Integration</h4>
            <p className="text-gray-700">
              Tutor AI membantu pemain dengan penjelasan real-time dan analisis gestur menggunakan Gemini API.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Siap Memulai Petualangan?</h3>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan pengguna yang sedang belajar bahasa isyarat dengan cara yang menyenangkan.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Coba Game Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
