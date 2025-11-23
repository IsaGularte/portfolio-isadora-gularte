import { useEffect, useRef } from "react";

const Background3DGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid settings
      const gridSize = 50;
      const perspective = 600;
      const horizonY = canvas.height * 0.7;

      // Draw grid lines
      ctx.strokeStyle = "rgba(0, 255, 255, 0.3)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = -canvas.width; x < canvas.width * 2; x += gridSize) {
        ctx.beginPath();
        const startX = x + offset % gridSize;
        const vanishPointX = canvas.width / 2;
        ctx.moveTo(startX, canvas.height);
        ctx.lineTo(vanishPointX, horizonY);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 0; i < 20; i++) {
        const y = horizonY + (canvas.height - horizonY) * (i / 20);
        const progress = i / 20;
        const width = canvas.width * (1 - progress * 0.8);

        ctx.beginPath();
        ctx.moveTo((canvas.width - width) / 2, y);
        ctx.lineTo((canvas.width + width) / 2, y);
        ctx.stroke();
      }

      offset += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default Background3DGrid;
