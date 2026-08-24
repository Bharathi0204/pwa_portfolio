import React from 'react';
import { Download, X, Smartphone, Zap, WifiOff, ShieldCheck, Share, PlusSquare } from 'lucide-react';

interface InstallPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onTriggerNativeInstall: () => void;
}

export const InstallPromptModal: React.FC<InstallPromptModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onTriggerNativeInstall
}) => {
  if (!isOpen) return null;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="bottom-sheet-content relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-t-2xl sm:rounded-2xl p-4 sm:p-7 shadow-2xl shadow-cyan-500/20 text-slate-100 overflow-hidden max-h-[92vh] overflow-y-auto custom-scrollbar pb-[env(safe-area-inset-bottom)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle */}
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-600 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/30 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-heading font-black text-cyan-400 text-lg sm:text-2xl">
              BE
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[9px] sm:text-[10px] font-mono font-bold tracking-wide uppercase">
                Progressive Web App
              </span>
            </div>
            <h3 className="font-heading font-bold text-base sm:text-xl text-white mt-0.5 truncate">
              Install Portfolio App
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
          Install this portfolio on your phone or desktop for instant launch, offline case studies, and standalone full-screen experience.
        </p>

        {/* PWA Benefits Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-4 sm:mb-5">
          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-start gap-2">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">Instant Load</div>
              <div className="text-[9px] sm:text-[11px] text-slate-400">Zero lag via SW</div>
            </div>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-start gap-2">
            <WifiOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">100% Offline</div>
              <div className="text-[9px] sm:text-[11px] text-slate-400">Browse anytime</div>
            </div>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-start gap-2">
            <Smartphone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">Native App View</div>
              <div className="text-[9px] sm:text-[11px] text-slate-400">Full-screen PWA</div>
            </div>
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-200">Ultra Light</div>
              <div className="text-[9px] sm:text-[11px] text-slate-400">&lt; 1 MB footprint</div>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        {deferredPrompt ? (
          <button
            onClick={onTriggerNativeInstall}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all"
          >
            <Download className="w-4 h-4 text-slate-950 shrink-0" />
            <span>Install to Home Screen Now</span>
          </button>
        ) : isIOS ? (
          <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 shrink-0" />
              How to install on iOS Safari:
            </div>
            <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside pl-0.5">
              <li className="flex flex-wrap items-center gap-1.5">
                <span>1. Tap the</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 border border-white/10 text-cyan-400 font-mono text-[10px] sm:text-[11px]">
                  <Share className="w-3 h-3" /> Share
                </span>
                <span>button below in Safari</span>
              </li>
              <li className="flex flex-wrap items-center gap-1.5">
                <span>2. Scroll down & tap</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 border border-white/10 text-emerald-400 font-mono text-[10px] sm:text-[11px]">
                  <PlusSquare className="w-3 h-3" /> Add to Home Screen
                </span>
              </li>
              <li>3. Tap <strong>Add</strong> in the top right corner.</li>
            </ol>
          </div>
        ) : (
          <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-1.5">
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 shrink-0" />
              How to install on Chrome / Android:
            </div>
            <ol className="text-xs text-slate-300 space-y-1 list-decimal list-inside pl-0.5 text-[11px] sm:text-xs">
              <li>Tap browser menu (three dots <span className="font-mono text-cyan-400 font-bold">⋮</span> in top right).</li>
              <li>Select <strong>"Install App"</strong> or <strong>"Add to Home screen"</strong>.</li>
              <li>Tap <strong>Install</strong> to add icon to your app drawer.</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};
