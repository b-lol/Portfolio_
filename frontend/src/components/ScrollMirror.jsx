import { useEffect, useRef } from "react";
import "./ScrollMirror.css";

export default function ScrollMirror() {
  const slotRef = useRef(null);
  const imgRef = useRef(null);
  const dotRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let frame = null;
    let mouseX = 0;
    let mouseY = 0;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    if (isMobile) return;
    const update = () => {
    frame = null;
    const slot = slotRef.current;
    const track = trackRef.current;
    const img = imgRef.current;
    const dot = dotRef.current;
    if (!slot || !track || !img || !dot) return;

    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = docHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const travel = img.offsetHeight - slot.offsetHeight;
    track.style.transform = `translateY(${-progress * travel}px)`;

    const scale = img.offsetHeight / docHeight;
    const docY = window.scrollY + mouseY;
    const x = (mouseX / window.innerWidth) * slot.offsetWidth;
    dot.style.transform = `translate(${x}px, ${docY * scale}px)`;
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    schedule();
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("mousemove", onMouseMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={slotRef} className="mirror-slot">
    <div ref={trackRef} className="mirror-track">
        <img
        ref={imgRef}
        src="/images/portfolio-mirror.webp"
        alt="Live preview of this site scrolling"
        className="mirror-img"
        />
        <div ref={dotRef} className="mirror-cursor" aria-hidden="true" />
    </div>
    </div>
  );
}