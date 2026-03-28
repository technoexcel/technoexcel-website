"use client";
import Image from "next/image";

const CLIENTS = [
  { name:"Star India",        file:"star-india",        width:80  },
  { name:"Times Group",       file:"times-group",       width:110 },
  { name:"Genpact",           file:"genpact",           width:100 },
  { name:"Uber",              file:"uber",              width:72  },
  { name:"Nuance",            file:"nuance",            width:100 },
  { name:"Tata Power",        file:"tata-power",        width:110 },
  { name:"Gabriel",           file:"gabriel",           width:90  },
  { name:"Coromandel",        file:"coromandel",        width:120 },
  { name:"Nagarjuna Group",   file:"nagarjuna",         width:100 },
  { name:"Diversey",          file:"diversey",          width:100 },
  { name:"General Mills",     file:"general-mills",     width:110 },
  { name:"HM Clause",         file:"hm-clause",         width:100 },
  { name:"Amara Raja",        file:"amara-raja",        width:110 },
  { name:"Signode",           file:"signode",           width:100 },
  { name:"Kirby",             file:"kirby",             width:90  },
  { name:"UPL",               file:"upl",               width:72  },
  { name:"Jupiter",           file:"jupiter",           width:80  },
  { name:"JK Paper",          file:"jk-paper",          width:80  },
  { name:"Bekem Infra",       file:"bekem",             width:100 },
  { name:"Aragen",            file:"aragen",            width:90  },
];

const TRACK = [...CLIENTS, ...CLIENTS];

export default function ClientLogosStrip() {
  return (
    // className="te-logo-strip" ← global CSS excludes this section from side padding
    <section className="te-logo-strip" style={{
      background:"#f4f2ee",
      borderTop:"1px solid rgba(0,0,0,0.07)",
      borderBottom:"1px solid rgba(0,0,0,0.07)",
      padding:"28px 0",
      overflow:"hidden",
      position:"relative",
    }}>
      <div style={{
        position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
        background:"linear-gradient(to right, #f4f2ee 0%, transparent 8%, transparent 92%, #f4f2ee 100%)",
      }} />
      <style>{`
        @keyframes te-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .te-logos-track {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          animation: te-scroll 36s linear infinite;
        }
        .te-logos-track:hover { animation-play-state: paused; }
        .te-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          filter: grayscale(100%) brightness(0.7);
          opacity: 0.55;
          transition: filter 0.35s ease, opacity 0.35s ease, transform 0.25s ease;
          cursor: default;
        }
        .te-logo-item:hover {
          filter: grayscale(0%) brightness(1);
          opacity: 1;
          transform: scale(1.06);
        }
      `}</style>
      <div className="te-logos-track">
        {TRACK.map((client, i) => (
          <div key={i} className="te-logo-item" title={client.name}
            style={{ width:client.width, height:40, position:"relative", flexShrink:0 }}>
            <Image
              src={`/images/clients/${client.file}.png`}
              alt={client.name}
              fill
              style={{ objectFit:"contain" }}
              sizes={`${client.width}px`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
