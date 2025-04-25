"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MatrixRain from "../components/MatrixRain";

export default function InputPage() {
  const router = useRouter();
  const [columns, setColumns] = useState<number>(5);
  const [drops, setDrops] = useState<number>(5);
  const [inputData, setInputData] = useState<string>("");

  const generateRandomData = () => {
    const data = [];
    const usedPairs = new Set<string>();
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loop if unique combinations are impossible

    // Generate random drops with unique timestamp-column pairs
    while (data.length < drops && attempts < maxAttempts) {
      const timestamp = Math.floor(Math.random() * 5) + 1; // Random timestamp between 1-5
      const column = Math.floor(Math.random() * columns) + 1; // Random column between 1-N
      const pair = `${timestamp},${column}`;

      if (!usedPairs.has(pair)) {
        usedPairs.add(pair);
        data.push(`${timestamp} ${column}`);
      }
      attempts++;
    }

    // If we couldn't generate enough unique pairs, fill the remaining with duplicates
    if (data.length < drops) {
      while (data.length < drops) {
        const timestamp = Math.floor(Math.random() * 5) + 1;
        const column = Math.floor(Math.random() * columns) + 1;
        data.push(`${timestamp} ${column}`);
      }
    }

    setInputData(data.join("\n"));
  };

  const handleCreateMatrix = () => {
    try {
      const lines = inputData.trim().split("\n");
      const dropsData = [];

      // Parse each line for timestamp and column
      for (let i = 0; i < lines.length; i++) {
        const [timestamp, column] = lines[i].split(" ").map(Number);
        if (isNaN(timestamp) || isNaN(column)) {
          throw new Error("Invalid data format");
        }
        if (column > columns) {
          throw new Error(
            `Column number ${column} exceeds the maximum columns (${columns})`
          );
        }
        if (timestamp < 1) {
          throw new Error("Timestamp must be greater than 0");
        }
        dropsData.push({ timestamp, column });
      }

      // Validate number of drops matches the input
      if (dropsData.length !== drops) {
        throw new Error(
          `Expected ${drops} drops but found ${dropsData.length} entries`
        );
      }

      // Store the processed data using the values from dropdowns
      localStorage.setItem(
        "raindropData",
        JSON.stringify({
          columns: columns,
          drops: dropsData,
        })
      );

      router.push("/solution");
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Invalid input format. Please check your data."
      );
    }
  };

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
                <span className="text-emerald-400 font-mono font-bold">78</span>
              </div>
              <span className="text-xl font-mono font-bold tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors">
                Digital Rainfall
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm font-mono">
            <Link
              href="/"
              className="hover:text-emerald-300 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/input"
              className="hover:text-emerald-300 hover:underline underline-offset-4"
            >
              Demo
            </Link>
            <Link
              href="https://github.com/AetherSparks/Digital-Raindrop-Displayer"
              target="_blank"
              className="hover:text-emerald-300 hover:underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-mono font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Input Data
          </h1>

          <div className="space-y-6">
            {/* Number Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="font-mono">
                <label className="block text-emerald-300 mb-2">
                  Number of Columns
                </label>
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
                <label className="block text-emerald-300 mb-2">
                  Number of Raindrops
                </label>
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
                <label className="text-emerald-300">
                  Enter Data (or use random generator)
                </label>
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
                placeholder={`Format:
timestamp1 column1
timestamp2 column2
timestamp3 column3`}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="px-4 py-2 rounded-md bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/70 transition-all text-sm"
              >
                Back to Home
              </Link>
              <button
                onClick={handleCreateMatrix}
                className="px-6 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/50 text-emerald-100 font-mono transition-all"
              >
                Process Data
              </button>
            </div>
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
                  <span className="text-emerald-400 font-mono text-xs font-bold">
                    78
                  </span>
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
              <Link
                href="/solution"
                className="text-sm font-mono text-emerald-400/80 hover:text-emerald-300"
              >
                Try The Solution
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
