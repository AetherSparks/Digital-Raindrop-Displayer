'use client';
import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Setting canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%@#&_(),.;:?!\\|{}[]=";
    
    // Setting up drops
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each drop
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
    
    // Drawing the characters
    const draw = () => {
      // Adding semi-transparent black background to show trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Setting text properties
      ctx.fillStyle = '#0f0'; // Green text
      ctx.font = `${fontSize}px monospace`;
      
      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // Randomly pick a character
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Randomize the color for some characters to add visual variation
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#7fffd4'; // Aquamarine
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = '#00ff7f'; // Spring green
        } else {
          ctx.fillStyle = '#0f0'; // Default green
        }
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Check if it's time to reset or move the drop
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move the drop down
        drops[i]++;
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 33); // Around 30 FPS
    
    // Clean up
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ filter: 'brightness(0.7) contrast(1.2)' }}
    />
  );
}