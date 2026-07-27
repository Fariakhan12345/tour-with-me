"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hi there! 👋 I am your Tour With Me AI Guide. Ask me anything about traveling in Pakistan!' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Build conversation history for context
    const chatHistory = [...messages, userMsg].map(msg => ({
      role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
      content: msg.text,
    }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply,
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "Sorry, I couldn't connect. Please check your internet and try again!",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 p-4 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-700 transition-colors z-50 flex items-center justify-center group"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Ask AI Guide
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden z-50"
          >
            {/* Chat Header */}
            <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-bold text-sm">AI Travel Guide</h3>
                  <p className="text-xs text-emerald-100">Powered by Groq AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-emerald-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-gray-950">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400'}`}>
                      {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-bl-none shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-3 rounded-2xl rounded-bl-none bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                      <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about destinations..."
                  disabled={isLoading}
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white disabled:opacity-50"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
