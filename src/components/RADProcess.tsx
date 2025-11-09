import { ClipboardList, Palette, Code, Rocket } from 'lucide-react';

export default function RADProcess() {
  const stages = [
    {
      icon: ClipboardList,
      title: 'Requirements Planning',
      description: 'Identifikasi kebutuhan pengguna, fitur game, dan konten pembelajaran BISINDO',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      icon: Palette,
      title: 'User Design',
      description: 'Prototyping UI/UX, desain karakter, dan mekanisme gameplay dengan feedback pengguna',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    {
      icon: Code,
      title: 'Construction',
      description: 'Pengembangan game dengan iterasi cepat, integrasi AI, dan testing berkelanjutan',
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500',
    },
    {
      icon: Rocket,
      title: 'Cutover',
      description: 'Testing akhir, deployment, pelatihan pengguna, dan maintenance berkelanjutan',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <section id="rad-process" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Proses Pengembangan 
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Metodologi Rapid Application Development untuk pengembangan cepat dan iteratif
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 via-green-400 to-orange-400 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 h-full relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className={`${stage.bgColor} p-4 rounded-2xl mb-4`}>
                        <Icon className={stage.iconColor} size={32} />
                      </div>

                      <div className="w-12 h-12 bg-gradient-to-r rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg from-blue-400 to-purple-400">
                        {index + 1}
                      </div>

                      <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                    </div>
                  </div>

                  {index < stages.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4 text-center">Keunggulan Game ini</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">Pengembangan Cepat</h4>
              <p className="text-gray-600 text-sm">Prototype dapat diselesaikan dalam waktu singkat</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔄</div>
              <h4 className="font-bold mb-2">Iterasi Berkelanjutan</h4>
              <p className="text-gray-600 text-sm">Feedback pengguna diimplementasikan secara langsung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <h4 className="font-bold mb-2">User-Centric</h4>
              <p className="text-gray-600 text-sm">Melibatkan pengguna aktif dalam setiap tahap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
