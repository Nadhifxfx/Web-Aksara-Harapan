import { Home, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    { title: 'Concept Art - Main Character', category: 'Artwork', emoji: '🎨', description: 'Desain karakter utama game dengan eksplorasi gaya visual' },
    { title: 'Character Design Sheet', category: 'Character', emoji: '👤', description: 'Detail karakter dari berbagai sudut pandang' },
    { title: 'Gameplay Screenshot Level 1', category: 'Screenshot', emoji: '🎮', description: 'Screenshot dari level pertama game' },
    { title: 'Level Design Map', category: 'Design', emoji: '🗺️', description: 'Layout dan design dari level-level game' },
    { title: 'Sign Language Reference Cards', category: 'Educational', emoji: '📚', description: 'Kartu referensi untuk gestur BISINDO' },
    { title: 'UI/UX Interface Design', category: 'Interface', emoji: '💻', description: 'Design antarmuka pengguna game' },
    { title: 'Development Sprint Board', category: 'Behind the Scenes', emoji: '⚙️', description: 'Dokumentasi proses development' },
    { title: 'Team Collaboration Session', category: 'Team', emoji: '👥', description: 'Tim sedang melakukan brainstorming' },
    { title: 'Animation Keyframes', category: 'Artwork', emoji: '🎬', description: 'Keyframe animasi untuk gesture recognition' },
    { title: 'Database Schema', category: 'Technical', emoji: '💾', description: 'Struktur database game' },
    { title: 'Gameplay Demo Video', category: 'Video', emoji: '🎥', description: 'Video demonstrasi gameplay' },
    { title: 'User Testing Session', category: 'Research', emoji: '🔬', description: 'Sesi testing dengan user pengguna' },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4">
            <Home size={20} />
            Kembali ke Beranda
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Galeri & Dokumentasi
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Jelajahi proses pengembangan, konsep seni, dan dokumentasi dari SignAdventure
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-8 flex flex-wrap gap-2">
          {['Semua', 'Artwork', 'Character', 'Screenshot', 'Design', 'Educational', 'Interface', 'Behind the Scenes', 'Team'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium hover:shadow-lg transition-shadow"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item.emoji)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 text-center group-hover:scale-110 transition-transform">
                  <div className="text-6xl mb-2">{item.emoji}</div>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-bold mt-2 text-gray-800 text-sm group-hover:text-purple-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-1 hidden group-hover:block">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-8 text-center">Kategori Dokumentasi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-bold mb-2">Artwork & Design</h3>
              <p className="text-gray-700">
                Concept art, character design, level design, dan semua aset visual yang digunakan dalam pengembangan game.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">Educational Content</h3>
              <p className="text-gray-700">
                Materi pembelajaran BISINDO, kartu referensi, dan dokumentasi konten edukatif yang diintegrasikan dalam game.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-2">Technical Documentation</h3>
              <p className="text-gray-700">
                Skema database, arsitektur sistem, dokumentasi API, dan spesifikasi teknis dari implementasi.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl font-bold mb-2">Research & Testing</h3>
              <p className="text-gray-700">
                Dokumentasi user testing, feedback dari pengguna, analisis data, dan insights dari research phase.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold mb-6">Download Media</h2>
          <p className="text-gray-700 mb-8">
            Anda dapat mengunduh berbagai aset dan dokumentasi dari SignAdventure untuk keperluan presentasi atau penelitian.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Semua Artwork
            </button>
            <button className="flex items-center justify-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Design Files
            </button>
            <button className="flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Documentation
            </button>
            <button className="flex items-center justify-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Technical Specs
            </button>
            <button className="flex items-center justify-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-700 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Research Data
            </button>
            <button className="flex items-center justify-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              All Media (ZIP)
            </button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="text-8xl text-center mb-4">{selectedImage}</div>
            <p className="text-center text-gray-600 mb-6">Full Size Image Preview</p>
            <div className="flex gap-4">
              <button onClick={() => setSelectedImage(null)} className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded-lg font-medium">
                Tutup
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                <Download size={20} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
