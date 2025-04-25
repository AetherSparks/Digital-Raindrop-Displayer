'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import MatrixRain from '../components/MatrixRain';

interface RaindropData {
  timestamp: number;
  column: number;
}

interface ProcessedData {
  columns: number;
  drops: RaindropData[];
}

interface SolutionData {
  maxColumns: number;
  solutions: Array<{
    timestamp: number;
    columns: number[];
  }>;
}

export default function SolutionPage() {
  const [data, setData] = useState<ProcessedData | null>(null);
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(1);
  const [maxTimestamp, setMaxTimestamp] = useState<number>(1);
  const [solution, setSolution] = useState<SolutionData | null>(null);

  useEffect(() => {
    // Load data from localStorage
    const savedData = localStorage.getItem('raindropData');
    if (savedData) {
      const parsedData: ProcessedData = JSON.parse(savedData);
      setData(parsedData);
      
      // Find max timestamp
      const max = Math.max(...parsedData.drops.map(d => d.timestamp));
      setMaxTimestamp(max);
      
      // Calculate solution
      const timestampMap = new Map<number, Set<number>>();
      
      // Group drops by timestamp
      parsedData.drops.forEach(drop => {
        if (!timestampMap.has(drop.timestamp)) {
          timestampMap.set(drop.timestamp, new Set());
        }
        timestampMap.get(drop.timestamp)?.add(drop.column);
      });
      
      // Find all timestamps with maximum unique columns
      let maxColumns = 0;
      const solutions: Array<{ timestamp: number; columns: number[] }> = [];
      
      timestampMap.forEach((columns, timestamp) => {
        if (columns.size >= maxColumns) {
          if (columns.size > maxColumns) {
            // New maximum found, clear previous solutions
            solutions.length = 0;
            maxColumns = columns.size;
          }
          // Add this solution
          solutions.push({
            timestamp,
            columns: Array.from(columns)
          });
        }
      });
      
      setSolution({
        maxColumns,
        solutions: solutions.sort((a, b) => a.timestamp - b.timestamp)
      });
    }
  }, []);

  // Get drops for current timestamp
  const getCurrentDrops = () => {
    if (!data) return [];
    return data.drops
      .filter(drop => drop.timestamp === currentTimestamp)
      .map(drop => drop.column);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-emerald-400 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-mono font-bold mb-6">Digital Rainfall Solution</h1>
        <p className="text-emerald-300 mb-8">No data available. Please generate input data first.</p>
        <Link href="/input" className="px-6 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/50 text-emerald-100 font-mono">
          Generate Input
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-emerald-400 flex flex-col">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <MatrixRain />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-black/70 backdrop-blur-sm border-b border-emerald-500/30 shadow-lg shadow-emerald-500/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
              </div>
              <span className="text-xl font-mono font-bold tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors">
                Digital Rainfall
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm font-mono">
            <Link href="/" className="hover:text-emerald-300 hover:underline underline-offset-4">Home</Link>
            <Link href="/input" className="hover:text-emerald-300 hover:underline underline-offset-4">Demo</Link>
            <Link href="https://github.com/AetherSparks/Digital-Raindrop-Displayer" target="_blank" className="hover:text-emerald-300 hover:underline underline-offset-4">GitHub</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Matrix Visualization */}
          <div className="bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Matrix Visualization
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Matrix Grid */}
              <div className="aspect-[2/1] relative border border-emerald-800/30 rounded-lg overflow-hidden bg-black/30">
                <div className="absolute inset-0 grid gap-px" style={{ 
                  gridTemplateColumns: `repeat(${data.columns}, 1fr)` 
                }}>
                  {Array.from({ length: data.columns }).map((_, i) => {
                    const hasRaindrop = getCurrentDrops().includes(i + 1);
                    return (
                      <div 
                        key={i}
                        className={`relative flex items-center justify-center ${
                          hasRaindrop ? 'bg-emerald-500/30 backdrop-blur-sm shadow-[inset_0_0_40px_rgba(16,185,129,0.3)]' : 'bg-black/20'
                        } transition-all duration-300`}
                      >
                        {/* Column Number */}
                        <span className="absolute top-2 opacity-70 text-base font-mono">
                          {i + 1}
                        </span>
                        
                        {/* Raindrop */}
                        {hasRaindrop && (
                          <div className="relative">
                            {/* Pulsing Aura Rings */}
                            <div className="absolute -inset-8 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]">
                              <div className="absolute inset-0 rounded-full bg-emerald-400/10" />
                            </div>
                            <div className="absolute -inset-6 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_500ms]">
                              <div className="absolute inset-0 rounded-full bg-emerald-400/20" />
                            </div>
                            {/* Outer glow */}
                            <div className="absolute -inset-4 blur-xl bg-emerald-500/20 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
                            {/* Inner glow */}
                            <div className="absolute -inset-2 blur-md bg-emerald-400/30 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]" />
                            {/* Raindrop circle */}
                            <div className="w-5 h-5 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-600 shadow-lg shadow-emerald-500/50 relative">
                              {/* Shine effect */}
                              <div className="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-emerald-200/70 animate-[pulse_2s_ease-in-out_infinite]" />
                            </div>
                            {/* Bottom reflection */}
                            <div className="absolute -bottom-8 w-5 h-5 bg-emerald-500/20 rounded-full blur-md transform scale-y-50 animate-[pulse_3s_ease-in-out_infinite]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Timestamp Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Timestamp: {currentTimestamp}</span>
                  <span>Max: {maxTimestamp}</span>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min={1}
                    max={maxTimestamp}
                    value={currentTimestamp}
                    onChange={(e) => setCurrentTimestamp(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-900/30 rounded-lg appearance-none cursor-pointer 
                      focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-emerald-400
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-emerald-600
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-webkit-slider-thumb]:shadow-emerald-500/30
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-webkit-slider-thumb]:hover:bg-emerald-300
                      [&::-moz-range-thumb]:appearance-none
                      [&::-moz-range-thumb]:w-4
                      [&::-moz-range-thumb]:h-4
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-emerald-400
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:border-2
                      [&::-moz-range-thumb]:border-emerald-600
                      [&::-moz-range-thumb]:shadow-lg
                      [&::-moz-range-thumb]:shadow-emerald-500/30
                      [&::-moz-range-thumb]:transition-all
                      [&::-moz-range-thumb]:hover:bg-emerald-300"
                    style={{
                      background: `linear-gradient(to right, rgb(16 185 129 / 0.5) 0%, rgb(16 185 129 / 0.5) ${((currentTimestamp - 1) / (maxTimestamp - 1)) * 100}%, rgb(16 185 129 / 0.2) ${((currentTimestamp - 1) / (maxTimestamp - 1)) * 100}%, rgb(16 185 129 / 0.2) 100%)`
                    }}
                  />
                  {/* Timestamp Markers */}
                  <div className="relative w-full h-6 mt-1">
                    {Array.from({ length: maxTimestamp }, (_, i) => (
                      <div
                        key={i}
                        className="absolute transform -translate-x-1/2"
                        style={{
                          left: `${(i / (maxTimestamp - 1)) * 100}%`,
                          top: 0
                        }}
                      >
                        <div className="w-px h-2 bg-emerald-500/30"></div>
                        <div className="text-xs text-emerald-400/70 mt-1">{i + 1}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={() => setCurrentTimestamp(prev => Math.max(1, prev - 1))}
                      className="px-2 py-1 text-sm rounded bg-emerald-900/60 hover:bg-emerald-800/70 transition-all"
                    >
                      &lt; Prev
                    </button>
                    <button 
                      onClick={() => setCurrentTimestamp(prev => Math.min(maxTimestamp, prev + 1))}
                      className="px-2 py-1 text-sm rounded bg-emerald-900/60 hover:bg-emerald-800/70 transition-all"
                    >
                      Next &gt;
                    </button>
                  </div>
                </div>
              </div>

              {/* Current State Info */}
              <div className="text-sm mt-4 p-4 rounded-lg bg-emerald-900/10 border border-emerald-800/30">
                <p>
                  <span className="text-emerald-300 font-semibold">Current State: </span>
                  {getCurrentDrops().length > 0 
                    ? (
                      <>
                        Raindrops in columns{' '}
                        <span className="text-emerald-400 font-mono">
                          {getCurrentDrops().sort((a, b) => a - b).join(', ')}
                        </span>
                      </>
                    )
                    : 'No raindrops at this timestamp'}
                </p>
              </div>
            </div>
          </div>

          {/* Solution Display */}
          {solution && (
            <div className="bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-mono font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                Solution
              </h2>
              <div className="space-y-4 text-emerald-100/80">
                <p>
                  Maximum number of simultaneous raindrops: {' '}
                  <span className="text-emerald-300 font-bold">{solution.maxColumns}</span>
                </p>
                <p className="font-bold text-emerald-300">Solutions:</p>
                <div className="space-y-2">
                  {solution.solutions.map((sol, index) => (
                    <div key={index} className="pl-4 border-l-2 border-emerald-800/30">
                      <p>
                        Timestamp {sol.timestamp}: Columns {sol.columns.sort((a, b) => a - b).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Link 
              href="/input" 
              className="px-4 py-2 rounded-md bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/70 transition-all text-sm"
            >
              Try Another Input
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 bg-black/80 backdrop-blur-sm border-t border-emerald-900/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-emerald-900/40 flex items-center justify-center border border-emerald-700/50 mr-2">
                  <img src="/favicon.ico" alt="Logo" className="w-4 h-4" />
                </div>
                <span className="text-sm font-mono font-bold tracking-wider text-emerald-400">
                  Digital Rainfall
                </span>
              </Link>
            </div>
            <div className="text-xs text-emerald-400/60 font-mono">
              &copy; {new Date().getFullYear()} Team 78. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/input" className="text-sm font-mono text-emerald-400/80 hover:text-emerald-300">
                Try Another Input
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}