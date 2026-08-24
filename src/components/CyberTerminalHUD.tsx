import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Play, 
  Bot, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { AudioEngine } from '../utils/AudioEngine';
import { Tilt3DCard } from './Tilt3DCard';

interface CyberTerminalHUDProps {
  onOpenAssistant: () => void;
}

export const CyberTerminalHUD: React.FC<CyberTerminalHUDProps> = ({ onOpenAssistant }) => {
  const [terminalTab, setTerminalTab] = useState<'profile' | 'stack' | 'status' | 'cli'>('profile');
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [isMuted, setIsMuted] = useState(AudioEngine.getIsMuted());
  
  // CLI Command Interpreter State
  const [commandInput, setCommandInput] = useState('');
  const [commandLogs, setCommandLogs] = useState<Array<{ text: string; isOutput?: boolean; color?: string }>>([
    { text: 'BharatOS Dev Environment v2.4 initialized.', color: 'text-slate-400' },
    { text: 'Type "help" or click suggestions below to execute commands.', color: 'text-cyan-300' }
  ]);
  const cliScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cliScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandLogs]);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('neofetch --profile bharathi');
    AudioEngine.playSuccessChime();
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleToggleAudio = () => {
    const muted = AudioEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) AudioEngine.playSuccessChime();
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    AudioEngine.playKeyClick();
    const newLogs = [...commandLogs, { text: `root@srm-ist:~$ ${cmd}`, color: 'text-cyan-400 font-bold' }];

    switch (trimmed) {
      case 'help':
      case 'commands':
        newLogs.push(
          { text: 'Available commands:', isOutput: true, color: 'text-white' },
          { text: '  neofetch      - Display Bharathi E developer specs', isOutput: true, color: 'text-cyan-300' },
          { text: '  agrimistro    - 1st Prize IoT Agricultural Telemetry', isOutput: true, color: 'text-emerald-300' },
          { text: '  voice         - ULAVI VOCIS Multilingual Voice AI Concierge', isOutput: true, color: 'text-violet-300' },
          { text: '  dsa           - 100 LeetCode patterns & 88.6% accuracy stats', isOutput: true, color: 'text-amber-300' },
          { text: '  internships   - View 4 industry software engineering stints', isOutput: true, color: 'text-sky-300' },
          { text: '  clear         - Clear terminal buffer', isOutput: true, color: 'text-slate-400' }
        );
        break;

      case 'neofetch':
        newLogs.push(
          { text: '╭──────── Bharathi E (MCA @ SRM IST) ────────╮', isOutput: true, color: 'text-cyan-400 font-bold' },
          { text: '│ CGPA: 9.90 (Rank 1 / Gold Medal Contender)│', isOutput: true, color: 'text-emerald-300' },
          { text: '│ Core: Python (Expert), FastAPI, Django     │', isOutput: true, color: 'text-cyan-300' },
          { text: '│ Frontend: React, Angular, TypeScript       │', isOutput: true, color: 'text-slate-200' },
          { text: '│ Voice AI: Whisper STT, OpenAI Realtime     │', isOutput: true, color: 'text-violet-300' },
          { text: '│ IoT: ESP32 + 5 Telemetry Sensors (Aeroponic)│', isOutput: true, color: 'text-amber-300' },
          { text: '╰────────────────────────────────────────────╯', isOutput: true, color: 'text-cyan-400 font-bold' }
        );
        break;

      case 'agrimistro':
        newLogs.push(
          { text: '🏆 AGRIMISTRO: SRM Project Day 2026 1st Prize (₹50k Cash Award)', isOutput: true, color: 'text-amber-400 font-bold' },
          { text: '• ESP32 Hardware + FastAPI + Supabase Telemetry pipeline', isOutput: true, color: 'text-slate-300' },
          { text: '• Real-time agronomy advisory in 22 Indian languages', isOutput: true, color: 'text-slate-300' },
          { text: '• +45% Water Conservation telemetry efficiency', isOutput: true, color: 'text-emerald-400' }
        );
        break;

      case 'voice':
        newLogs.push(
          { text: '🎙️ ULAVI VOCIS: Real-Time Multilingual Voice AI Concierge', isOutput: true, color: 'text-violet-300 font-bold' },
          { text: '• Whisper STT + OpenAI API + Web Audio WebSocket streaming', isOutput: true, color: 'text-slate-300' },
          { text: '• < 800ms end-to-end voice latency', isOutput: true, color: 'text-cyan-300' }
        );
        break;

      case 'dsa':
        newLogs.push(
          { text: '⚡ DSA Algorithmic Mastery Milestone: 100 Solved', isOutput: true, color: 'text-cyan-300 font-bold' },
          { text: '• Acceptance Rate: 88.6% (Top tier consistency)', isOutput: true, color: 'text-emerald-400' },
          { text: '• 40 Easy, 50 Medium, 10 Hard algorithmic patterns mastered', isOutput: true, color: 'text-slate-300' }
        );
        break;

      case 'internships':
        newLogs.push(
          { text: '💼 4 Industry Internships Completed / Active:', isOutput: true, color: 'text-sky-300 font-bold' },
          { text: '1. Savyasasy Software Solutions — Full Stack Intern (Current)', isOutput: true, color: 'text-slate-200' },
          { text: '2. Ulavi Tech Solutions — Voice AI Engineering Intern', isOutput: true, color: 'text-slate-200' },
          { text: '3. Infosys Springboard — Python Full Stack & RBAC Intern', isOutput: true, color: 'text-slate-200' },
          { text: '4. DLK Career Solutions — Python & Django Foundations Intern', isOutput: true, color: 'text-slate-200' }
        );
        break;

      case 'clear':
        setCommandLogs([]);
        setCommandInput('');
        return;

      default:
        newLogs.push({
          text: `bash: command not found: "${cmd}". Type "help" for valid commands.`,
          isOutput: true,
          color: 'text-rose-400'
        });
        break;
    }

    setCommandLogs(newLogs);
    setCommandInput('');
    AudioEngine.playSuccessChime();
  };

  return (
    <Tilt3DCard maxTilt={6} className="w-full">
      <div className="terminal-window shadow-2xl shadow-cyan-500/15 border border-cyan-500/40 bg-[#090d16]">
        
        {/* Terminal Title Bar */}
        <div className="terminal-header flex items-center justify-between">
          <div className="terminal-dots">
            <div className="dot dot-red" />
            <div className="dot dot-yellow" />
            <div className="dot dot-green" />
          </div>
          
          <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono flex items-center gap-1.5 truncate px-1">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">bharathi@dev-env: ~/portfolio</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors"
              title={isMuted ? 'Unmute Mechanical Sound' : 'Mute Mechanical Sound'}
            >
              {isMuted ? <VolumeX className="w-3 h-3 text-slate-500" /> : <Volume2 className="w-3 h-3 text-cyan-400 animate-pulse" />}
            </button>
            <span className="text-[9px] text-emerald-400 font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
              ONLINE
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-slate-950/90 text-[10px] font-mono">
          <button
            onClick={() => { setTerminalTab('profile'); AudioEngine.playKeyClick(); }}
            className={`flex-1 py-1.5 text-center font-bold transition-colors ${
              terminalTab === 'profile' ? 'text-cyan-300 border-b border-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => { setTerminalTab('stack'); AudioEngine.playKeyClick(); }}
            className={`flex-1 py-1.5 text-center font-bold transition-colors ${
              terminalTab === 'stack' ? 'text-cyan-300 border-b border-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Stack
          </button>
          <button
            onClick={() => { setTerminalTab('status'); AudioEngine.playKeyClick(); }}
            className={`flex-1 py-1.5 text-center font-bold transition-colors ${
              terminalTab === 'status' ? 'text-cyan-300 border-b border-cyan-400 bg-cyan-950/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            PWA
          </button>
          <button
            onClick={() => { setTerminalTab('cli'); AudioEngine.playKeyClick(); }}
            className={`flex-1 py-1.5 text-center font-bold transition-colors flex items-center justify-center gap-1 ${
              terminalTab === 'cli' ? 'text-violet-300 border-b border-violet-400 bg-violet-950/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-2.5 h-2.5 text-violet-400" />
            <span>Interactive CLI</span>
          </button>
        </div>

        {/* Terminal Content Body */}
        <div className="p-3.5 sm:p-5 text-xs font-mono space-y-2.5 bg-[#080c14] min-h-[220px]">
          
          {terminalTab !== 'cli' ? (
            <>
              <div className="flex items-center justify-between gap-1 text-[11px] sm:text-xs">
                <div className="truncate">
                  <span className="text-cyan-400">root@srm-ist:~$</span>{' '}
                  <span className="text-white font-semibold">neofetch --profile bharathi</span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy Command"
                >
                  {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Tab: Profile Overview */}
              {terminalTab === 'profile' && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/85 border border-white/10 space-y-1.5 text-[10px] sm:text-[11px] animate-fadeIn">
                  <div className="flex justify-between items-center gap-1 border-b border-white/5 pb-1">
                    <span className="text-slate-400">Profile:</span>
                    <span className="text-cyan-300 font-bold">Bharathi E (MCA @ SRM IST)</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">Current Role:</span>
                    <span className="text-slate-200">Full Stack Intern @ Savyasasy</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">Primary Core:</span>
                    <span className="text-emerald-400 font-bold">Python (Expert)</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">Academic Score:</span>
                    <span className="text-amber-300 font-bold">9.90 CGPA (SRM IST)</span>
                  </div>
                </div>
              )}

              {/* Tab: Stack Specs */}
              {terminalTab === 'stack' && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/85 border border-white/10 space-y-1.5 text-[10px] sm:text-[11px] animate-fadeIn">
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">Backend API:</span>
                    <span className="text-slate-200">FastAPI, Django, Express</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">Frontend UI:</span>
                    <span className="text-slate-200">React, Angular, TypeScript</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">AI / Voice:</span>
                    <span className="text-violet-300 font-semibold">OpenAI, Whisper STT, ML</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">IoT Hardware:</span>
                    <span className="text-amber-300 font-semibold">ESP32 + 5 Sensor Rig</span>
                  </div>
                </div>
              )}

              {/* Tab: Status & DSA */}
              {terminalTab === 'status' && (
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-950/85 border border-white/10 space-y-1.5 text-[10px] sm:text-[11px] animate-fadeIn">
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">DSA Milestone:</span>
                    <span className="text-cyan-400 font-bold">100 Solved (88.6% Acc)</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">Service Worker:</span>
                    <span className="text-emerald-400 font-bold">ACTIVE (Offline Ready)</span>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-slate-400">PWA Footprint:</span>
                    <span className="text-sky-300 font-bold">&lt; 1 MB Storage</span>
                  </div>
                </div>
              )}

              <div className="pt-1">
                <button
                  onClick={onOpenAssistant}
                  className="w-full py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 text-violet-300 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm group"
                >
                  <Bot className="w-4 h-4 text-violet-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Launch Grounded Assistant Terminal</span>
                </button>
              </div>
            </>
          ) : (
            /* Interactive Executable CLI */
            <div className="space-y-2 animate-fadeIn flex flex-col justify-between h-full">
              <div className="max-h-[140px] overflow-y-auto space-y-1 text-[10px] sm:text-[11px] custom-scrollbar bg-slate-950/80 p-2.5 rounded-lg border border-white/5">
                {commandLogs.map((log, idx) => (
                  <div key={idx} className={`${log.color || 'text-slate-300'} font-mono leading-relaxed`}>
                    {log.text}
                  </div>
                ))}
                <div ref={cliScrollRef} />
              </div>

              {/* Command Quick Chips */}
              <div className="flex items-center gap-1 overflow-x-auto pb-0.5 no-scrollbar text-[9px]">
                <span className="text-slate-500 font-mono">Quick:</span>
                {['help', 'neofetch', 'agrimistro', 'voice', 'dsa', 'internships', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-950/60 border border-white/10 text-cyan-300 hover:border-cyan-500/40 font-mono shrink-0 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Input prompt */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-cyan-400 font-bold text-xs">$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && executeCommand(commandInput)}
                  placeholder="type command (e.g. neofetch, agrimistro, dsa)..."
                  className="flex-1 bg-slate-950 border border-white/10 focus:border-cyan-400 rounded-lg px-2.5 py-1.5 text-[11px] text-white placeholder-slate-600 focus:outline-none transition-colors font-mono"
                />
                <button
                  onClick={() => executeCommand(commandInput)}
                  className="px-2.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[10px] hover:bg-cyan-400 transition-colors"
                >
                  Run
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </Tilt3DCard>
  );
};
