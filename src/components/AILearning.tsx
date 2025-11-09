import { useState } from 'react';
import { MessageCircle, Image as ImageIcon, Send, Loader2, Sparkles } from 'lucide-react';

export default function AILearning() {
  const [chatQuestion, setChatQuestion] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [visionResponse, setVisionResponse] = useState('');
  const [visionLoading, setVisionLoading] = useState(false);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE';

  const handleChatSubmit = async () => {
    if (!chatQuestion.trim()) return;

    setChatLoading(true);
    setChatResponse('');

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Kamu adalah tutor bahasa isyarat Indonesia (BISINDO) yang ramah dan edukatif. Jawab pertanyaan berikut dengan cara yang mudah dipahami dan berikan contoh jika memungkinkan:\n\n${chatQuestion}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setChatResponse(data.candidates[0].content.parts[0].text);
      } else {
        setChatResponse('Maaf, tidak dapat memproses pertanyaan Anda. Pastikan API key sudah dikonfigurasi.');
      }
    } catch (error) {
      setChatResponse('Terjadi kesalahan saat menghubungi AI. Silakan coba lagi.');
      console.error('Chat Error:', error);
    } finally {
      setChatLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVisionSubmit = async () => {
    if (!imageFile) return;

    setVisionLoading(true);
    setVisionResponse('');

    try {
      const base64Image = imagePreview.split(',')[1];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: 'Analisis gambar ini dan jelaskan apakah ada gestur tangan bahasa isyarat. Jika ada, identifikasi huruf atau makna gestur tersebut dalam konteks Bahasa Isyarat Indonesia (BISINDO). Berikan penjelasan yang edukatif.',
                  },
                  {
                    inline_data: {
                      mime_type: imageFile.type,
                      data: base64Image,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setVisionResponse(data.candidates[0].content.parts[0].text);
      } else {
        setVisionResponse('Maaf, tidak dapat menganalisis gambar. Pastikan API key sudah dikonfigurasi.');
      }
    } catch (error) {
      setVisionResponse('Terjadi kesalahan saat menganalisis gambar. Silakan coba lagi.');
      console.error('Vision Error:', error);
    } finally {
      setVisionLoading(false);
    }
  };

  return (
    <section id="ai-learning" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-2xl">
              <Sparkles className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Belajar dengan AI
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manfaatkan kekuatan Gemini AI untuk pembelajaran bahasa isyarat yang lebih interaktif
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <MessageCircle className="text-blue-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Chat Edukasi Bahasa Isyarat</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Tanya AI tentang bahasa isyarat, kosakata BISINDO, atau tips belajar komunikasi tuli
            </p>

            <div className="space-y-4">
              <textarea
                value={chatQuestion}
                onChange={(e) => setChatQuestion(e.target.value)}
                placeholder="Contoh: Bagaimana cara mengucapkan 'terima kasih' dalam bahasa isyarat?"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-blue-400 focus:outline-none resize-none h-32 transition-colors"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleChatSubmit();
                  }
                }}
              />

              <button
                onClick={handleChatSubmit}
                disabled={chatLoading || !chatQuestion.trim()}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {chatLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Memproses...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Tanya AI
                  </>
                )}
              </button>

              {chatResponse && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200 animate-fade-in">
                  <div className="flex items-start gap-3 mb-2">
                    <Sparkles className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <h4 className="font-bold text-lg">Jawaban AI:</h4>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{chatResponse}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <ImageIcon className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Pengenalan Gestur AI</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Upload gambar gestur tangan dan biarkan AI mengidentifikasi bahasa isyarat
            </p>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-green-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  {imagePreview ? (
                    <div className="space-y-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-xl shadow-lg"
                      />
                      <p className="text-sm text-gray-500">Klik untuk ganti gambar</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <ImageIcon className="mx-auto text-gray-400" size={48} />
                      <p className="text-gray-600 font-medium">Upload Gambar Gestur</p>
                      <p className="text-sm text-gray-400">PNG, JPG hingga 10MB</p>
                    </div>
                  )}
                </label>
              </div>

              <button
                onClick={handleVisionSubmit}
                disabled={visionLoading || !imageFile}
                className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {visionLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Menganalisis...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Analisis Gambar
                  </>
                )}
              </button>

              {visionResponse && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-200 animate-fade-in">
                  <div className="flex items-start gap-3 mb-2">
                    <Sparkles className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <h4 className="font-bold text-lg">Hasil Analisis:</h4>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{visionResponse}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">💡 Catatan:</span> Fitur AI masih dalam uji coba
          </p>
        </div>
      </div>
    </section>
  );
}
