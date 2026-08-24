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
    // Simulate instant message dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      
      {/* Background glow */}
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch & Collaborate</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Let's Build <br />
            <span className="gradient-text-cyan">Something Extraordinary</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Open to software engineering roles, full-stack development, and AI/ML systems engineering. Feel free to send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Links, Resume & Behavioral Pledge */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Cards */}
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-semibold text-sm text-white hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Current Location</div>
                  <div className="font-semibold text-sm text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-950 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Resume Access Card */}
            <div className="glass-panel p-6 border-cyan-500/30">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 p-0.5">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Curriculum Vitae</h4>
                    <div className="text-xs text-slate-400 font-mono">Updated 2026 Edition</div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Comprehensive overview of projects (AGRIMISTRO, ULAVI VOCIS), 4 internships, and full-stack skill proficiencies.
              </p>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>View / Download Resume</span>
              </a>
            </div>

            {/* Professional Behavioral Pledge Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 space-y-1.5">
              <div className="font-mono font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Professional Integrity Rule:
              </div>
              <p className="italic text-slate-400">
                "I never pretend to know something I do not know. When encountering new tech or domains, I master the fundamentals rapidly through code and implementation."
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="font-heading font-bold text-xl text-white">
                  Send a Direct Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                  <div className="font-heading font-bold text-lg text-white">Thank you for reaching out!</div>
                  <p className="text-xs text-slate-300">
                    Your message has been logged. Bharathi will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Engineering Opportunity / Collaboration"
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Bharathi, I checked out your portfolio and would like to discuss..."
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors custom-scrollbar"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 hover:opacity-95 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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
