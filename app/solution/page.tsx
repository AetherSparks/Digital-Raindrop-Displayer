import Link from 'next/link';

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-black text-emerald-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-mono font-bold mb-6">Digital Rainfall Solution</h1>
      <p className="text-emerald-300 mb-8">Interactive solution page coming soon...</p>
      <Link href="/" className="px-6 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/50 text-emerald-100 font-mono">
        Return Home
      </Link>
    </div>
  );
}