"use client";
import { useEffect, useState } from "react";

interface HiringPopupProps {
  trigger: boolean;
  delay?: number;
  onClose?: () => void;
}

export default function HiringPopup({
  trigger,
  delay = 2000,
  onClose,
}: HiringPopupProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, delay);
    return () => clearTimeout(t);
  }, [trigger, delay]);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setMounted(false);
      onClose?.();
    }, 350);
  };

  if (!mounted) return null;

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9998,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(4px)",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.35s ease",
  };

  const cardStyle: React.CSSProperties = {
    background: "linear-gradient(145deg, #e0f7f7 0%, #b2ebeb 100%)",
    borderRadius: "20px",
    maxWidth: 420,
    width: "100%",
    padding: "32px 28px 28px",
    position: "relative",
    boxShadow: "0 24px 60px rgba(0,120,120,0.25)",
    transform: visible ? "scale(1) translateY(0)" : "scale(0.88) translateY(30px)",
    transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
    textAlign: "center",
    fontFamily: "inherit",
  };

  const closeBtnStyle: React.CSSProperties = {
    position: "absolute",
    top: 14,
    right: 14,
    background: "#0a3d5c",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: 30,
    height: 30,
    cursor: "pointer",
    fontSize: 16,
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-block",
    background: "#0a3d5c",
    color: "#fff",
    borderRadius: 10,
    padding: "6px 18px",
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: 1,
  };

  const headlineStyle: React.CSSProperties = {
    color: "#0a3d5c",
    fontSize: "clamp(28px, 8vw, 42px)",
    fontWeight: 900,
    lineHeight: 1.1,
    margin: "12px 0 4px",
    textTransform: "uppercase",
    letterSpacing: -1,
  };

  const cardsRowStyle: React.CSSProperties = {
    display: "flex",
    gap: 16,
    marginTop: 20,
    textAlign: "left",
  };

  const infoCardStyle: React.CSSProperties = {
    flex: 1,
    background: "#fff",
    borderRadius: 14,
    padding: "14px 16px",
    boxShadow: "0 4px 12px rgba(0,120,120,0.1)",
  };

  const infoTitleStyle: React.CSSProperties = {
    fontWeight: 800,
    color: "#0a3d5c",
    fontSize: 13,
    marginTop: 4,
  };

  const infoDescStyle: React.CSSProperties = {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  };

  const locationStyle: React.CSSProperties = {
    margin: "16px 0 4px",
    fontSize: 13,
    color: "#0a3d5c",
    fontWeight: 600,
  };

  const ctaBtnStyle: React.CSSProperties = {
    display: "block",
    marginTop: 14,
    background: "#0a3d5c",
    color: "#fff",
    borderRadius: 12,
    padding: "12px 0",
    fontWeight: 800,
    fontSize: 20,
    textDecoration: "none",
    letterSpacing: 1,
  };

  const emailLinkStyle: React.CSSProperties = {
    display: "block",
    marginTop: 8,
    color: "#0a3d5c",
    fontSize: 12,
    fontWeight: 600,
    textDecoration: "none",
  };

  return (
    <div style={overlayStyle} onClick={close}>
      <div style={cardStyle} onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button onClick={close} style={closeBtnStyle} aria-label="Close">
          ×
        </button>

        {/* Brand badge */}
        <div style={{ marginBottom: 8 }}>
          <span style={badgeStyle}>🦷 SAI DENTAL CLINIC</span>
        </div>

        {/* Headline */}
        <h2 style={headlineStyle}>
          Now Hiring<br />
          <span style={{ color: "#c8860a" }}>Nurse</span>
        </h2>

        {/* Info cards */}
        <div style={cardsRowStyle}>
          <div style={infoCardStyle}>
            <div style={{ fontSize: 22 }}>🕐</div>
            <div style={infoTitleStyle}>FULL-TIME</div>
            <div style={infoDescStyle}>Requires dental experience</div>
          </div>
          <div style={infoCardStyle}>
            <div style={{ fontSize: 22 }}>🔄</div>
            <div style={infoTitleStyle}>PART-TIME</div>
            <div style={infoDescStyle}>Nursing students preferred or Experienced Nurse · Flexible hours</div>
          </div>
        </div>

        {/* Location */}
        <p style={locationStyle}>
          📍 Kenikarai Bus Stop, Thiruvarur Main Road
        </p>

        {/* CTA */}
        <a href="tel:8122835737" style={ctaBtnStyle}>
          📞 8122835737
        </a>
        <a href="mailto:saisri.dentalcare@gmail.com" style={emailLinkStyle}>
          ✉ saisri.dentalcare@gmail.com
        </a>

      </div>
    </div>
  );
}