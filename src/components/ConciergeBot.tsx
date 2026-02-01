'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'bot' | 'user';
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  { role: 'bot', content: 'Willkommen bei Freeways. Ich bin Ihr Premium-Concierge. Wie kann ich Ihnen heute bei Ihren Logistik-Anfragen in NRW behilflich sein?' }
];

export const ConciergeBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botContent = "Vielen Dank für Ihre Nachricht. Ich leite Ihre Anfrage für NRW-Logistik sofort an den zuständigen Experten weiter.";
      
      const lowerInput = inputValue.toLowerCase();
      if (lowerInput.includes('preis')) {
        botContent = "Für ein individuelles Angebot benötigen wir Details zum Volumen. Möchten Sie unseren Rechner nutzen?";
      }

      setMessages(prev => [...prev, { role: 'bot', content: botContent }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-24 right-0 w-[380px] h-[600px] glass-dark rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-white/10"
          >
            {/* AI Pulse Header */}
            <div className="p-8 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight">Freeways Agent</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">System Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                title="Menü schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Premium Chat Interface */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i}
                  className={cn(
                    "flex flex-col gap-2 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "p-5 rounded-[1.5rem] text-sm leading-relaxed",
                    msg.role === 'bot' 
                      ? "bg-white/5 text-white/90 border border-white/5" 
                      : "bg-primary text-white font-medium shadow-lg"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 p-5 bg-white/5 rounded-2xl w-20 items-center justify-center">
                  <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-primary rounded-full animate-bounce delay-100" />
                  <span className="w-1 h-1 bg-primary rounded-full animate-bounce delay-200" />
                </div>
              )}
            </div>

            {/* Tactile Control Unit */}
            <div className="p-8 pt-4">
              <div className="relative group">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Frag mich etwas..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-7 pr-16 text-white text-sm focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
                  title="Nachricht senden"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 shadow-premium",
          isOpen ? "bg-white text-primary rotate-90" : "bg-primary text-white hover:shadow-[0_20px_40px_rgba(5,150,105,0.4)]"
        )}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-4 border-white flex items-center justify-center text-[10px] font-black text-white">1</span>
        )}
      </motion.button>
    </div>
  );
};
