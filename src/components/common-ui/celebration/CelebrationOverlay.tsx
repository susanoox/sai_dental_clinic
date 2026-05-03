"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  color: string; size: number; life: number; maxLife: number;
  type: "confetti" | "spark" | "star";
  rotation: number; rotationSpeed: number; gravity: number;
}

interface CelebrationOverlayProps {
  trigger: boolean;
  duration?: number;
  onClose?: () => void;
}

const COLORS = [
  "#FFD700", "#FF6B6B", "#4ECDC4", "#60A5FA", "#A78BFA",
  "#34D399", "#FBBF24", "#F472B6", "#E879F9", "#38BDF8",
  "#FB923C", "#4ADE80", "#E2E8F0",
];

function randomBetween(a: number, b: number) { return a + Math.random() * (b - a); }

function createFireworkBurst(x: number, y: number, count: number, particles: Particle[]) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + randomBetween(-0.4, 0.4);
    const speed = randomBetween(3, 12);
    const type = Math.random() < 0.25 ? "star" : Math.random() < 0.5 ? "spark" : "confetti";
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: type === "star" ? randomBetween(4, 8) : randomBetween(3, 6),
      life: 1, maxLife: randomBetween(60, 120),
      type, rotation: randomBetween(0, Math.PI * 2),
      rotationSpeed: randomBetween(-0.15, 0.15),
      gravity: randomBetween(0.08, 0.18),
    });
  }
}

function createRainConfetti(width: number, particles: Particle[]) {
  for (let i = 0; i < 6; i++) {
    particles.push({
      x: randomBetween(0, width), y: -10,
      vx: randomBetween(-1.5, 1.5), vy: randomBetween(2, 5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(4, 10), life: 1, maxLife: randomBetween(120, 200),
      type: "confetti", rotation: randomBetween(0, Math.PI * 2),
      rotationSpeed: randomBetween(-0.1, 0.1), gravity: randomBetween(0.05, 0.1),
    });
  }
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, alpha: number) {
  ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const outerX = x + Math.cos(angle) * r; const outerY = y + Math.sin(angle) * r;
    const innerAngle = angle + Math.PI / 5;
    const innerX = x + Math.cos(innerAngle) * (r * 0.42); const innerY = y + Math.sin(innerAngle) * (r * 0.42);
    if (i === 0) ctx.moveTo(outerX, outerY); else ctx.lineTo(outerX, outerY);
    ctx.lineTo(innerX, innerY);
  }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

export default function CelebrationOverlay({ trigger, duration = 10000, onClose }: CelebrationOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const burstTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rainTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isRunningRef = useRef(false);
  const prevTriggerRef = useRef(false);

  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(Math.ceil(duration / 1000));

  const stopAll = useCallback(() => {
    isRunningRef.current = false;
    if (burstTimerRef.current) clearInterval(burstTimerRef.current);
    if (rainTimerRef.current) clearInterval(rainTimerRef.current);
    if (endTimerRef.current) clearTimeout(endTimerRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    cancelAnimationFrame(animFrameRef.current);
    particlesRef.current = [];
    setVisible(false);
    onClose?.();
  }, [onClose]);

  const startAnimation = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesRef.current = [];
    setVisible(true);
    setCountdown(Math.ceil(duration / 1000));

    countdownRef.current = setInterval(() => {
      setCountdown((c) => Math.max(0, c - 1));
    }, 1000);

    const fireBurst = () => {
      const x = randomBetween(canvas.width * 0.1, canvas.width * 0.9);
      const y = randomBetween(canvas.height * 0.05, canvas.height * 0.55);
      createFireworkBurst(x, y, 44, particlesRef.current);
    };

    fireBurst();
    setTimeout(fireBurst, 300);
    setTimeout(fireBurst, 700);
    burstTimerRef.current = setInterval(fireBurst, 850);
    rainTimerRef.current = setInterval(() => createRainConfetti(canvas.width, particlesRef.current), 50);

    const animate = () => {
      if (!isRunningRef.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);
      for (const p of particlesRef.current) {
        p.x += p.vx; p.y += p.vy; p.vy += p.gravity;
        p.vx *= 0.99; p.life -= 1 / p.maxLife; p.rotation += p.rotationSpeed;
        const alpha = Math.min(p.life * 2, 1);
        if (p.type === "star") {
          drawStar(ctx, p.x, p.y, p.size, p.color, alpha);
        } else if (p.type === "spark") {
          ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.45; ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
          ctx.stroke(); ctx.restore();
        } else {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation);
          ctx.globalAlpha = alpha; ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx.restore();
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    endTimerRef.current = setTimeout(stopAll, duration);
  }, [duration, stopAll]);

  useEffect(() => {
    if (trigger && !prevTriggerRef.current) {
      prevTriggerRef.current = true;
      startAnimation();
    } else if (!trigger && prevTriggerRef.current) {
      prevTriggerRef.current = false;
      stopAll();
    }
  }, [trigger, startAnimation, stopAll]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && visible) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visible]);

  return (
    <>
      {/* Dark backdrop — draws attention to the celebration */}
      {visible && (
        <div
          className="fixed inset-0"
          style={{
            zIndex: 99995,
            background: "rgba(5, 15, 35, 0.72)",
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Firework canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 99996, display: visible ? "block" : "none" }}
      />

      {/* Card */}
      {visible && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 99997, pointerEvents: "none" }}
        >
          <div
            className="pointer-events-auto text-center"
            style={{
              padding: "2rem 2.5rem 1.75rem",
              borderRadius: 20,
              width: "min(360px, 92vw)",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.06) 100%)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(24px)",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
              animation: "celebPop 0.7s cubic-bezier(0.175,0.885,0.32,1.275) both",
            }}
          >
            {/* Icon row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg,#1e40af,#2563eb)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.5)",
                }}
              >
                🦷
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <span style={{ fontSize: 26, lineHeight: 1, filter: "drop-shadow(0 0 6px rgba(255,215,0,0.8))" }}>⭐</span>
                <span style={{ fontSize: 18, lineHeight: 1, filter: "drop-shadow(0 0 4px rgba(255,165,0,0.7))" }}>🎂</span>
              </div>
              <div
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg,#2563eb,#1e40af)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.5)",
                }}
              >
                🦷
              </div>
            </div>

            {/* Badge pill */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background:
                  "linear-gradient(90deg,rgba(37,99,235,0.35),rgba(124,58,237,0.35))",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 100, padding: "5px 16px",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 8px #4ade80",
                  display: "inline-block",
                  animation: "celebPulse 1.4s infinite",
                }}
              />
              <span
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.09em",
                  color: "rgba(255,255,255,0.9)", textTransform: "uppercase",
                }}
              >
                5th Anniversary
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                margin: "0 0 0.3rem",
                fontSize: "clamp(1.55rem, 5vw, 2.1rem)",
                fontWeight: 800, lineHeight: 1.1,
                background:
                  "linear-gradient(135deg, #ffffff 0%, #bfdbfe 45%, #c4b5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              5 Years of<br />Healthy Smiles
            </h2>

            <p
              style={{
                margin: "0 0 1.25rem",
                fontSize: 12.5, fontWeight: 500,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              Sai Dental Clinic &nbsp;·&nbsp; Est. 2020
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "flex", justifyContent: "center", gap: 12,
                padding: "1rem", marginBottom: "1.25rem",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 14, border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {[
                { value: "5", label: "Years", color: "#60a5fa" },
                { value: "∞", label: "Smiles", color: "#a78bfa" },
                { value: "♥", label: "Trust", color: "#f472b6" },
              ].map((stat, i, arr) => (
                <div key={stat.label} style={{ display: "flex", alignItems: "stretch", gap: 12 }}>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "1.5rem", fontWeight: 700,
                        color: stat.color, lineHeight: 1, marginBottom: 2,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 10, color: "rgba(255,255,255,0.45)",
                        textTransform: "uppercase", letterSpacing: "0.07em",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        background: "rgba(255,255,255,0.12)",
                        alignSelf: "stretch",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={stopAll}
              style={{
                width: "100%", padding: "0.7rem 1.5rem",
                borderRadius: 100, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 700, letterSpacing: "0.04em",
                color: "white",
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                boxShadow: "0 4px 22px rgba(37,99,235,0.45)",
                transition: "opacity 0.2s, transform 0.1s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.opacity = "1"; }}
            >
              Close ({countdown}s)
            </button>

            <p
              style={{
                margin: "0.65rem 0 0",
                fontSize: 11, color: "rgba(255,255,255,0.3)",
              }}
            >
              Thank you for being part of our journey ✨
            </p>
          </div>

          <style>{`
            @keyframes celebPop {
              from { opacity: 0; transform: scale(0.6) translateY(28px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes celebPulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50%       { opacity: 0.55; transform: scale(1.5); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}