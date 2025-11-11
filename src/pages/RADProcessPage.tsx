import { ClipboardList, Palette, Code, Rocket, Home, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RADProcessPage() {
  const stages = [
    {
      icon: ClipboardList,
      title: 'Requirements Planning',
      description: 'Mengidentifikasi dan mendokumentasikan semua kebutuhan pengguna, fitur game, dan konten pembelajaran',
      details: [
        'Riset kebutuhan komunitas tuli',
        'Identifikasi kosakata BISINDO yang akan diajarkan',
        'Definisi mekanika gameplay',
        'Planning infrastruktur teknis',
      ],
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      icon: Palette,
      title: 'User Design',
      description: 'Merancang antarmuka, visual game, dan mekanika berbasis feedback dari pengguna potensial',
      details: [
        'Prototyping UI/UX',
        'Desain karakter dan aset visual',
        'Storyboarding level-level game',
        'User testing untuk validasi konsep',
      ],
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      icon: Code,
      title: 'Construction',
      description: 'Pengembangan game dengan iterasi cepat, integrasi AI, dan continuous testing',
      details: [
        'Implementasi game engine (2D)',
        'Integrasi Gemini AI untuk tutor',
        'Development fitur-fitur game',
        'Sprint development dengan iteration',
      ],
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500',
    },
    {
      icon: Rocket,
      title: 'Cutover',
      description: 'Testing komprehensif, deployment, pelatihan pengguna, dan maintenance berkelanjutan',
      details: [
        'Quality Assurance testing menyeluruh',
        'User acceptance testing (UAT)',
        'Deployment ke platform',
        'Monitoring dan continuous improvement',
      ],
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <Home size={20} />
            Kembali ke Beranda
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Proses Pengembangan RAD
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Metodologi Rapid Application Development untuk pengembangan cepat, iteratif, dan user-centric
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold mb-6">Apa itu RAD?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rapid Application Development (RAD) adalah metodologi pengembangan yang menekankan pada:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg mb-2">Iterasi Cepat</h4>
                <p className="text-gray-700">Siklus pengembangan yang pendek memungkinkan feedback dan improvement yang cepat</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg mb-2">User-Centric</h4>
                <p className="text-gray-700">Melibatkan pengguna sejak awal dalam setiap tahap pengembangan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg mb-2">Flexible & Adaptif</h4>
                <p className="text-gray-700">Mudah beradaptasi dengan perubahan kebutuhan dan requirement baru</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg mb-2">Prototype-Driven</h4>
                <p className="text-gray-700">Fokus pada prototype dan prototype looping untuk validasi konsep</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 mb-20">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${stage.color} p-1`}>
                  <div className="bg-white rounded-3xl p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className={`${stage.bgColor} p-6 rounded-2xl flex-shrink-0`}>
                        <Icon className={stage.iconColor} size={40} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {index + 1}
                          </div>
                          <h3 className="text-3xl font-bold">{stage.title}</h3>
                        </div>

                        <p className="text-lg text-gray-700 mb-6">{stage.description}</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          {stage.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-2xl font-bold mb-3 text-blue-900">Kecepatan</h4>
            <p className="text-blue-800">
              Prototype dapat diselesaikan dalam hitungan minggu, bukan bulan. Feedback diperoleh lebih cepat.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-2xl font-bold mb-3 text-green-900">Ketepatan</h4>
            <p className="text-green-800">
              User involvement memastikan produk sesuai dengan kebutuhan sebenarnya, bukan asumsi.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
            <div className="text-4xl mb-4">🔄</div>
            <h4 className="text-2xl font-bold mb-3 text-purple-900">Fleksibilitas</h4>
            <p className="text-purple-800">
              Mudah menyesuaikan dengan perubahan teknologi, kebutuhan, atau insights baru dari pengguna.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-white">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">RAD vs Traditional Development</h3>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-lg min-w-fit">RAD:</div>
                  <div>Iteratif, user-involved, cepat adaptasi, prototype-driven</div>
                </div>
                <div className="h-px bg-white/30"></div>
                <div className="flex gap-4">
                  <div className="font-bold text-lg min-w-fit">Tradisional:</div>
                  <div>Waterfall, less flexible, longer cycles, specification-driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
