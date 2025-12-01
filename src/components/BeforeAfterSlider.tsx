import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  darkMode?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  darkMode = false
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className={`relative w-full h-150 rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none ${
          darkMode ? 'border-2 border-slate-700' : 'border-2 border-gray-200'
        }`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Imagen "Después" (fondo completo) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-contain"
            draggable={false}
          />
          {/* Label "Después" */}
          <div className={`absolute top-4 right-4 px-4 py-2 rounded-lg font-semibold text-sm shadow-lg ${
            darkMode 
              ? 'bg-green-500/90 text-white' 
              : 'bg-green-500 text-white'
          }`}>
            {afterLabel}
          </div>
        </div>

        {/* Imagen "Antes" (con clip-path) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-contain"
            draggable={false}
          />
          {/* Label "Antes" */}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-lg font-semibold text-sm shadow-lg ${
            darkMode 
              ? 'bg-red-500/90 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {beforeLabel}
          </div>
        </div>

        {/* Línea divisoria y handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle (círculo arrastrable) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl cursor-ew-resize transition-transform ${
              isDragging ? 'scale-110' : 'scale-100'
            } ${
              darkMode 
                ? 'bg-white text-slate-900' 
                : 'bg-white text-slate-900'
            }`}>
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Overlay para mejorar el dragging */}
        {isDragging && (
          <div className="absolute inset-0 cursor-ew-resize" />
        )}
      </div>

      {/* Instrucciones */}
      <div className={`text-center mt-4 text-sm ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <p>Arrastra la barra para comparar</p>
      </div>
    </div>
  );
}