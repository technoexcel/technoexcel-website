"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      const clickedInsideMenu = menuRef.current?.contains(target);
      const clickedButton = buttonRef.current?.contains(target);
      if (!clickedInsideMenu && !clickedButton) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const links = Array.isArray(NAV_LINKS) ? NAV_LINKS : [];
  const logoSrc = "/images/logo-light.png";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          background: "rgba(255,255,255,.98)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(19,41,60,.08)",
          transition: "none"
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            height: 72,
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
          }}
        >
          <Link
            href="/"
            style={{
              flexShrink: 0,
              lineHeight: 0,
              display: "inline-flex",
              alignItems: "center"
            }}
          >
            <img
              src={logoSrc}
              alt="TechnoExcel"
              style={{
                height: 38,
                width: "auto",
                display: "block"
              }}
            />
          </Link>

          <div
            className="desktop-only"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              minWidth: 0,
              marginLeft: 20,
              marginRight: 20
            }}
          >
            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    padding: "9px 12px",
                    borderRadius: 10,
                    color: active ? "#EE2354" : "rgba(19,41,60,.78)",
                    textDecoration: "none",
                    background: active ? "rgba(238,35,84,.08)" : "transparent",
                    transition: "color .2s ease, background .2s ease",
                    whiteSpace: "nowrap"
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div
            className="desktop-only"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0
            }}
          >
            <a
              href={`tel:${SITE.phone}`}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "10px 18px",
                borderRadius: 12,
                border: "1px solid rgba(19,41,60,.14)",
                color: "rgba(19,41,60,.60)",
                textDecoration: "none",
                lineHeight: 1,
                whiteSpace: "nowrap"
              }}
            >
              Call
            </a>

            <Link
              href="/contact"
              style={{
                fontSize: 13,
                fontWeight: 700,
                padding: "12px 20px",
                borderRadius: 12,
                background: "#EE2354",
                color: "#fff",
                textDecoration: "none",
                lineHeight: 1,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(238,35,84,.22)"
              }}
            >
              Book Strategy Call
            </Link>
          </div>

          <button
            ref={buttonRef}
            className="mobile-menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              color: "#13293C",
              display: "none",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              top: 72,
              background: "rgba(6,18,30,.34)",
              zIndex: 298
            }}
            onClick={() => setOpen(false)}
          />

          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: 72,
              left: 12,
              right: 12,
              zIndex: 299,
              background: "#fff",
              border: "1px solid rgba(19,41,60,.08)",
              borderRadius: 16,
              boxShadow: "0 20px 50px rgba(6,18,30,.16)",
              padding: "10px 16px 16px"
            }}
          >
            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "13px 4px",
                    borderBottom: "1px solid rgba(19,41,60,.06)",
                    fontSize: 15,
                    fontWeight: active ? 700 : 500,
                    color: active ? "#EE2354" : "rgba(19,41,60,.78)",
                    textDecoration: "none"
                  }}
                >
                  {l.label}
                </Link>
              );
            })}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: 16
              }}
            >
              <a
                href={`tel:${SITE.phone}`}
                style={{
                  textAlign: "center",
                  padding: 12,
                  border: "1px solid rgba(19,41,60,.12)",
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(19,41,60,.66)",
                  textDecoration: "none"
                }}
              >
                Call
              </a>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  textAlign: "center",
                  padding: 12,
                  background: "#EE2354",
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none"
                }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </>
      )}

      <div style={{ height: 72 }} />
    </>
  );
}