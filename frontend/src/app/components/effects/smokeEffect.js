"use client";

export default function SmokeEffect({
  opacity = 0.45,
  className = "",
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
        style={{
          opacity,
        }}

      >
        <source
          src="/smokeEffect/smoke.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}