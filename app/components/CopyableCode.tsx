'use client';

import { useState } from 'react';

interface CopyableCodeProps {
  code: string;
  language?: string;
}

export default function CopyableCode({ code, language }: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <pre className="relative group">
      <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-md rounded-lg border border-emerald-600/20 transition-all duration-300 group-hover:bg-emerald-900/30 group-hover:border-emerald-600/30"></div>
      <code className="block p-4 relative text-sm overflow-auto font-mono text-emerald-300/90">
        {code}
      </code>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-lg bg-emerald-900/60 border border-emerald-600/40 text-emerald-300 opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-800/70 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H6zm3 0a1 1 0 000 2h3a1 1 0 100-2H9zm3 0a1 1 0 000 2h.01a1 1 0 100-2H12zm0 3a1 1 0 000 2h.01a1 1 0 100-2H12zm-3 0a1 1 0 000 2h3a1 1 0 100-2H9zm-3 0a1 1 0 000 2h.01a1 1 0 100-2H6z" />
          </svg>
        )}
      </button>
    </pre>
  );
}