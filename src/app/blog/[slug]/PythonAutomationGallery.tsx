"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/blog/python-automation-for-business.jpg", alt: "Python automation for business reports, files, data cleaning and integrations", caption: "Practical Python automation for repetitive business workflows." },
  { src: "/images/blog/python-automation-for-business-overview.jpg", alt: "Python automates Excel reporting, data cleaning and file management", caption: "Python supports repeatable reporting, data cleaning and file management." },
];

export default function PythonAutomationGallery() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    if (track.current) track.current.scrollTo({ left: next * track.current.clientWidth, behavior: "smooth" });
    setActive(next);
  };

  useEffect(() => {
    if (paused || interacting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive(current => {
        const next = (current + 1) % slides.length;
        if (track.current) track.current.scrollTo({ left: next * track.current.clientWidth, behavior: "smooth" });
        return next;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, interacting]);

  return (
    <figure
      className="article-carousel"
      aria-label="Python business automation visual guide"
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
