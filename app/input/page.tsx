import Link from 'next/link';
import MatrixRain from '../components/MatrixRain';

export default function InputPage() {
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
            <div className="font-mono">
              <h2 className="text-xl mb-4 text-emerald-300">Enter Your Test Case</h2>
              <p className="text-emerald-200/70 mb-4">Format: First line contains N (columns) and M (drops), followed by M lines containing timestamp and column number.</p>
              
              <textarea 
                className="w-full h-48 bg-black/40 border border-emerald-800/30 rounded-lg p-4 text-emerald-300 font-mono focus:border-emerald-600/50 focus:outline-none"
                placeholder="5 6&#13;&#10;1 1&#13;&#10;1 2&#13;&#10;2 2&#13;&#10;2 3&#13;&#10;2 4&#13;&#10;3 5"
              ></textarea>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/" className="px-4 py-2 rounded-md bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/70 transition-all text-sm">
                Back to Home
              </Link>
              <button className="px-6 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/50 text-emerald-100 font-mono transition-all">
                Process Data
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}