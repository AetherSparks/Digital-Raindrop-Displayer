"use client";

import { useState } from "react";
import MatrixRain from "../components/MatrixRain";
import Link from "next/link";
import Image from "next/image";
import CopyableCode from "../components/CopyableCode";

type ViewType = "Steps" | "PseudoCode" | "TypeScript" | "Python" | "Java" | "C++" | "Rust";

export default function CodePage() {
  const [view, setView] = useState<ViewType>("Steps");

  const codeViews = {
    Steps: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Steps
        </h2>
        <div className="relative group">
          <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-md rounded-lg border border-emerald-600/20 transition-all duration-300 group-hover:bg-emerald-900/30 group-hover:border-emerald-600/30"></div>
          <ol className="list-decimal list-inside text-emerald-300 relative p-4">
            <li className="mb-2">Group raindrops by their timestamps using a HashMap.</li>
            <li className="mb-2">
              Iterate through the HashMap to find the maximum number of unique
              columns.
            </li>
            <li className="mb-2">Clear previous solutions if a new maximum is found.</li>
            <li>Store timestamps and columns for the maximum unique columns.</li>
          </ol>
        </div>
      </div>
    ),
    PseudoCode: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          PseudoCode
        </h2>
        <CopyableCode code={`HashMap timestampMap
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
    Add {timestamp, columns} to solutions`} />
      </div>
    ),
    TypeScript: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          TypeScript
        </h2>
        <CopyableCode code={`interface RaindropData {
  timestamp: number;
  column: number;
}

interface Solution {
  timestamp: number;
  columns: number[]; 
}

function findMaxColumns(data: RaindropData[]): Solution[] {
  const timestampMap = new Map<number, Set<number>>(); 
  
  // Group drops by timestamp
  data.forEach(drop => {
    if (!timestampMap.has(drop.timestamp)) {
      timestampMap.set(drop.timestamp, new Set());
    }
    timestampMap.get(drop.timestamp)?.add(drop.column);
  });

  let maxColumns = 0;
  const solutions: Solution[] = [];

  // Find timestamps with maximum unique columns
  timestampMap.forEach((columns, timestamp) => {
    if (columns.size >= maxColumns) {
      if (columns.size > maxColumns) {
        solutions.length = 0;
        maxColumns = columns.size;
      }
      solutions.push({
        timestamp,
        columns: Array.from(columns).sort((a, b) => a - b)
      });
    }
  });

  return solutions;
}`} language="typescript" />
      </div>
    ),
    Python: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Python
        </h2>
        <CopyableCode code={`timestamp_map = {}
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
        solutions.append({
            'timestamp': timestamp,
            'columns': sorted(list(columns))
        })`} language="python" />
      </div>
    ),
    Java: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Java
        </h2>
        <CopyableCode code={`Map<Integer, Set<Integer>> timestampMap = new HashMap<>();
for (Drop drop : parsedData.getDrops()) {
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
        List<Integer> sortedColumns = new ArrayList<>(columns);
        Collections.sort(sortedColumns);
        solutions.add(new Solution(timestamp, sortedColumns));
    }
}`} language="java" />
      </div>
    ),
    "C++": (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          C++
        </h2>
        <CopyableCode code={`std::unordered_map<int, std::unordered_set<int>> timestampMap;
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
        std::vector<int> sortedColumns(columns.begin(), columns.end());
        std::sort(sortedColumns.begin(), sortedColumns.end());
        solutions.push_back({timestamp, sortedColumns});
    }
}`} language="cpp" />
      </div>
    ),
    Rust: (
      <div>
        <h2 className="text-2xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Rust
        </h2>
        <CopyableCode code={`use std::collections::{HashMap, HashSet};

#[derive(Debug)]
struct Raindrop {
    timestamp: u32,
    column: u32,
}

#[derive(Debug)]
struct Solution {
    timestamp: u32,
    columns: Vec<u32>,
}

fn find_max_columns(drops: &[Raindrop]) -> Vec<Solution> {
    let mut timestamp_map: HashMap<u32, HashSet<u32>> = HashMap::new();
    
    // Group drops by timestamp
    for drop in drops {
        timestamp_map
            .entry(drop.timestamp)
            .or_insert_with(HashSet::new)
            .insert(drop.column);
    }
    
    let mut max_columns = 0;
    let mut solutions = Vec::new();
    
    // Find timestamps with maximum unique columns
    for (timestamp, columns) in timestamp_map {
        if columns.len() >= max_columns {
            if columns.len() > max_columns {
                solutions.clear();
                max_columns = columns.len();
            }
            let mut sorted_columns: Vec<u32> = columns.into_iter().collect();
            sorted_columns.sort_unstable();
            solutions.push(Solution {
                timestamp,
                columns: sorted_columns,
            });
        }
    }
    
    solutions
}`} language="rust" />
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
                <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
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
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-mono font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
            Implementation Details
          </h1>
          <div className="mb-6 w-full max-w-xs">
            <select
              value={view}
              onChange={(e) => setView(e.target.value as ViewType)}
              className="w-full px-4 py-2 rounded-lg bg-emerald-900/60 border border-emerald-600/40 text-emerald-100 backdrop-blur-sm transition-all hover:bg-emerald-900/70 hover:border-emerald-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              {Object.keys(codeViews).map((key) => (
                <option key={key} value={key} className="bg-black text-emerald-300">
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg transition-all hover:shadow-emerald-900/20">
            {codeViews[view]}
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
                  <Image src="/favicon.ico" alt="Logo" width={16} height={16} />
                </div>
                <span className="text-sm font-mono font-bold tracking-wider text-emerald-400">
                  Digital Rainfall
                </span>
              </Link>
            </div>
            <div className="text-xs text-emerald-400/60 font-mono">
              &copy; {new Date().getFullYear()} Team 78. All rights reserved.
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
