"use client";

import React, { useEffect, useRef } from "react";

const CLIENTS = [
  { name: "Coromandel", logo: "/images/clients/coromandel.png", x: 6, y: 15, delay: "0s", mobile: true },
  { name: "Diversey", logo: "/images/clients/diversey.png", x: 63, y: 7, delay: "1.5s", mobile: true },
  { name: "Times Group", logo: "/images/clients/times-group.png", x: 70, y: 39, delay: "3s", mobile: true },
  { name: "Nagarjuna", logo: "/images/clients/nagarjuna.png", x: 61, y: 68, delay: "4.5s", mobile: true },
  { name: "UPL", logo: "/images/clients/upl.png", x: 4, y: 61, delay: "6s", mobile: true },
  { name: "Amara Raja", logo: "/images/clients/amara-raja.png", x: 28, y: 80, delay: "7.5s", mobile: true },
  { name: "Aragen", logo: "/images/clients/aragen.png", x: 15, y: 31, delay: "9s", mobile: true },
  { name: "Bekem", logo: "/images/clients/bekem.png", x: 55, y: 84, delay: "10.5s", mobile: true },
  { name: "Gabriel", logo: "/images/clients/gabriel.png", x: 76, y: 20, delay: "12s", mobile: true },
  { name: "General Mills", logo: "/images/clients/general-mills.png", x: 0, y: 42, delay: "13.5s", mobile: true },
  { name: "Genpact", logo: "/images/clients/genpact.png", x: 43, y: 3, delay: "15s", mobile: true },
  { name: "HM Clause", logo: "/images/clients/hm-clause.png", x: 72, y: 56, delay: "16.5s", mobile: true },
  { name: "JK Paper", logo: "/images/clients/jk-paper.png", x: 18, y: 73, delay: "18s", mobile: true },
  { name: "Jupiter", logo: "/images/clients/jupiter.png", x: 50, y: 18, delay: "19.5s", mobile: true },
  { name: "Kirby", logo: "/images/clients/kirby.png", x: 78, y: 74, delay: "21s", mobile: true },
  { name: "Nuance", logo: "/images/clients/nuance.png", x: 10, y: 5, delay: "22.5s", mobile: true },
  { name: "Client", logo: "/images/clients/Picture9.png", x: 36, y: 66, delay: "24s", mobile: true },
  { name: "SeedWorks", logo: "/images/clients/seedworks.png", x: 67, y: 2, delay: "25.5s", mobile: true },
  { name: "Signode", logo: "/images/clients/signode.png", x: 3, y: 78, delay: "27s", mobile: true },
  { name: "Star India", logo: "/images/clients/star-india.png", x: 80, y: 45, delay: "28.5s", mobile: true },
  { name: "Tata Power", logo: "/images/clients/tata-power.png", x: 24, y: 2, delay: "30s", mobile: true },
  { name: "Uber", logo: "/images/clients/uber.png", x: 47, y: 82, delay: "31.5s", mobile: true },
];

const CITIES = [
  { name: "Hyderabad", lat: 17.385, lng: 78.4867, size: 0.32 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777, size: 0.2 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, size: 0.2 },
  { name: "Delhi", lat: 28.6139, lng: 77.209, size: 0.2 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, size: 0.26 },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018, size: 0.18 },
  { name: "Jakarta", lat: -6.2088, lng: 106.8456, size: 0.18 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, size: 0.22 },
  { name: "London", lat: 51.5072, lng: -0.1276, size: 0.18 },
  { name: "New York", lat: 40.7128, lng: -74.006, size: 0.18 },
];

const ARCS = CITIES.filter((city) => city.name !== "Hyderabad").map((city) => ({
  startLat: 17.385,
  startLng: 78.4867,
  endLat: city.lat,
  endLng: city.lng,
}));

export default function TrustedClientGlobe() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let destroyed = false;
    let globe: any;

    const resize = () => {
      if (!globe || !mount) return;
      const width = window.innerWidth <= 768 ? 310 : Math.min(mount.clientWidth || 420, 420);
      globe.width(width).height(width);
    };

    (async () => {
      const Globe = (await import("globe.gl")).default;
      if (destroyed || !mount) return;

      globe = new Globe(mount, { rendererConfig: { antialias: true, alpha: true }, animateIn: false, waitForGlobeReady: false })
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl("/images/globe/earth-blue-marble.jpg")
        .showAtmosphere(true)
        .atmosphereColor("#48d9ff")
        .atmosphereAltitude(0.22)
        .labelsData(CITIES)
        .labelLat("lat")
        .labelLng("lng")
        .labelText("name")
        .labelSize(0.72)
        .labelDotRadius("size")
        .labelColor(() => "rgba(220,252,255,.95)")
        .labelResolution(2)
        .labelAltitude(0.018)
        .arcsData(ARCS)
        .arcStartLat("startLat")
        .arcStartLng("startLng")
        .arcEndLat("endLat")
        .arcEndLng("endLng")
        .arcColor(() => ["rgba(126,232,255,.26)", "rgba(46,211,255,.96)"])
        .arcAltitude(0.24)
        .arcStroke(0.45)
        .arcDashLength(0.32)
        .arcDashGap(1.15)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(4200)
        .ringsData(CITIES.slice(0, 5))
        .ringLat("lat")
        .ringLng("lng")
        .ringColor(() => "rgba(126,232,255,.42)")
        .ringMaxRadius(3.2)
        .ringPropagationSpeed(1.4)
        .ringRepeatPeriod(1800);

      resize();
      globe.pointOfView({ lat: 18, lng: 70, altitude: 2.25 }, 0);

      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.55;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.rotateSpeed = 0.35;

      window.addEventListener("resize", resize);
    })();

    return () => {
      destroyed = true;
      window.removeEventListener("resize", resize);
      if (globe?._destructor) globe._destructor();
      if (mount) mount.innerHTML = "";
    };
  }, []);

  return (
    <div className="te-client-globe" aria-label="Trusted client network">
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .te-client-globe{position:relative;min-height:460px;width:100%;display:flex;align-items:center;justify-content:center;overflow:visible}
        .te-client-globe:before{content:"";position:absolute;width:450px;height:450px;border-radius:50%;background:radial-gradient(circle,rgba(46,211,255,.22),rgba(26,67,94,.08) 42%,transparent 68%);filter:blur(4px)}
        .te-globe-canvas{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:min(420px,100%)}
        .te-globe-canvas canvas{display:block!important}
        .te-client-card{position:absolute;z-index:4;width:134px;height:72px;display:flex;align-items:center;justify-content:center;padding:14px 18px;border-radius:16px;background:rgba(255,255,255,.95);box-shadow:0 18px 45px rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.42);opacity:0;transform:translate3d(0,8px,0) scale(.96);animation:te-client-sequence 33s ease-in-out infinite;animation-delay:var(--delay)}
        .te-client-card img{max-width:100%;max-height:44px;object-fit:contain;filter:saturate(.95)}
        @keyframes te-client-sequence{0%,3%,100%{opacity:0;transform:translate3d(0,8px,0) scale(.96)}4.5%,8%{opacity:1;transform:translate3d(0,0,0) scale(1)}9.5%,99%{opacity:0;transform:translate3d(0,-8px,0) scale(.98)}}
        @media(max-width:1024px){.te-client-globe{min-height:410px}.te-client-card{width:120px;height:64px}}
        @media(max-width:768px){.te-client-globe{min-height:340px;margin-top:28px}.te-client-globe:before{width:330px;height:330px}.te-globe-canvas{width:310px}.te-client-card{width:104px;height:58px;padding:12px}.te-client-card[data-mobile="hide"]{display:none}}
        @media(prefers-reduced-motion:reduce){.te-client-card{animation:none;opacity:1}.te-client-card[data-mobile="hide"]{display:none}}
      ` }} />
      <div ref={mountRef} className="te-globe-canvas" />
      {CLIENTS.map((client) => (
        <div key={client.name} className="te-client-card" data-mobile={client.mobile ? "show" : "hide"} style={{ left: `${client.x}%`, top: `${client.y}%`, ["--delay" as string]: client.delay }}>
          <img src={client.logo} alt={client.name} />
        </div>
      ))}
    </div>
  );
}
