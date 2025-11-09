import { Github, Mail, Linkedin, Instagram, MessageSquare } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nadhifxfx',
      color: 'hover:text-gray-900',
      bg: 'bg-gray-100',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:nadhiffathur@gmail.com',
      color: 'hover:text-red-500',
      bg: 'bg-red-100',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nadhifxfx',
      color: 'hover:text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/nd10.mp4',
      color: 'hover:text-sky-500',
      bg: 'bg-sky-100',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Hubungi Developer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-blue-400 to-green-400 p-1 rounded-full mb-4">
                <div className="bg-white rounded-full p-4">
                  <div className="text-5xl">👨‍💻</div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">Nadhifxfx</h3>
              <p className="text-xl text-gray-600 mb-4">Game Developer & Researcher</p>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <MessageSquare size={18} className="text-green-500" />
                <span className="text-sm font-medium text-gray-700">Available for collaboration</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
              <h4 className="font-bold text-lg mb-4 text-center">Tentang Developer</h4>
              <p className="text-gray-600 leading-relaxed text-center">
              Halo! Nama saya Nadhif Fathur Rahman. Saya antusias mencoba hal-hal baru dan berupaya belajar serta meningkatkan keterampilan saya setiap hari. Saya percaya bahwa rasa ingin tahu, ketekunan, dan kemampuan beradaptasi adalah faktor kunci dalam pertumbuhan pribadi dan profesional.   
              Saat ini, saya fokus pada pengembangan keterampilan pemrograman saya dan terbuka untuk peluang baru di mana saya dapat berkembang, berkontribusi, dan terhubung dengan orang-orang yang memiliki minat serupa.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} p-6 rounded-2xl text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group`}
                  >
                    <Icon className={`mx-auto mb-2 text-gray-600 ${social.color} transition-colors`} size={32} />
                    <p className="text-sm font-medium text-gray-700">{social.label}</p>
                  </a>
                );
              })}
            </div>

            <div className="text-center">
              <a
                href="mailto:nadhifxfx@example.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-green-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={20} />
                Kirim Pesan
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t-2 border-gray-200">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              &copy; 2025 Aksara Harapan - Game Edukasi Bahasa Isyarat
            </p>
            <p className="text-sm">
              Dikembangkan oleh Nadhif <span className="text-red-500">❤️</span> menggunakan React, TypeScript, Tailwind CSS & Gemini AI
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
