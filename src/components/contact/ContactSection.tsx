import React, { useState } from 'react';
import { Copy, Check, Mail, FileText, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'anurag.designsystems@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-canvas-card border border-stroke rounded-2xl p-8 sm:p-12 md:p-16">
          <div className="max-w-3xl space-y-6">
            
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-studio-sage" />
              <span className="text-xs font-mono uppercase tracking-wider text-ink-secondary">
                Direct Inquiries • Based in Kozhikode, Kerala, India
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-tight">
              Looking for a graphic designer who blends visual craft with Computer Science logic?
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              Available for visual brand systems, After Effects motion graphics campaigns, and UI/UX product design collaborations.
            </p>

            {/* Email Copy Trigger */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-stroke bg-canvas-subtle font-mono text-sm text-ink">
                <span className="truncate">{email}</span>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded hover:bg-stroke transition-colors flex items-center gap-1.5 text-xs text-ink-secondary"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}?subject=UI/UX%20Design%20Inquiry`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-ink text-canvas hover:bg-ink-secondary transition-colors text-xs font-mono uppercase tracking-wider"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* Professional Footprint */}
            <div className="pt-10 border-t border-stroke grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-ink-secondary">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded hover:bg-canvas-subtle hover:text-ink transition-colors border border-stroke"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary" />
              </a>

              <a
                href="https://www.linkedin.com/in/anurag-k-63a9b434a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded hover:bg-canvas-subtle hover:text-ink transition-colors border border-stroke"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary" />
              </a>

              <a
                href="https://figma.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded hover:bg-canvas-subtle hover:text-ink transition-colors border border-stroke"
              >
                <span>Figma Tokens</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary" />
              </a>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Resume available upon request via email."); }}
                className="flex items-center justify-between p-2 rounded hover:bg-canvas-subtle hover:text-ink transition-colors border border-stroke"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-ink-tertiary" />
                  <span>Resume (PDF)</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-tertiary" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
