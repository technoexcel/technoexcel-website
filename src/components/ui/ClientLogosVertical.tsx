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

interface Props {
  height?: number;
  speed?: number;
}

export default function ClientLogosVertical({ height = 420, speed = 30 }: Props) {
  return (
    <div style={{
      height,
      overflow: "hidden",
      position: "relative",
      width: "100%",
    }}>
      {/* top + bottom fade */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(to bottom, #0d1f2d 0%, transparent 15%, transparent 85%, #0d1f2d 100%)",
      }} />
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        @keyframes te-logos-up{from{transform:translateY(0)}to{transform:translateY(-50%)}}
        .te-logos-v-track{display:flex;flex-direction:column;align-items:center;gap:20px;animation:te-logos-up ${speed}s linear infinite}
        .te-logos-v-track:hover{animation-play-state:paused}
        .te-logos-v-item{display:flex;align-items:center;justify-content:center;flex-shrink:0;background:rgba(255,255,255,0.92);border-radius:12px;padding:18px 28px;transition:background 0.3s ease,transform 0.2s ease,box-shadow 0.2s ease;cursor:default;box-shadow:0 2px 12px rgba(0,0,0,0.18)}
        .te-logos-v-item:hover{background:rgba(255,255,255,1);transform:scale(1.05);box-shadow:0 4px 20px rgba(0,0,0,0.28)}
      `}} />
      <div className="te-logos-v-track">
        {TRACK.map((client, i) => (
          <div key={i} className="te-logos-v-item" title={client.name}>
            <div style={{ width: client.width, height: 44, position: "relative", flexShrink: 0 }}>
              <Image
                src={`/images/clients/${client.file}.png`}
                alt={client.name}
                fill
                style={{ objectFit: "contain" }}
                sizes={`${client.width}px`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
