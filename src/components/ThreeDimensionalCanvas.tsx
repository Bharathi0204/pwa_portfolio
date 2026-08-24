import React, { useEffect, useRef } from 'react';

export const ThreeDimensionalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Particles in a rotating cyber space
    const numParticles = Math.min(Math.floor(window.innerWidth / 16), 70);
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      origZ: number;
      radius: number;
      color: string;
    }

    const colors = [
      'rgba(56, 189, 248, ',  // sky
      'rgba(2, 132, 199, ',   // cyan
      'rgba(16, 185, 129, ',  // emerald
      'rgba(129, 140, 248, '  // violet
    ];

    const particles: Particle3D[] = [];
    for (let i = 0; i < numParticles; i++) {
      const z = (Math.random() - 0.5) * 800;
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z,
        origZ: z,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetAngleY = ((e.clientX / width) - 0.5) * 0.4;
      targetAngleX = ((e.clientY / height) - 0.5) * 0.4;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetAngleY = ((e.touches[0].clientX / width) - 0.5) * 0.4;
        targetAngleX = ((e.touches[0].clientY / height) - 0.5) * 0.4;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const fov = 400; // 3D field of view

    const render = () => {
      // Smooth camera interpolation
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Auto slow rotation
      targetAngleY += 0.0006;

      // Project & draw particles
      const projected: { px: number; py: number; scale: number; p: Particle3D }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation matrix
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Depth perspective projection
        const depth = fov / (fov + z2 + 400);

        if (depth > 0) {
          const px = x1 * depth + width / 2;
          const py = y1 * depth + height / 2;
          projected.push({ px, py, scale: depth, p });
        }
      }

      // Draw cyber connecting lines between nearby 3D points
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15 * projected[i].scale;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw 3D nodes
      for (let i = 0; i < projected.length; i++) {
        const { px, py, scale, p } = projected[i];
        const r = Math.max(0.5, p.radius * scale * 1.5);
        const alpha = Math.min(1, Math.max(0.1, scale * 0.75));

        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
    />
  );
};
