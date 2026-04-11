export default function AnimatedImage({ src, alt, className = '', priority = 'medium' }: { src: string; alt: string; className?: string; priority?: 'high' | 'medium' | 'low' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading={priority === 'high' ? 'eager' : 'lazy'}
        decoding={priority === 'high' ? 'sync' : 'async'}
      />
    </div>
  );
}

export function RevealText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}