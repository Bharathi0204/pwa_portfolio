import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, CheckCircle2 } from 'lucide-react';

export const OfflineBadge: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnectedToast, setShowReconnectedToast] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnectedToast(true);
      setTimeout(() => setShowReconnectedToast(false), 4000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showReconnectedToast) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      {!isOnline ? (
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-2xl backdrop-blur-xl">
          <WifiOff className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Offline Mode Active • Browsing cached portfolio via Service Worker</span>
        </div>
      ) : (
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-2xl backdrop-blur-xl">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Back Online • Real-time sync enabled</span>
        </div>
      )}
    </div>
  );
};
