import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, FileText, Download, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative ambient-glow-cyan">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Let's Build <br />
            <span className="gradient-text-cyan">Something Extraordinary</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base mt-2">
            Open to software engineering roles, full-stack development, and AI/ML systems engineering. Feel free to send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          
          {/* Left Column: Direct Links, Resume & Behavioral Pledge */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Contact Information Card */}
            <div className="glass-panel p-4 sm:p-6 space-y-3.5 sm:space-y-4 border-white/10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-semibold text-xs sm:text-sm text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Current Location</div>
                  <div className="font-semibold text-xs sm:text-sm text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Resume Access Card */}
            <div className="glass-panel p-4 sm:p-6 border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 p-0.5 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Curriculum Vitae</h4>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono">Updated 2026 Edition</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-3.5 leading-relaxed">
                Comprehensive overview of projects (AGRIMISTRO, ULAVI VOCIS), 4 internships, and full-stack skill proficiencies.
              </p>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>View / Download Resume</span>
              </a>
            </div>

            {/* Professional Behavioral Pledge Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 space-y-1.5">
              <div className="font-mono font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                Professional Rule:
              </div>
              <p className="italic text-slate-400 text-[10px] sm:text-xs">
                "I never pretend to know something I do not know. When encountering new tech or domains, I master the fundamentals rapidly through code and implementation."
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-4 sm:p-8 border-white/10">
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
                <h3 className="font-heading font-bold text-base sm:text-xl text-white">
                  Send a Direct Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-5 sm:p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400 mx-auto animate-bounce" />
                  <div className="font-heading font-bold text-base sm:text-lg text-white">Thank you for reaching out!</div>
                  <p className="text-xs text-slate-300">
                    Your message has been logged. Bharathi will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-mono text-slate-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-mono text-slate-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                    <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-slate-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Engineering / Project Collaboration"
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-slate-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Bharathi, I checked out your portfolio..."
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors custom-scrollbar"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:opacity-95 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
