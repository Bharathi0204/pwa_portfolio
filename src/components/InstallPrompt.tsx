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
        className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-600 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-heading font-black text-cyan-400 text-2xl">
              BE
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold tracking-wide uppercase">
                Progressive Web App
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl text-white mt-1">
              Install Bharathi's Portfolio
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          Install this portfolio on your device for lightning-fast launch, full offline access to all case studies, and a seamless native mobile experience.
        </p>

        {/* PWA Benefits Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-200">Instant Load</div>
              <div className="text-[11px] text-slate-400">Zero lag via Service Worker</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
            <WifiOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-200">100% Offline</div>
              <div className="text-[11px] text-slate-400">Browse without internet</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
            <Smartphone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-200">Standalone App</div>
              <div className="text-[11px] text-slate-400">No browser address bars</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-200">Safe & Lightweight</div>
              <div className="text-[11px] text-slate-400">&lt; 1 MB storage footprint</div>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        {deferredPrompt ? (
          <button
            onClick={onTriggerNativeInstall}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all"
          >
            <Download className="w-4 h-4 text-slate-950" />
            Install to Home Screen Now
          </button>
        ) : isIOS ? (
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              How to install on iOS Safari:
            </div>
            <ol className="text-xs text-slate-300 space-y-1.5 list-decimal list-inside pl-1">
              <li className="flex items-center gap-2">
                <span>1. Tap the</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 border border-white/10 text-cyan-400 font-mono">
                  <Share className="w-3 h-3" /> Share
                </span>
                <span>button below in Safari</span>
              </li>
              <li className="flex items-center gap-2">
                <span>2. Scroll down & tap</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 border border-white/10 text-emerald-400 font-mono">
                  <PlusSquare className="w-3 h-3" /> Add to Home Screen
                </span>
              </li>
              <li>3. Confirm by tapping <strong>Add</strong> in the top right.</li>
            </ol>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
            <div className="text-xs font-bold text-cyan-300 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              How to install on Chrome / Android / Edge:
            </div>
            <ol className="text-xs text-slate-300 space-y-1.5 list-decimal list-inside pl-1">
              <li>Open browser menu (the three dots <span className="font-mono text-cyan-400 font-bold">⋮</span> in top right).</li>
              <li>Tap <strong>"Install App"</strong> or <strong>"Add to Home screen"</strong>.</li>
              <li>Click <strong>Install</strong> to add the icon to your app drawer.</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};
