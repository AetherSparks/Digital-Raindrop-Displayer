import Link from "next/link";
import MatrixRain from "./components/MatrixRain";

export default function Home() {
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

      {/* Main Content */}
      <main className="flex-grow z-10 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 inline-block my-4">
                <span className="block leading-normal py-1">
                  Digital Rainfall
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-emerald-300/90 mb-8 font-mono">
              Visualizing and solving the matrix rain problem
            </p>
            <Link
              href="/input"
              className="inline-block px-8 py-3 rounded-md bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/50 text-emerald-100 font-mono transition-all hover:shadow-lg hover:shadow-emerald-800/30"
            >
              Try The Simulator
            </Link>
          </div>

          {/* Problem Statement Section */}
          <section className="mb-12 bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-emerald-500 mr-3"></span>
              Problem Statement
            </h2>
            <div className="font-mono leading-relaxed space-y-4 text-emerald-100/80">
              <p>
                You are given <strong className="text-emerald-300">N</strong>{" "}
                columns and <strong className="text-emerald-300">M</strong>{" "}
                raindrops. Each raindrop falls at a specific timestamp and hits
                a specific column.
              </p>
              <p>
                Your task is to find the{" "}
                <strong className="text-emerald-300">
                  maximum number of unique columns
                </strong>{" "}
                that receive at least one raindrop{" "}
                <strong className="text-emerald-300">
                  at the same timestamp
                </strong>
                .
              </p>
              <p>
                Each input consists of M pairs of integers:{" "}
                <code className="bg-black/40 px-2 py-1 rounded">
                  (timestamp, column)
                </code>
                . Multiple drops can occur at the same timestamp, and multiple
                can hit the same column at different times.
              </p>
              <p>
                Your job is to process this data and compute the maximum number
                of distinct columns hit simultaneously at any one timestamp.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-12 bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-emerald-500 mr-3"></span>
              Team 78
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/40 p-4 rounded-lg border border-emerald-800/30 hover:border-emerald-600/50 transition-all flex flex-col items-center justify-center min-h-[120px] group hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 duration-300">
                <h3 className="text-lg font-bold text-emerald-300 text-center group-hover:text-emerald-200">
                  Abhiraj Ghose
                </h3>
                <p className="text-emerald-200/70 font-mono text-center group-hover:text-emerald-300/80">e23cseu0014</p>
                <p className="text-emerald-400/80 text-sm text-center group-hover:text-emerald-300">Team Leader</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-emerald-800/30 hover:border-emerald-600/50 transition-all flex flex-col items-center justify-center min-h-[120px] group hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 duration-300">
                <h3 className="text-lg font-bold text-emerald-300 text-center group-hover:text-emerald-200">
                  Pallav Sharma
                </h3>
                <p className="text-emerald-200/70 font-mono text-center group-hover:text-emerald-300/80">e23cseu0022</p>
                <p className="text-emerald-400/80 text-sm text-center group-hover:text-emerald-300">Team Member</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-emerald-800/30 hover:border-emerald-600/50 transition-all flex flex-col items-center justify-center min-h-[120px] group hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 duration-300">
                <h3 className="text-lg font-bold text-emerald-300 text-center group-hover:text-emerald-200">
                  Shivam Jain
                </h3>
                <p className="text-emerald-200/70 font-mono text-center group-hover:text-emerald-300/80">e23cseu0017</p>
                <p className="text-emerald-400/80 text-sm text-center group-hover:text-emerald-300">Team Member</p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-12 bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-emerald-500 mr-3"></span>
              Proposed Solution
            </h2>
            <div className="font-mono leading-relaxed space-y-4 text-emerald-100/80">
              <p>Our solution efficiently processes the rainfall data by:</p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>
                  Creating a dictionary/map where keys represent timestamps and
                  values are sets of columns
                </li>
                <li>
                  Processing each raindrop by adding its column to the
                  appropriate timestamp in our map
                </li>
                <li>
                  Once all drops are processed, we find the timestamp with the
                  maximum number of unique columns
                </li>
              </ol>
              <p className="mt-4">
                This approach has a time complexity of O(M) where M is the
                number of raindrops, and efficiently handles the key challenge
                of tracking which columns are hit simultaneously.
              </p>
              <div className="mt-6">
                <Link
                  href="/input"
                  className="inline-flex items-center px-4 py-2 rounded bg-emerald-900/60 border border-emerald-600/40 hover:bg-emerald-800/70 transition-all text-sm"
                >
                  <span>Try the interactive demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Links Section */}
          <section className="mb-12 bg-black/50 backdrop-blur-sm border border-emerald-800/50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-mono font-bold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-emerald-500 mr-3"></span>
              Project Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://github.com/AetherSparks/Digital-Raindrop-Displayer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/40 p-4 rounded-lg border border-emerald-800/30 hover:border-emerald-600/50 transition-all flex items-center"
              >
                <div className="w-10 h-10 bg-emerald-900/40 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-300">
                    GitHub Repository
                  </h3>
                  <p className="text-sm text-emerald-200/70">
                    Access our project source code
                  </p>
                </div>
              </a>
              <a
                href="https://docs.google.com/presentation/d/1ioCnC4oHyE2AMuDXW4gZr2b-sVchCq9ZRyZy2f7NhAA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/40 p-4 rounded-lg border border-emerald-800/30 hover:border-emerald-600/50 transition-all flex items-center"
              >
                <div className="w-10 h-10 bg-emerald-900/40 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                    <rect x="6" y="12" width="12" height="2"></rect>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-emerald-300">Presentation</h3>
                  <p className="text-sm text-emerald-200/70">View our project presentation</p>
                </div>
              </a>
            </div>
          </section>
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
                href="/input"
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
