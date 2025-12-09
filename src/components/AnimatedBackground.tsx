"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create dots - 1000 dots
    const dots: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const dotCount = 251;
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1 + 0.5, // Slightly larger for visibility
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // More visible dot colors
      const dotColor = theme === "dark" 
        ? "rgba(148, 163, 184, 0.8)" 
        : "rgba(59, 130, 246, 0.6)";

      dots.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Move dot away from mouse if too close
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          dot.vx -= Math.cos(angle) * force * 0.8;
          dot.vy -= Math.sin(angle) * force * 0.8;
        }

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Boundary collision
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -0.8;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -0.8;

        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        dot.y = Math.max(0, Math.min(canvas.height, dot.y));

        // Damping
        dot.vx *= 0.95;
        dot.vy *= 0.95;

        // Draw dot with glow effect
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        
        // Add glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = dotColor;
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mounted, theme]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            theme === "dark"
              ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"
              : "bg-linear-to-br from-blue-50 via-white to-purple-50"
          }`}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          theme === "dark"
            ? "bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"
            : "bg-linear-to-br from-blue-50 via-white to-purple-50"
        }`}
      />

      {/* Canvas for animated dots */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
}
