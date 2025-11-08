import { Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    { title: 'Concept Art', category: 'Artwork', emoji: '🎨' },
    { title: 'Character Design', category: 'Character', emoji: '👤' },
    { title: 'Gameplay Screenshot', category: 'Screenshot', emoji: '🎮' },
    { title: 'Level Design', category: 'Design', emoji: '🗺️' },
    { title: 'Sign Language Cards', category: 'Educational', emoji: '📚' },
    { title: 'UI/UX Mockup', category: 'Interface', emoji: '💻' },
    { title: 'Development Process', category: 'Behind the Scenes', emoji: '⚙️' },
    { title: 'Team Collaboration', category: 'Team', emoji: '👥' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Galeri & Dokumentasi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lihat proses pengembangan dan visual dari game kami
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-2">{item.emoji}</div>
                  <ImageIcon className="mx-auto text-gray-400" size={24} />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-bold mt-2 text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Lihat Semua Galeri
          </button>
        </div>
      </div>
    </section>
  );
}
