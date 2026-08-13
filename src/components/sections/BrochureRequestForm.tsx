"use client";
import React, { useState } from "react";

const S = "'Plus Jakarta Sans',system-ui,sans-serif";
const INK = "#13293C";
const RED = "#EE2354";

interface Props {
  courseTitle: string;
}

export default function BrochureRequestForm({ courseTitle }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const set = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          interest: "Course outline request",
          courseTitle,
          source: `Course outline request - ${courseTitle}`,
          message: form.message || "Please share the detailed course outline.",
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  const inputStyle = (key: keyof typeof form): React.CSSProperties => ({
    width: "100%",
    padding: "11px 13px",
    border: `1.5px solid ${errors[key] ? RED : "rgba(19,41,60,.12)"}`,
    borderRadius: 10,
    fontSize: 13,
    fontFamily: S,
    color: INK,
    background: "#fff",
    outline: "none",
  });

  if (state === "done") {
    return (
      <div style={{ background: "#fff", border: "1px solid rgba(19,41,60,.08)", borderRadius: 14, padding: 22, marginTop: 20, marginBottom: 36 }}>
        <div style={{ fontFamily: S, fontWeight: 700, fontSize: 16, color: INK, marginBottom: 6 }}>Request received</div>
        <p style={{ fontSize: 13, color: "rgba(19,41,60,.68)", lineHeight: 1.65, margin: 0 }}>
          Thanks. We will share the detailed outline and help you choose the right format for this course.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", border: "1px solid rgba(19,41,60,.08)", borderRadius: 14, padding: 22, marginTop: 20, marginBottom: 36 }}>
      <div style={{ fontFamily: S, fontWeight: 700, fontSize: 17, color: INK, marginBottom: 6 }}>Get the detailed course outline</div>
      <p style={{ fontSize: 13, color: "rgba(19,41,60,.62)", lineHeight: 1.65, marginBottom: 16 }}>
        Share minimal contact details and we will send the outline with suitable duration and delivery options.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <div>
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => set("name", e.target.value)} style={inputStyle("name")} />
          {errors.name && <div style={{ fontSize: 11, color: RED, marginTop: 3 }}>{errors.name}</div>}
        </div>
        <input type="tel" placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => set("phone", e.target.value)} style={inputStyle("phone")} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => set("email", e.target.value)} style={inputStyle("email")} />
        {errors.email && <div style={{ fontSize: 11, color: RED, marginTop: 3 }}>{errors.email}</div>}
      </div>
      <div style={{ marginBottom: 14 }}>
        <textarea placeholder="Mention your requirement (optional)" value={form.message} onChange={(e) => set("message", e.target.value)} style={{ ...inputStyle("message"), height: 74, resize: "vertical" }} />
      </div>
      <button onClick={submit} disabled={state === "loading"} style={{ width: "100%", background: state === "loading" ? "rgba(238,35,84,.62)" : RED, color: "#fff", fontFamily: S, fontWeight: 700, fontSize: 14, padding: 13, borderRadius: 10, border: "none", cursor: state === "loading" ? "not-allowed" : "pointer" }}>
        {state === "loading" ? "Sending..." : "Send Outline Request"}
      </button>
      {state === "error" && <div style={{ fontSize: 12, color: RED, marginTop: 10, textAlign: "center" }}>Could not send right now. Please try WhatsApp or call us.</div>}
    </div>
  );
}
