"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MatrixRain from '../components/MatrixRain';

export default function InputPage() {
  const router = useRouter();
  const [columns, setColumns] = useState<number>(5);
  const [drops, setDrops] = useState<number>(6);
  const [inputData, setInputData] = useState<string>("");

  const generateRandomData = () => {
    const data = [];
    data.push(`${columns} ${drops}`);
    
    // Generate random drops
    for (let i = 0; i < drops; i++) {
      const timestamp = Math.floor(Math.random() * 5) + 1; // Random timestamp between 1-5
      const column = Math.floor(Math.random() * columns) + 1; // Random column between 1-N
      data.push(`${timestamp} ${column}`);
    }
    
    setInputData(data.join('\n'));
  };

  const handleCreateMatrix = () => {
    // TODO: Validate and process data before redirecting
    router.push('/solution');
  };

  return (
    <div className="relative min-h-screen bg-black text-emerald-400 flex flex-col">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <MatrixRain />
      </div>

      <main className="flex-grow z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-mono font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Input Data</h1>
          
          <div className="space-y-6">
            {/* Number Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-mono">
                <label className="block text-emerald-300 mb-2">Number of Columns</label>
                <input 
                  type="number"
                  min="1"
                  value={columns}
                  onChange={(e) => {
                    const value = e.target.value ? parseInt(e.target.value) : 1;
                    setColumns(Math.max(1, value));
                  }}
                  className="w-full bg-black/40 border border-emerald-800/30 rounded-lg p-2 text-emerald-300 font-mono focus:border-emerald-600/50 focus:outline-none"
                />
              </div>
              <div className="font-mono">
                <label className="block text-emerald-300 mb-2">Number of Raindrops</label>
                <input 
                  type="number"
                  min="1"
                  value={drops}
                  onChange={(e) => {
                    const value = e.target.value ? parseInt(e.target.value) : 1;
                    setDrops(Math.max(1, value));
                  }}
                  className="w-full bg-black/40 border border-emerald-800/30 rounded-lg p-2 text-emerald-300 font-mono focus:border-emerald-600/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Data Input */}
            <div className="font-mono">
              <div className="flex justify-between items-center mb-2">
                <label className="text-emerald-300">Enter Data (or use random generator)</label>
                <button 
                  onClick={generateRandomData}
                  className="px-4 py-1 text-sm rounded-md bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/70 transition-all"
                >
                  Generate Random Data
                </button>
              </div>
              <textarea 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="w-full h-48 bg-black/40 border border-emerald-800/30 rounded-lg p-4 text-emerald-300 font-mono focus:border-emerald-600/50 focus:outline-none"
                placeholder="Format:&#13;&#10;N M&#13;&#10;timestamp1 column1&#13;&#10;timestamp2 column2&#13;&#10;..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <Link href="/" className="px-4 py-2 rounded-md bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/70 transition-all text-sm">
                Back to Home
              </Link>
              <button 
                onClick={handleCreateMatrix}
                className="px-6 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/50 text-emerald-100 font-mono transition-all"
              >
                Create Matrix
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}