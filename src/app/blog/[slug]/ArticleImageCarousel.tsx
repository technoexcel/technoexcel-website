"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/blog/microsoft-office-certification/guide.jpg", alt: "Guide to Microsoft Office certification across Excel, Word and PowerPoint", caption: "Microsoft Office certification validates practical application skills." },
  { src: "/images/blog/microsoft-office-certification/path.jpg", alt: "Microsoft Office Specialist certification path from Associate to Expert", caption: "The MOS pathway progresses from Associate-level foundations to Expert credentials." },
  { src: "/images/blog/microsoft-office-certification/excel-skills.jpg", alt: "Microsoft Excel certification skills and Associate to Expert exam path", caption: "Excel certification covers practical data, formula, reporting and analysis skills." },
  { src: "/images/blog/microsoft-office-certification/exam-preparation.jpg", alt: "Six-step preparation roadmap for a Microsoft Office Specialist exam", caption: "A focused plan combines exam objectives, hands-on practice and readiness checks." },
];

export default function ArticleImageCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    track.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActive(next);
  };

  useEffect(() => {
    if (paused || interacting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive(current => {
        const next = (current + 1) % slides.length;
        track.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        return next;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, interacting]);

  return (
    <figure
      className="article-carousel"
      aria-label="Microsoft Office certification visual guide"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
      }}
    >
      <div className="carousel-track" ref={track} onScroll={() => {
        const node = track.current;
        if (!node || !node.clientWidth) return;
        setActive(Math.round(node.scrollLeft / node.clientWidth));
      }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={slide.src} aria-hidden={active !== index}>
            <img src={slide.src} alt={slide.alt} width={1536} height={1024} loading={index === 0 ? "eager" : "lazy"} />
            <figcaption>{slide.caption}</figcaption>
          </div>
        ))}
      </div>
      <button className="carousel-arrow previous" type="button" onClick={() => goTo(active - 1)} aria-label="Show previous image">&#8592;</button>
      <button className="carousel-arrow next" type="button" onClick={() => goTo(active + 1)} aria-label="Show next image">&#8594;</button>
      <div className="carousel-controls" aria-label="Choose carousel image">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" className={index === active ? "active" : ""} onClick={() => goTo(index)} aria-label={`Show image ${index + 1} of ${slides.length}`} aria-current={index === active ? "true" : undefined} />
        ))}
        <button
          type="button"
          className="carousel-toggle"
          onClick={() => setPaused(value => !value)}
          aria-label={paused ? "Resume automatic image scrolling" : "Pause automatic image scrolling"}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </figure>
  );
}
