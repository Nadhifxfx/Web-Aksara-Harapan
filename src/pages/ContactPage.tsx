import { Github, Mail, Linkedin, Twitter, MessageSquare, Phone, MapPin, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nadhifxfx',
      color: 'hover:text-gray-900',
      bg: 'bg-gray-100',
      bgHover: 'hover:bg-gray-200',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:nadhifxfx@example.com',
      color: 'hover:text-red-500',
      bg: 'bg-red-100',
      bgHover: 'hover:bg-red-200',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/nadhifxfx',
      color: 'hover:text-blue-600',
      bg: 'bg-blue-100',
      bgHover: 'hover:bg-blue-200',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/nadhifxfx',
      color: 'hover:text-sky-500',
      bg: 'bg-sky-100',
      bgHover: 'hover:bg-sky-200',
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-100 to-green-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <Home size={20} />
            Kembali ke Beranda
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Hubungi Developer
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Kirim Pesan</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subjek pesan"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-blue-400 to-green-400 p-1 rounded-full mb-4">
                  <div className="bg-white rounded-full p-4">
                    <div className="text-5xl">👨‍💻</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Nadhifxfx</h3>
                <p className="text-gray-600">Game Developer & Researcher</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={20} className="text-blue-500" />
                  <span className="text-sm">nadhifxfx@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={20} className="text-green-500" />
                  <span className="text-sm">+62 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-red-500" />
                  <span className="text-sm">Indonesia</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 mb-6">
                <h4 className="font-bold text-sm mb-2 text-center">Availability</h4>
                <div className="flex items-center justify-center gap-2 bg-green-100 px-3 py-2 rounded-lg">
                  <MessageSquare size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700">Available for collaboration</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4">
                <h4 className="font-bold text-sm mb-3 text-center">Tentang Developer</h4>
                <p className="text-xs text-gray-700 leading-relaxed text-center">
                  Passionate game developer dengan fokus pada educational games dan AI technology. Berpengalaman dalam game development 2D dan implementasi metodologi RAD.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Terhubung Dengan Saya</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} ${social.bgHover} p-6 rounded-2xl text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300`}
                  >
                    <Icon className={`mx-auto mb-2 text-gray-600 ${social.color} transition-colors`} size={32} />
                    <p className="text-sm font-medium text-gray-700">{social.label}</p>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Waktu Respons</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-400">
                <p className="font-semibold text-blue-900 mb-1">Email</p>
                <p className="text-sm text-blue-800">Biasanya dibalas dalam 24-48 jam</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 border-l-4 border-green-400">
                <p className="font-semibold text-green-900 mb-1">Chat / Social Media</p>
                <p className="text-sm text-green-800">Biasanya dibalas dalam beberapa jam</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 border-l-4 border-purple-400">
                <p className="font-semibold text-purple-900 mb-1">Kolaborasi / Project</p>
                <p className="text-sm text-purple-800">Bisa didiskusikan secara detail</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Tertarik untuk Berkolaborasi?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Saya terbuka untuk project collaboration, research partnership, atau consulting mengenai educational games dan AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nadhifxfx@example.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Diskusi Project
            </a>
            <a
              href="#"
              className="bg-white/20 border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-all duration-300"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-50 py-12 px-4 mt-20 border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="mb-2">
            &copy; 2025 SignAdventure - Game Edukasi Bahasa Isyarat. All rights reserved.
          </p>
          <p className="text-sm">
            Dikembangkan dengan dedikasi menggunakan React, TypeScript, Tailwind CSS & Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
}
