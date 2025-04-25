"use client";

import { useState } from "react";
import MatrixRain from "../components/MatrixRain";
import Link from "next/link";

type ViewType = "Steps" | "PseudoCode" | "Python" | "Java" | "C++";

export default function CodePage() {
  const [view, setView] = useState<ViewType>("Steps");

  const codeViews = {
    Steps: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Steps
        </h2>
        <ol className="list-decimal list-inside text-emerald-300">
          <li>Group raindrops by their timestamps using a HashMap.</li>
          <li>
            Iterate through the HashMap to find the maximum number of unique
            columns.
          </li>
          <li>Clear previous solutions if a new maximum is found.</li>
          <li>Store timestamps and columns for the maximum unique columns.</li>
        </ol>
      </div>
    ),
    PseudoCode: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          PseudoCode
        </h2>
        <pre className="bg-emerald-900/20 p-4 rounded-lg text-sm overflow-auto">
          {`HashMap timestampMap
For each drop in parsedData.drops:
  If timestampMap does not contain drop.timestamp:
    Initialize an empty Set for drop.timestamp
  Add drop.column to timestampMap[drop.timestamp]

maxColumns = 0
solutions = []
For each timestamp, columns in timestampMap:
  If size(columns) >= maxColumns:
    If size(columns) > maxColumns:
      Clear solutions
      maxColumns = size(columns)
    Add {timestamp, columns} to solutions`}
        </pre>
      </div>
    ),
    Python: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Python
        </h2>
        <pre className="bg-emerald-900/20 p-4 rounded-lg text-sm overflow-auto">
          {`timestamp_map = {}
for drop in parsed_data['drops']:
    if drop['timestamp'] not in timestamp_map:
        timestamp_map[drop['timestamp']] = set()
    timestamp_map[drop['timestamp']].add(drop['column'])

max_columns = 0
solutions = []
for timestamp, columns in timestamp_map.items():
    if len(columns) >= max_columns:
        if len(columns) > max_columns:
            solutions.clear()
            max_columns = len(columns)
        solutions.append({'timestamp': timestamp, 'columns': list(columns)})`}
        </pre>
      </div>
    ),
    Java: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Java
        </h2>
        <pre className="bg-emerald-900/20 p-4 rounded-lg text-sm overflow-auto">
          {`Map<Integer, Set<Integer>> timestampMap = new HashMap<>();
for (Drop drop : parsedData.getDrops())
    timestampMap.putIfAbsent(drop.getTimestamp(), new HashSet<>());
    timestampMap.get(drop.getTimestamp()).add(drop.getColumn());
}

int maxColumns = 0;
List<Solution> solutions = new ArrayList<>();
for (Map.Entry<Integer, Set<Integer>> entry : timestampMap.entrySet()) {
    int timestamp = entry.getKey();
    Set<Integer> columns = entry.getValue();
    if (columns.size() >= maxColumns) {
        if (columns.size() > maxColumns) {
            solutions.clear();
            maxColumns = columns.size();
        }
        solutions.add(new Solution(timestamp, new ArrayList<>(columns)));
    }
}`}
        </pre>
      </div>
    ),
    "C++": (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          C++
        </h2>
        <pre className="bg-emerald-900/20 p-4 rounded-lg text-sm overflow-auto">
          {`std::unordered_map<int, std::unordered_set<int>> timestampMap;
for (const auto& drop : parsedData.drops) {
    timestampMap[drop.timestamp].insert(drop.column);
}

int maxColumns = 0;
std::vector<Solution> solutions;
for (const auto& [timestamp, columns] : timestampMap) {
    if (columns.size() >= maxColumns) {
        if (columns.size() > maxColumns) {
            solutions.clear();
            maxColumns = columns.size();
        }
        solutions.push_back({timestamp, std::vector<int>(columns.begin(), columns.end())});
    }
}`}
        </pre>
      </div>
    ),
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
                <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
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
              href="/code"
              className="hover:text-emerald-300 hover:underline underline-offset-4"
            >
              Code
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
        <h1 className="text-3xl font-mono font-bold mb-6">Code Structure</h1>
        <div className="mb-4">
          <select
            value={view}
            onChange={(e) => setView(e.target.value as ViewType)}
            className="px-4 py-2 rounded-md bg-emerald-900/60 border border-emerald-600/40 text-emerald-100"
          >
            {Object.keys(codeViews).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg max-w-4xl">
          {codeViews[view]}
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
              <Link
                href="/input"
                className="text-sm font-mono text-emerald-400/80 hover:text-emerald-300"
              >
                Try Another Input
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
