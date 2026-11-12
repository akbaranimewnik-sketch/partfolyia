import React, { useState } from 'react';
import { Mail, Send, MapPin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { TelegramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ loading: true, submitted: false, error: false });

    // Simulyatsiya qilingan yuborish
    setTimeout(() => {
      setStatus({ loading: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-sky-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Bog'lanish
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keling, Fikr Almashamiz!
          </h2>
          <p className="text-slate-400 text-base">
            Yangi loyiha, qiziqarli taklif yoki savollaringiz bo'lsa, xabar qoldiring
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl neu-flat space-y-7">
              <h3 className="text-2xl font-bold text-white">
                Aloqa Ma'lumotlari
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Men bilan bog'lanish uchun quyidagi qulay kanallardan foydalanishingiz mumkin:
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl neu-btn group"
                >
                  <div className="w-12 h-12 rounded-xl neu-inset-sm flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">
                      Elektron Pochta
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {personal.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personal.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl neu-btn group"
                >
                  <div className="w-12 h-12 rounded-xl neu-inset-sm flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <TelegramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">
                      Telegram
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                      @jaloliddin_dev
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl neu-flat-sm">
                  <div className="w-12 h-12 rounded-xl neu-inset-sm flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">
                      Joylashuv
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Neumorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-3xl neu-flat">
              <h3 className="text-2xl font-bold text-white mb-6">
                Xabar Qoldirish
              </h3>

              {status.submitted && (
                <div className="mb-6 p-4 rounded-2xl neu-inset text-emerald-300 flex items-center gap-3 text-sm animate-fadeIn">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span>Rahmat! Xabaringiz muvaffaqiyatli qabul qilindi. Tez fursatda javob qaytaraman!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ismingizni kiriting"
                      className="w-full px-5 py-3.5 rounded-2xl neu-inset text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Email manzilingiz *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@misol.com"
                      className="w-full px-5 py-3.5 rounded-2xl neu-inset text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Mavzu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Loyiha yoki taklif mavzusi"
                    className="w-full px-5 py-3.5 rounded-2xl neu-inset text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Xabaringiz *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Xabaringiz mazmunini yozing..."
                    className="w-full px-5 py-3.5 rounded-2xl neu-inset text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white neu-btn-primary flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70"
                >
                  {status.loading ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <span>Xabarni Yuborish</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
