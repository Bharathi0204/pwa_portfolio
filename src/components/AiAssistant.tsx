import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, Trash2, ShieldCheck } from 'lucide-react';
import { queryAssistant } from '../data/aiKnowledge';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "👋 Hi! I am Bharathi's portfolio AI assistant. Ask me anything about his projects (**AGRIMISTRO**, **ULAVI VOCIS**, **TaskOS**), 4 internships, Python/Angular stack, 100+ LeetCode DSA patterns, or academic milestones!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [suggestedChips, setSuggestedChips] = useState<string[]>([
    'What AI & Voice projects has Bharathi built?',
    'Tell me about the AGRIMISTRO project',
    'Which internships involved backend development?',
    'What is Bharathi\'s LeetCode DSA profile?'
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const { response, suggestedQuestions } = queryAssistant(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      if (suggestedQuestions && suggestedQuestions.length > 0) {
        setSuggestedChips(suggestedQuestions);
      }
      setIsTyping(false);
    }, 350);
  };

  const handleClear = () => {
    setMessages([
      {
        id: '1',
        sender: 'assistant',
        text: "Conversation cleared. Feel free to ask about any projects, internships, DSA patterns, or skills!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="text-cyan-300 font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line.startsWith('• ') || line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-1.5 ml-1.5 my-0.5">
            <span className="text-cyan-400 font-bold shrink-0">•</span>
            <span>{formattedParts}</span>
          </div>
        );
      }
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={idx} className="ml-1 my-1">
            {formattedParts}
          </div>
        );
      }
      return (
        <p key={idx} className={`${line.trim() === '' ? 'h-1.5' : 'my-1'}`}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="bottom-sheet-content relative w-full max-w-2xl h-[92vh] sm:h-[85vh] bg-slate-900 border border-violet-500/40 rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-violet-500/20 text-slate-100 overflow-hidden flex flex-col pb-[env(safe-area-inset-bottom)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle */}
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mt-2 sm:hidden shrink-0" />

        {/* Header */}
        <div className="p-3 sm:p-5 border-b border-white/10 bg-slate-950/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-0.5 shadow-lg shadow-violet-500/30 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-violet-300" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="font-heading font-bold text-xs sm:text-base text-white truncate">
                  Portfolio AI
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] sm:text-[10px] font-mono font-bold flex items-center gap-1 shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  Grounded
                </span>
              </div>
              <p className="text-[9px] sm:text-[11px] text-slate-400 font-mono truncate">
                Verified blueprint knowledge base
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleClear}
              className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Clear Conversation"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-3 sm:p-6 overflow-y-auto space-y-3 custom-scrollbar">
          {messages.map((msg) => {
            const isBot = msg.sender === 'assistant';
            return (
              <div
                key={msg.id}
                className={`flex gap-2 sm:gap-3 ${isBot ? 'items-start' : 'items-start flex-row-reverse'}`}
              >
                {/* Avatar */}
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg shrink-0 flex items-center justify-center ${
                  isBot ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30' : 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30'
                }`}>
                  {isBot ? <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </div>

                {/* Bubble */}
                <div className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-2.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                  isBot 
                    ? 'bg-slate-950/80 border border-white/10 text-slate-200 shadow-md' 
                    : 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-medium shadow-md shadow-cyan-600/20'
                }`}>
                  {isBot ? renderFormattedText(msg.text) : msg.text}
                  <div className={`text-[8px] sm:text-[10px] mt-1 font-mono ${isBot ? 'text-slate-500' : 'text-cyan-200'} text-right`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-slate-950/80 border border-white/10 text-[10px] sm:text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1">Synthesizing grounded response...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Quick Question Chips */}
        {suggestedChips.length > 0 && (
          <div className="px-3 py-1.5 bg-slate-950/60 border-t border-white/5 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
            <span className="text-[9px] sm:text-[11px] font-mono text-slate-400 shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
              Suggested:
            </span>
            {suggestedChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-900 hover:bg-violet-950/60 border border-white/10 hover:border-violet-400/50 text-[9px] sm:text-[11px] text-slate-300 hover:text-cyan-300 transition-all shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-2.5 sm:p-4 border-t border-white/10 bg-slate-950 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about projects, internships, algorithms, skills..."
            className="flex-1 bg-slate-900 border border-white/10 focus:border-cyan-400 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-500/20 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
