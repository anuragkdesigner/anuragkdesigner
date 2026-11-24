import React, { useState } from 'react';
import { content } from '../../data/redesignContent';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#1f2430] border-t border-charcoal-border">
      <div className="max-w-site mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Heading and Direct Email */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-red font-bold block">
              Start a Conversation
            </span>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream tracking-tight uppercase leading-[0.95]">
              LET'S WORK <br />
              <span className="text-accent-red">TOGETHER</span>
            </h2>

            <p className="text-base sm:text-lg text-cream-muted leading-relaxed font-sans max-w-md">
              {content.contact.availability}. Reach out directly for brand design systems, motion graphics, or video post-production.
            </p>

            {/* Email link with underline slide-in and copy trigger */}
            <div className="pt-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-cream-faint mb-2">
                DIRECT INBOX
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${content.contact.email}`}
                  className="font-display text-2xl sm:text-3xl text-cream hover:text-accent-red nav-link-hover transition-colors"
                >
                  {content.contact.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded bg-[#181c26] border border-charcoal-border hover:border-accent-red text-cream-muted hover:text-cream transition-colors text-xs font-mono flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Footprint */}
            <div className="pt-6 border-t border-charcoal-border flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider text-cream-muted">
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-red flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={content.contact.bufferbytesCompany}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-red flex items-center gap-1 transition-colors"
              >
                <span>BufferBytes Tech</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={content.contact.harisCompany}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent-red flex items-center gap-1 transition-colors"
              >
                <span>Haris&Co.</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-6 bg-[#181c26] border border-charcoal-border rounded-lg p-6 sm:p-10 shadow-2xl">
            <h3 className="font-display text-2xl text-cream mb-6 uppercase tracking-tight">
              SEND A BRIEF
            </h3>

            {submitted ? (
              <div className="p-8 text-center bg-[#1f2430] border border-accent-red/50 rounded-lg space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-accent-red flex items-center justify-center mx-auto text-cream">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl text-cream uppercase">MESSAGE DISPATCHED!</h4>
                <p className="text-xs font-mono text-cream-muted">
                  Thank you! Anurag will reply to your email within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className="w-full px-4 py-3 rounded bg-[#1f2430] border border-charcoal-border text-cream placeholder-cream-faint text-sm focus:outline-none focus:border-accent-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@company.com"
                    className="w-full px-4 py-3 rounded bg-[#1f2430] border border-charcoal-border text-cream placeholder-cream-faint text-sm focus:outline-none focus:border-accent-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                    Project Scope / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your branding, motion graphics, or video project..."
                    className="w-full px-4 py-3 rounded bg-[#1f2430] border border-charcoal-border text-cream placeholder-cream-faint text-sm focus:outline-none focus:border-accent-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded bg-accent-red hover:bg-accent-red-hover text-cream font-display text-lg tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
