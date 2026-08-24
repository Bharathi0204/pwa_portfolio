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

    const numParticles = Math.min(Math.floor(window.innerWidth / 12), 90);
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      targetX: number;
      targetY: number;
      targetZ: number;
      radius: number;
      color: string;
      phase: number;
    }

    const colors = [
      'rgba(56, 189, 248, ',  // sky
      'rgba(2, 132, 199, ',   // cyan
      'rgba(16, 185, 129, ',  // emerald
      'rgba(192, 132, 252, ', // violet
      'rgba(245, 158, 11, '   // amber
    ];

    const particles: Particle3D[] = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 600,
        targetX: 0,
        targetY: 0,
        targetZ: 0,
        radius: Math.random() * 2 + 1,
        color: colors[i % colors.length],
        phase: (i / numParticles) * Math.PI * 2
      });
    }

    let scrollFraction = 0;
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollFraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetAngleY = ((e.clientX / width) - 0.5) * 0.45;
      targetAngleX = ((e.clientY / height) - 0.5) * 0.45;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetAngleY = ((e.touches[0].clientX / width) - 0.5) * 0.45;
        targetAngleX = ((e.touches[0].clientY / height) - 0.5) * 0.45;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const fov = 420;

    const render = (time: number) => {
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;
      targetAngleY += 0.0008;

      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Section-based 3D Formations
      // 0.0 = Hero Sphere | 0.25 = Timeline Helix | 0.5 = Dual Ring Grid | 0.75 = Algorithmic Torus | 1.0 = Golden Spiral
      const sphereRadius = Math.min(width, height) * 0.35;

      particles.forEach((p, idx) => {
        const phi = Math.acos(-1 + (2 * idx) / numParticles);
        const theta = Math.sqrt(numParticles * Math.PI) * phi;

        // Formation 1: Fibonacci Sphere (Hero)
        const sx = sphereRadius * Math.cos(theta) * Math.sin(phi);
        const sy = sphereRadius * Math.sin(theta) * Math.sin(phi);
        const sz = sphereRadius * Math.cos(phi);

        // Formation 2: Timeline Double Helix (Experience)
        const helixT = (idx / numParticles) * Math.PI * 4;
        const hx = Math.sin(helixT) * 160;
        const hy = (idx / numParticles - 0.5) * height * 0.7;
        const hz = Math.cos(helixT) * 160;

        // Formation 3: Interconnected Architecture Ring (Projects)
        const ringAngle = (idx / numParticles) * Math.PI * 2;
        const rx = Math.cos(ringAngle) * 220;
        const ry = Math.sin(ringAngle * 2 + time * 0.002) * 60;
        const rz = Math.sin(ringAngle) * 220;

        // Formation 4: SOOT Spiral (Achievements & Contact)
        const spiralR = (idx / numParticles) * sphereRadius * 1.2;
        const spiralAngle = (idx / numParticles) * Math.PI * 8;
        const spx = Math.cos(spiralAngle + time * 0.001) * spiralR;
        const spy = Math.sin(spiralAngle + time * 0.001) * spiralR;
        const spz = (idx / numParticles - 0.5) * 300;

        // Interpolate target position based on scrollFraction
        if (scrollFraction < 0.25) {
          const t = scrollFraction / 0.25;
          p.targetX = sx * (1 - t) + hx * t;
          p.targetY = sy * (1 - t) + hy * t;
          p.targetZ = sz * (1 - t) + hz * t;
        } else if (scrollFraction < 0.5) {
          const t = (scrollFraction - 0.25) / 0.25;
          p.targetX = hx * (1 - t) + rx * t;
          p.targetY = hy * (1 - t) + ry * t;
          p.targetZ = hz * (1 - t) + rz * t;
        } else if (scrollFraction < 0.75) {
          const t = (scrollFraction - 0.5) / 0.25;
          p.targetX = rx * (1 - t) + spx * t;
          p.targetY = ry * (1 - t) + spy * t;
          p.targetZ = rz * (1 - t) + spz * t;
        } else {
          p.targetX = spx;
          p.targetY = spy;
          p.targetZ = spz;
        }

        // Particle smooth spring interpolation
        p.x += (p.targetX - p.x) * 0.06;
        p.y += (p.targetY - p.y) * 0.06;
        p.z += (p.targetZ - p.z) * 0.06;
      });

      // Project & Draw
      const projected: { px: number; py: number; scale: number; p: Particle3D }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation matrix
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        const depth = fov / (fov + z2 + 400);

        if (depth > 0) {
          const px = x1 * depth + width / 2;
          const py = y1 * depth + height / 2;
          projected.push({ px, py, scale: depth, p });
        }
      }

      // Draw cyber connecting lines between nearby points
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const alpha = (1 - dist / 105) * 0.16 * projected[i].scale;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
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
        const r = Math.max(0.6, p.radius * scale * 1.4);
        const alpha = Math.min(1, Math.max(0.12, scale * 0.8));

        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
};
