![Digital Rainfall](./app/favicon.ico)

# 🌧️ Digital Rainfall Visualizer



An interactive web application that visualizes and solves the digital rainfall problem, developed for AlgoNet Hackathon by Team 78.

## 🚀 Features

- **Interactive Visualization**: Real-time visualization of raindrops falling on columns
- **Matrix Rain Background**: Aesthetic cyberpunk-style matrix rain animation
- **Multiple Language Implementations**: Solutions in TypeScript, Python, Java, C++, and Rust
- **Dynamic Input Generation**: Random data generator or custom input options
- **Step-by-Step Simulation**: Timeline slider to visualize raindrop states
- **Modern UI Design**: Glassmorphic design with emerald theme and fluid animations
- **Copy-Enabled Code Blocks**: Easy code sharing with copy functionality

## 🎯 Problem Statement

Given N columns and M raindrops, each falling at a specific timestamp and hitting a specific column, find the maximum number of unique columns receiving raindrops simultaneously at any timestamp.

### Input Format
- M pairs of integers (timestamp, column)
- Multiple drops can occur at the same timestamp
- Multiple drops can hit the same column at different times

## 💡 Solution Approach

Our solution efficiently processes the rainfall data through:

1. Creating a dictionary/map where keys represent timestamps and values are sets of columns
2. Processing each raindrop by adding its column to the appropriate timestamp
3. Finding timestamps with maximum unique columns
4. Time Complexity: O(M) where M is the number of raindrops

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: TailwindCSS, CSS Animations
- **3D Effects**: Three.js for raindrop effects
- **State Management**: React Hooks
- **Build Tool**: PNPM

## Check out our Live Website
- [Project Website](https://digital-raindrop-displayer.vercel.app/)


## 🚀 Clone the Code and Share your ideas

1. Clone the repository:
\`\`\`bash
git clone https://github.com/AetherSparks/Digital-Raindrop-Displayer.git
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 👥 Team Members

- **Abhiraj Ghose** (e23cseu0014) - Team Leader
- **Pallav Sharma** (e23cseu0022) - Team Member

## 🔗 Links
- [Project Website](https://digital-raindrop-displayer.vercel.app/)
- [GitHub Repository](https://github.com/AetherSparks/Digital-Raindrop-Displayer)
- [Project Presentation](https://docs.google.com/presentation/d/1ioCnC4oHyE2AMuDXW4gZr2b-sVchCq9ZRyZy2f7NhAA/edit?usp=sharing)

## 📄 License

Copyright © 2025 Team 78. All rights reserved.

## 💡 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.
