import React, { useRef, useState } from 'react';

interface HolographicFoilCardProps {
  children: React.ReactNode;
  className?: string;
  foilType?: 'gold' | 'cyber' | 'prismatic';
  maxTilt?: number;
  onClick?: () => void;
}

export const HolographicFoilCard: React.FC<HolographicFoilCardProps> = ({
  children,
  className = '',
  foilType = 'gold',
  maxTilt = 8,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [foilPos, setFoilPos] = useState<{ x: number; y: number; angle: number }>({ x: 50, y: 50, angle: 135 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    // Angle of the light source relative to cursor
    const rad = Math.atan2(y - centerY, x - centerX);
    const deg = (rad * (180 / Math.PI) + 180) % 360;

    setTransformStyle(`perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`);
    setFoilPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      angle: deg
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  // Dynamic foil gradients based on type
  const getFoilGradient = () => {
    if (foilType === 'gold') {
      return `linear-gradient(${foilPos.angle}deg, 
        rgba(254, 240, 138, 0) 0%, 
        rgba(245, 158, 11, 0.25) 25%, 
        rgba(251, 191, 36, 0.45) 50%, 
        rgba(217, 119, 6, 0.25) 75%, 
        rgba(254, 240, 138, 0) 100%)`;
    }
    if (foilType === 'cyber') {
      return `linear-gradient(${foilPos.angle}deg, 
        rgba(56, 189, 248, 0) 0%, 
        rgba(56, 189, 248, 0.3) 25%, 
        rgba(16, 185, 129, 0.35) 50%, 
        rgba(129, 140, 248, 0.3) 75%, 
        rgba(56, 189, 248, 0) 100%)`;
    }
    // Prismatic / Rainbow light dispersion
    return `linear-gradient(${foilPos.angle}deg, 
      rgba(244, 63, 94, 0.15) 0%, 
      rgba(234, 179, 8, 0.25) 20%, 
      rgba(34, 197, 94, 0.25) 40%, 
      rgba(6, 182, 212, 0.3) 60%, 
      rgba(168, 85, 247, 0.25) 80%, 
      rgba(244, 63, 94, 0.15) 100%)`;
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
        ['--foil-x' as any]: `${foilPos.x}%`,
        ['--foil-y' as any]: `${foilPos.y}%`
      }}
      className={`tilt-card relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Specular Holographic Foil Light Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20 rounded-2xl mix-blend-color-dodge"
        style={{
          background: getFoilGradient(),
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Radial Sparkle Core Glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${foilPos.x}% ${foilPos.y}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 55%)`,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Chromatic Edge Glow */}
      <div 
        className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300 -z-10 blur-[1px]"
        style={{
          background: foilType === 'gold' 
            ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.6), rgba(251, 191, 36, 0.2), rgba(217, 119, 6, 0.6))'
            : 'linear-gradient(135deg, rgba(56, 189, 248, 0.6), rgba(16, 185, 129, 0.3), rgba(192, 132, 252, 0.6))',
          opacity: isHovered ? 1 : 0.25
        }}
      />

      {children}
    </div>
  );
};
