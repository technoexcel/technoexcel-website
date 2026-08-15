"use client";

import React, { useEffect, useRef, useState } from "react";

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

const MAJOR_ECONOMY_MARKETS = [
  { name: "United States", lat: 40.7128, lng: -74.006 },
  { name: "China", lat: 39.9042, lng: 116.4074 },
  { name: "Japan", lat: 35.6762, lng: 139.6503 },
  { name: "Germany", lat: 52.52, lng: 13.405 },
  { name: "United Kingdom", lat: 51.5072, lng: -0.1276 },
  { name: "France", lat: 48.8566, lng: 2.3522 },
  { name: "Italy", lat: 41.9028, lng: 12.4964 },
  { name: "Canada", lat: 43.6532, lng: -79.3832 },
  { name: "Brazil", lat: -23.5558, lng: -46.6396 },
  { name: "Russia", lat: 55.7558, lng: 37.6173 },
  { name: "South Korea", lat: 37.5665, lng: 126.978 },
  { name: "Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Spain", lat: 40.4168, lng: -3.7038 },
  { name: "Mexico", lat: 19.4326, lng: -99.1332 },
  { name: "Indonesia", lat: -6.2088, lng: 106.8456 },
  { name: "Netherlands", lat: 52.3676, lng: 4.9041 },
  { name: "Turkey", lat: 41.0082, lng: 28.9784 },
  { name: "Saudi Arabia", lat: 24.7136, lng: 46.6753 },
  { name: "Switzerland", lat: 47.3769, lng: 8.5417 },
  { name: "Poland", lat: 52.2297, lng: 21.0122 },
  { name: "Taiwan", lat: 25.033, lng: 121.5654 },
  { name: "Belgium", lat: 50.8503, lng: 4.3517 },
  { name: "Argentina", lat: -34.6037, lng: -58.3816 },
  { name: "Sweden", lat: 59.3293, lng: 18.0686 },
  { name: "Ireland", lat: 53.3498, lng: -6.2603 },
  { name: "Thailand", lat: 13.7563, lng: 100.5018 },
  { name: "Austria", lat: 48.2082, lng: 16.3738 },
  { name: "Norway", lat: 59.9139, lng: 10.7522 },
  { name: "UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Malaysia", lat: 3.139, lng: 101.6869 },
  { name: "Philippines", lat: 14.5995, lng: 120.9842 },
  { name: "Vietnam", lat: 21.0278, lng: 105.8342 },
  { name: "South Africa", lat: -26.2041, lng: 28.0473 },
  { name: "Denmark", lat: 55.6761, lng: 12.5683 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "Egypt", lat: 30.0444, lng: 31.2357 },
  { name: "Bangladesh", lat: 23.8103, lng: 90.4125 },
  { name: "Nigeria", lat: 6.5244, lng: 3.3792 },
  { name: "Israel", lat: 32.0853, lng: 34.7818 },
];

const ARCS = MAJOR_ECONOMY_MARKETS.map((market, index) => ({
  startLat: 17.385,
  startLng: 78.4867,
  endLat: market.lat,
  endLng: market.lng,
  altitude: 0.16 + (index % 5) * 0.025,
  delay: index / MAJOR_ECONOMY_MARKETS.length,
}));

const DESKTOP_LOGO_POSITION_GROUPS = [
  [{ x: 2, y: 16 }, { x: 68, y: 14 }, { x: 28, y: 78 }],
  [{ x: 0, y: 48 }, { x: 62, y: 2 }, { x: 70, y: 62 }],
  [{ x: 18, y: 4 }, { x: 74, y: 36 }, { x: 34, y: 70 }],
  [{ x: 4, y: 68 }, { x: 56, y: 12 }, { x: 66, y: 52 }],
];

const MOBILE_LOGO_POSITION_GROUPS = [
  [{ x: 2, y: 14 }, { x: 50, y: 2 }],
  [{ x: 0, y: 54 }, { x: 52, y: 22 }],
  [{ x: 18, y: 2 }, { x: 48, y: 60 }],
  [{ x: 4, y: 34 }, { x: 42, y: 8 }],
];

type VisibleLogo = {
  id: string;
  name: string;
  logo: string;
  x: number;
  y: number;
};

function shuffleItems<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getBatchSize(remainingCount: number, isMobile: boolean) {
  if (isMobile) return Math.min(2, remainingCount);
  if (remainingCount === 4 || remainingCount === 2) return 2;
  return Math.min(3, remainingCount);
}

function pickVisibleLogos(round: number, deck: typeof CLIENTS, isMobile: boolean): { visibleLogos: VisibleLogo[]; nextDeck: typeof CLIENTS } {
  let nextDeck = deck.length ? [...deck] : shuffleItems(CLIENTS);
  const count = getBatchSize(nextDeck.length, isMobile);
  const selectedClients = nextDeck.slice(0, count);
  nextDeck = nextDeck.slice(count);
  const positionGroups = isMobile ? MOBILE_LOGO_POSITION_GROUPS : DESKTOP_LOGO_POSITION_GROUPS;
  const positions = positionGroups[round % positionGroups.length];

  return {
    visibleLogos: selectedClients.map((client, index) => ({
    id: `${round}-${client.name}`,
    name: client.name,
    logo: client.logo,
    x: positions[index].x,
    y: positions[index].y,
    })),
    nextDeck,
  };
}

export default function TrustedClientGlobe() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const logoDeckRef = useRef<typeof CLIENTS>([]);
  const [visibleLogos, setVisibleLogos] = useState<VisibleLogo[]>([
    { id: "initial-coromandel", name: "Coromandel", logo: "/images/clients/coromandel.png", x: 4, y: 13 },
    { id: "initial-diversey", name: "Diversey", logo: "/images/clients/diversey.png", x: 76, y: 38 },
    { id: "initial-times", name: "Times Group", logo: "/images/clients/times-group.png", x: 18, y: 76 },
  ]);

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
      const THREE = await import("three");
      if (destroyed || !mount) return;
      const countries = await fetch("/data/world-countries.geojson").then((response) => response.json());
      if (destroyed || !mount) return;

      globe = new Globe(mount, { rendererConfig: { antialias: true, alpha: true }, animateIn: false, waitForGlobeReady: false })
        .backgroundColor("rgba(0,0,0,0)")
        .globeMaterial(new THREE.MeshPhongMaterial({
          color: "#d9d5c9",
          emissive: "#171a1b",
          emissiveIntensity: 0.12,
          shininess: 24,
          specular: "#ffffff",
        }))
        .showGraticules(true)
        .showAtmosphere(true)
        .atmosphereColor("#e7dfd1")
        .atmosphereAltitude(0.16)
        .polygonsData(countries.features)
        .polygonAltitude(0.008)
        .polygonCapColor(() => "rgba(178,18,32,.88)")
        .polygonSideColor(() => "rgba(92,10,18,.34)")
        .polygonStrokeColor(() => "rgba(255,255,255,.62)")
        .polygonLabel(() => "")
        .labelsData(CITIES)
        .labelLat("lat")
        .labelLng("lng")
        .labelText("name")
        .labelSize(0.72)
        .labelDotRadius("size")
        .labelColor(() => "rgba(255,255,255,.94)")
        .labelResolution(2)
        .labelAltitude(0.018)
        .arcsData(ARCS)
        .arcStartLat("startLat")
        .arcStartLng("startLng")
        .arcEndLat("endLat")
        .arcEndLng("endLng")
        .arcColor(() => ["rgba(255,255,255,.5)", "rgba(255,255,255,.95)"])
        .arcAltitude("altitude")
        .arcStroke(0.34)
        .arcDashLength(0.82)
        .arcDashGap(0.18)
        .arcDashInitialGap("delay")
        .arcDashAnimateTime(3600)
        .ringsData(CITIES.slice(0, 5))
        .ringLat("lat")
        .ringLng("lng")
        .ringColor(() => "rgba(238,35,84,.38)")
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

  useEffect(() => {
    let round = 1;
    const rotateLogos = () => {
      const isMobile = window.innerWidth <= 768;
      const { visibleLogos: nextVisibleLogos, nextDeck } = pickVisibleLogos(round, logoDeckRef.current, isMobile);
      logoDeckRef.current = nextDeck;
      setVisibleLogos(nextVisibleLogos);
      round += 1;
    };

    logoDeckRef.current = shuffleItems(CLIENTS);
    rotateLogos();
    const timer = window.setInterval(rotateLogos, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="te-client-globe" aria-label="Trusted client network">
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .te-client-globe{position:relative;min-height:460px;width:100%;display:flex;align-items:center;justify-content:center;overflow:visible}
        .te-client-globe:before{content:"";position:absolute;width:450px;height:450px;border-radius:50%;background:radial-gradient(circle,rgba(238,35,84,.18),rgba(246,242,232,.08) 42%,transparent 68%);filter:blur(4px)}
        .te-globe-canvas{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;width:min(420px,100%)}
        .te-globe-canvas canvas{display:block!important}
        .te-client-card{position:absolute;z-index:4;width:134px;height:72px;display:flex;align-items:center;justify-content:center;padding:14px 18px;border-radius:16px;background:rgba(255,255,255,.95);box-shadow:0 18px 45px rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.42);transform:translate3d(0,0,0) scale(1);animation:te-client-pop 2.6s ease-in-out both}
        .te-client-card img{max-width:100%;max-height:44px;object-fit:contain;filter:saturate(.95)}
        @keyframes te-client-pop{0%,100%{opacity:0;transform:translate3d(0,8px,0) scale(.96)}12%,78%{opacity:1;transform:translate3d(0,0,0) scale(1)}}
        @media(max-width:1024px){.te-client-globe{min-height:410px}.te-client-card{width:120px;height:64px}}
        @media(max-width:768px){.te-client-globe{min-height:340px;margin-top:28px}.te-client-globe:before{width:330px;height:330px}.te-globe-canvas{width:310px}.te-client-card{width:104px;height:58px;padding:12px}}
        @media(prefers-reduced-motion:reduce){.te-client-card{animation:none;opacity:1}}
      ` }} />
      <div ref={mountRef} className="te-globe-canvas" />
      {visibleLogos.map((client) => (
        <div key={client.id} className="te-client-card" style={{ left: `${client.x}%`, top: `${client.y}%` }}>
          <img src={client.logo} alt={client.name} />
        </div>
      ))}
    </div>
  );
}
