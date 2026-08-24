import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, RotateCcw, Hand, Zap, Info } from 'lucide-react';

interface Charm3D {
  id: string;
  name: string;
  tag: string;
  color: string;
  glowColor: string;
  x: number;
  y: number;
  z: number;
  anchorX: number;
  anchorY: number;
  anchorZ: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  size: number;
  type: 'python' | 'iot' | 'voice' | 'goldMedal' | 'dsa';
  isDragging?: boolean;
}

export const Interactive3DHeroTalisman: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeCharmInfo, setActiveCharmInfo] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initAnchors();
    };

    // 5 Physical Charms Setup
    const charms: Charm3D[] = [
      {
        id: 'python',
        name: 'Full-Stack Python Core',
        tag: 'FastAPI & Django Specialist',
        color: '#38bdf8',
        glowColor: 'rgba(56, 189, 248, 0.4)',
        x: 0, y: 0, z: 0,
        anchorX: 0, anchorY: 0, anchorZ: 0,
        vx: 0, vy: 0, vz: 0,
        rotX: 0, rotY: 0, rotZ: 0,
        vRotX: 0.01, vRotY: 0.015, vRotZ: 0,
        size: 38,
        type: 'python'
      },
      {
        id: 'iot',
        name: 'ESP32 IoT Telemetry Core',
        tag: 'AGRIMISTRO Hardware Engine',
        color: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.4)',
        x: 0, y: 0, z: 0,
        anchorX: 0, anchorY: 0, anchorZ: 0,
        vx: 0, vy: 0, vz: 0,
        rotX: 0.2, rotY: -0.3, rotZ: 0.1,
        vRotX: -0.012, vRotY: 0.018, vRotZ: 0,
        size: 34,
        type: 'iot'
      },
      {
        id: 'voice',
        name: 'Voice AI Neural Orb',
        tag: 'ULAVI VOCIS Real-Time STT',
        color: '#c084fc',
        glowColor: 'rgba(192, 132, 252, 0.4)',
        x: 0, y: 0, z: 0,
        anchorX: 0, anchorY: 0, anchorZ: 0,
        vx: 0, vy: 0, vz: 0,
        rotX: -0.1, rotY: 0.2, rotZ: 0,
        vRotX: 0.02, vRotY: -0.01, vRotZ: 0.005,
        size: 36,
        type: 'voice'
      },
      {
        id: 'goldMedal',
        name: 'SRM 1st Prize ₹50,000',
        tag: 'State-Level Grand Champion',
        color: '#f59e0b',
        glowColor: 'rgba(245, 158, 11, 0.45)',
        x: 0, y: 0, z: 0,
        anchorX: 0, anchorY: 0, anchorZ: 0,
        vx: 0, vy: 0, vz: 0,
        rotX: 0.1, rotY: 0.1, rotZ: -0.2,
        vRotX: 0.015, vRotY: 0.015, vRotZ: -0.01,
        size: 36,
        type: 'goldMedal'
      },
      {
        id: 'dsa',
        name: '100 DSA Algorithmic Prism',
        tag: '88.6% Acceptance Rate',
        color: '#06b6d4',
        glowColor: 'rgba(6, 182, 212, 0.4)',
        x: 0, y: 0, z: 0,
        anchorX: 0, anchorY: 0, anchorZ: 0,
        vx: 0, vy: 0, vz: 0,
        rotX: -0.2, rotY: -0.1, rotZ: 0.3,
        vRotX: -0.01, vRotY: -0.015, vRotZ: 0.01,
        size: 32,
        type: 'dsa'
      }
    ];

    const initAnchors = () => {
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.32;

      // Position charms in a floating 3D orbital cluster
      const angles = [0, (Math.PI * 2) / 5, ((Math.PI * 2) * 2) / 5, ((Math.PI * 2) * 3) / 5, ((Math.PI * 2) * 4) / 5];

      charms.forEach((c, idx) => {
        const a = angles[idx] - Math.PI / 2;
        const dist = idx === 0 ? radius * 0.15 : radius;
        c.anchorX = centerX + Math.cos(a) * dist;
        c.anchorY = centerY + Math.sin(a) * (dist * 0.82);
        c.anchorZ = (idx % 2 === 0 ? 30 : -30);
        if (c.x === 0 && c.y === 0) {
          c.x = c.anchorX + (Math.random() - 0.5) * 40;
          c.y = c.anchorY + (Math.random() - 0.5) * 40;
          c.z = c.anchorZ;
        }
      });
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse / Touch Interaction State
    let draggedCharm: Charm3D | null = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let pointerVelocityX = 0;
    let pointerVelocityY = 0;
    let hoveredCharm: Charm3D | null = null;

    let gyroTiltX = 0;
    let gyroTiltY = 0;

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        gyroTiltX = (e.gamma / 45) * 25; // Left-to-right tilt
        gyroTiltY = ((e.beta - 45) / 45) * 25; // Front-to-back tilt
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
    }

    const getPointerPos = (e: MouseEvent | TouchEvent) => {
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      if ('touches' in e && e.touches.length > 0) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      } else if ('clientX' in e) {
        return {
          x: (e as MouseEvent).clientX - rect.left,
          y: (e as MouseEvent).clientY - rect.top
        };
      }
      return { x: 0, y: 0 };
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const pos = getPointerPos(e);
      lastPointerX = pos.x;
      lastPointerY = pos.y;

      // Find top charm under pointer
      for (let i = charms.length - 1; i >= 0; i--) {
        const c = charms[i];
        const dx = pos.x - c.x;
        const dy = pos.y - c.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= c.size * 1.3) {
          draggedCharm = c;
          c.isDragging = true;
          dragOffsetX = dx;
          dragOffsetY = dy;
          c.vx = 0;
          c.vy = 0;
          setActiveCharmInfo(`${c.name} — ${c.tag}`);
          setHasInteracted(true);
          break;
        }
      }
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const pos = getPointerPos(e);
      pointerVelocityX = pos.x - lastPointerX;
      pointerVelocityY = pos.y - lastPointerY;
      lastPointerX = pos.x;
      lastPointerY = pos.y;

      if (draggedCharm) {
        draggedCharm.x = pos.x - dragOffsetX;
        draggedCharm.y = pos.y - dragOffsetY;
        draggedCharm.rotY += pointerVelocityX * 0.02;
        draggedCharm.rotX -= pointerVelocityY * 0.02;
      } else {
        // Check hover
        let foundHover: Charm3D | null = null;
        for (let i = charms.length - 1; i >= 0; i--) {
          const c = charms[i];
          const dx = pos.x - c.x;
          const dy = pos.y - c.y;
          if (Math.sqrt(dx * dx + dy * dy) <= c.size * 1.3) {
            foundHover = c;
            break;
          }
        }
        hoveredCharm = foundHover;
        if (foundHover) {
          setActiveCharmInfo(`${foundHover.name} — ${foundHover.tag}`);
        }
      }
    };

    const handlePointerUp = () => {
      if (draggedCharm) {
        draggedCharm.vx = pointerVelocityX * 0.6;
        draggedCharm.vy = pointerVelocityY * 0.6;
        draggedCharm.isDragging = false;
        draggedCharm = null;
      }
    };

    canvas.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    canvas.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Render 3D Charms
    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw cyber spring cords connecting charms to the center core
      ctx.lineWidth = 1.2;
      charms.forEach((c) => {
        ctx.strokeStyle = `rgba(56, 189, 248, 0.2)`;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.quadraticCurveTo(
          (centerX + c.x) / 2 + Math.sin(time * 0.003 + c.anchorZ) * 10,
          (centerY + c.y) / 2 + Math.cos(time * 0.003 + c.anchorZ) * 10,
          c.x,
          c.y
        );
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw Center Hub (Bharathi Tech Singularity Core)
      ctx.save();
      ctx.translate(centerX, centerY);
      const corePulse = Math.sin(time * 0.004) * 3;
      const coreGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, 24 + corePulse);
      coreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
      coreGrad.addColorStop(0.5, 'rgba(2, 132, 199, 0.4)');
      coreGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 26 + corePulse, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('BE', 0, 1);
      ctx.restore();

      // Physics update and drawing for each charm
      const springK = 0.05; // Spring tension stiffness
      const damping = 0.84; // Spring damping resistance

      // Sort by Z for proper 3D layering
      const sorted = [...charms].sort((a, b) => a.z - b.z);

      sorted.forEach((c) => {
        if (!c.isDragging) {
          // Spring force towards anchor + gyro gravity
          const targetX = c.anchorX + gyroTiltX + Math.sin(time * 0.002 + c.anchorZ) * 8;
          const targetY = c.anchorY + gyroTiltY + Math.cos(time * 0.002 + c.anchorZ) * 8;

          const fx = (targetX - c.x) * springK;
          const fy = (targetY - c.y) * springK;

          c.vx = (c.vx + fx) * damping;
          c.vy = (c.vy + fy) * damping;

          c.x += c.vx;
          c.y += c.vy;

          // Rotation momentum
          c.rotX += c.vRotX;
          c.rotY += c.vRotY;
          c.rotZ += c.vRotZ;
        }

        // Draw soft 3D ground drop shadow
        const shadowY = height - 20;
        const shadowScale = Math.max(0.2, 1 - (shadowY - c.y) / height);
        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(c.x, shadowY - 5, c.size * 0.8 * shadowScale, c.size * 0.25 * shadowScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw the 3D charm itself with physical lighting and 3D transforms
        ctx.save();
        ctx.translate(c.x, c.y);

        // 3D perspective distortion using scaling and shearing
        const scaleX = Math.cos(c.rotY);
        const scaleY = Math.cos(c.rotX);
        const isHovered = hoveredCharm === c || c.isDragging;

        // Hover / Drag Glow Aura
        if (isHovered) {
          ctx.shadowColor = c.color;
          ctx.shadowBlur = 20;
        }

        // Draw custom 3D physical object based on type
        if (c.type === 'python') {
          // 3D Beveled Python Shield
          ctx.save();
          ctx.scale(Math.max(0.6, Math.abs(scaleX)), 1);

          // Outer Chrome Rim
          const chromeGrad = ctx.createLinearGradient(-c.size, -c.size, c.size, c.size);
          chromeGrad.addColorStop(0, '#ffffff');
          chromeGrad.addColorStop(0.3, '#38bdf8');
          chromeGrad.addColorStop(0.7, '#0369a1');
          chromeGrad.addColorStop(1, '#082f49');

          ctx.fillStyle = chromeGrad;
          ctx.beginPath();
          ctx.roundRect(-c.size, -c.size, c.size * 2, c.size * 2, 14);
          ctx.fill();

          // Inner Dark Inset
          ctx.fillStyle = '#090d16';
          ctx.beginPath();
          ctx.roundRect(-c.size + 3, -c.size + 3, (c.size - 3) * 2, (c.size - 3) * 2, 11);
          ctx.fill();

          // Python Two-Tone Curves
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(-4, -4, 12, 0, Math.PI * 1.5);
          ctx.lineTo(-4, 0);
          ctx.fill();

          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(4, 4, 12, Math.PI * 0.5, Math.PI * 2);
          ctx.lineTo(4, 0);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 9px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('PY', 0, 15);
          ctx.restore();
        } else if (c.type === 'iot') {
          // 3D ESP32 Microcontroller PCB
          ctx.save();
          ctx.scale(Math.max(0.6, Math.abs(scaleX)), 1);

          // Emerald PCB base
          ctx.fillStyle = '#064e3b';
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(-c.size, -c.size * 0.85, c.size * 2, c.size * 1.7, 8);
          ctx.fill();
          ctx.stroke();

          // Metallic Chip Core
          ctx.fillStyle = '#1e293b';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.rect(-c.size * 0.5, -c.size * 0.45, c.size, c.size * 0.9);
          ctx.fill();
          ctx.stroke();

          // Gold Pin Connectors
          ctx.fillStyle = '#fbbf24';
          for (let p = -c.size + 6; p <= c.size - 6; p += 6) {
            ctx.fillRect(p, -c.size * 0.85 - 2, 3, 3);
            ctx.fillRect(p, c.size * 0.85 - 1, 3, 3);
          }

          // Blinking Status LED
          const ledPulse = Math.sin(time * 0.01) > 0;
          ctx.fillStyle = ledPulse ? '#34d399' : '#047857';
          ctx.beginPath();
          ctx.arc(c.size * 0.6, -c.size * 0.45, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#a7f3d0';
          ctx.font = 'bold 8px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('ESP32', 0, 3);
          ctx.restore();
        } else if (c.type === 'voice') {
          // 3D Voice AI Neural Sphere
          ctx.save();
          const spherePulse = Math.sin(time * 0.008) * 4;
          const sphereGrad = ctx.createRadialGradient(-6, -6, 2, 0, 0, c.size + spherePulse);
          sphereGrad.addColorStop(0, '#f3e8ff');
          sphereGrad.addColorStop(0.4, '#c084fc');
          sphereGrad.addColorStop(0.8, '#7e22ce');
          sphereGrad.addColorStop(1, '#3b0764');

          ctx.fillStyle = sphereGrad;
          ctx.beginPath();
          ctx.arc(0, 0, c.size + spherePulse * 0.5, 0, Math.PI * 2);
          ctx.fill();

          // Oscillating Voice Waveform Rings
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let i = -14; i <= 14; i += 4) {
            const h = Math.sin(time * 0.01 + i * 0.4) * 8;
            ctx.moveTo(i, -h);
            ctx.lineTo(i, h);
          }
          ctx.stroke();
          ctx.restore();
        } else if (c.type === 'goldMedal') {
          // 3D SRM ₹50,000 1st Prize Gold Medallion
          ctx.save();
          ctx.scale(Math.max(0.6, Math.abs(scaleX)), 1);

          // Specular Gold Ring
          const goldGrad = ctx.createLinearGradient(-c.size, -c.size, c.size, c.size);
          goldGrad.addColorStop(0, '#fef08a');
          goldGrad.addColorStop(0.3, '#f59e0b');
          goldGrad.addColorStop(0.7, '#d97706');
          goldGrad.addColorStop(1, '#78350f');

          ctx.fillStyle = goldGrad;
          ctx.beginPath();
          ctx.arc(0, 0, c.size, 0, Math.PI * 2);
          ctx.fill();

          // Inner Dark Medallion Face
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(0, 0, c.size - 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#fbbf24';
          ctx.font = 'black 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('1ST', 0, -2);
          ctx.font = 'bold 7px monospace';
          ctx.fillText('₹50K', 0, 9);
          ctx.restore();
        } else if (c.type === 'dsa') {
          // 3D LeetCode 100 Algorithmic Prism
          ctx.save();
          ctx.scale(Math.max(0.6, Math.abs(scaleX)), 1);

          ctx.fillStyle = '#083344';
          ctx.strokeStyle = '#06b6d4';
          ctx.lineWidth = 2;

          // Diamond Polygon
          ctx.beginPath();
          ctx.moveTo(0, -c.size);
          ctx.lineTo(c.size * 0.9, 0);
          ctx.lineTo(0, c.size);
          ctx.lineTo(-c.size * 0.9, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Facet Highlights
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, -c.size);
          ctx.lineTo(0, c.size);
          ctx.moveTo(-c.size * 0.9, 0);
          ctx.lineTo(c.size * 0.9, 0);
          ctx.stroke();

          ctx.fillStyle = '#e0f2fe';
          ctx.font = 'bold 10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('100', 0, 3);
          ctx.restore();
        }

        // Micro Name Label beneath charm
        ctx.fillStyle = isHovered ? '#38bdf8' : '#94a3b8';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(c.name.split(' ')[0], 0, c.size + 14);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      canvas.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      canvas.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleResetPhysics = () => {
    setActiveCharmInfo('3D Physics Re-centered! Drag & fling any charm.');
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-gradient-to-b from-slate-950/80 to-slate-900/60 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden group select-none"
    >
      {/* Top Interactive HUD Bar */}
      <div className="absolute top-2.5 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono shadow-md backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span className="font-bold">3D Physical Talismans</span>
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          {!hasInteracted && (
            <span className="hidden xs:inline text-[9px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-white/5 animate-pulse">
              Drag & fling charms 👆
            </span>
          )}
          <button
            onClick={handleResetPhysics}
            className="p-1.5 rounded-lg bg-slate-900/90 border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-[10px] transition-all flex items-center gap-1"
            title="Reset Spring Physics"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Physics Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Dynamic Active Charm Info Strip */}
      <div className="absolute bottom-2 left-3 right-3 z-10 pointer-events-none">
        <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-300 flex items-center justify-between gap-2 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 truncate">
            <Hand className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-cyan-300 font-bold truncate">
              {activeCharmInfo || 'Grab & fling any 3D charm to explore superpowers'}
            </span>
          </div>
          <span className="text-[9px] text-emerald-400 font-bold shrink-0 hidden xs:inline">
            60 FPS Physics
          </span>
        </div>
      </div>
    </div>
  );
};
