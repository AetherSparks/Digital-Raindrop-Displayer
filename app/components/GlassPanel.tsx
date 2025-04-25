'use client';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div className={`relative p-6 rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg" />
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
}