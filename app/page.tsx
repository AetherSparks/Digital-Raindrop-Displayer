import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Digital Rainfall</h1>
        <p className="text-lg">Team ID: 78</p>
        <p className="text-lg">Team Members: Alice, Bob, Charlie</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Problem Statement</h2>
        <p className="text-base leading-relaxed">
          Given logs of digital “rain” drops (timestamp, column), find the
          maximum number of columns that had a drop at the same timestamp.
        </p>
        <h3 className="text-xl font-medium mt-6 mb-2">Input:</h3>
        <ul className="list-disc list-inside">
          <li>N (columns), M (drops)</li>
          <li>M lines: timestamp column</li>
        </ul>
        <h3 className="text-xl font-medium mt-6 mb-2">Output:</h3>
        <p className="text-base leading-relaxed">
          Maximum number of columns with drops at the same moment.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Sample Input 1:</h3>
        <pre className="bg-gray-100 p-4 rounded">
          5 6 1 1 1 2 2 2 2 3 2 4 3 5
        </pre>
        <h3 className="text-xl font-medium mt-6 mb-2">Sample Output 1:</h3>
        <pre className="bg-gray-100 p-4 rounded">3</pre>

        <h3 className="text-xl font-medium mt-6 mb-2">Sample Input 2:</h3>
        <pre className="bg-gray-100 p-4 rounded">3 4 1 1 1 2 2 1 2 3</pre>
        <h3 className="text-xl font-medium mt-6 mb-2">Sample Output 2:</h3>
        <pre className="bg-gray-100 p-4 rounded">2</pre>
      </main>
    </div>
  );
}
