import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button');
      
      if (isInteractive && !isHoveringRef.current) {
        isHoveringRef.current = true;
        cursor.classList.add('hovering');
      } else if (!isInteractive && isHoveringRef.current) {
        isHoveringRef.current = false;
        cursor.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}