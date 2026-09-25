"use client";

export default function SmokeEffect({
  opacity = 0.5,
  className = "",
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity,
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
