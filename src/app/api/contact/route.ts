import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO     = process.env.CONTACT_EMAIL || "connect@technoexcel.in";

function san(v: unknown): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, 500).replace(/<[^>]*>/g, "");
}

export async function POST(req: NextRequest) {
  try {
    const b    = await req.json();
    if (b.website) return NextResponse.json({ success:true }); // honeypot
    const name    = san(b.name);
    const email   = san(b.email);
    const phone   = san(b.phone);
    const company = san(b.company);
    const course  = san(b.courseTitle || b.course);
    const interest= san(b.interest);
    const message = san(b.message || b.goal);
    const source  = san(b.source || "Website");

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error:"Name and valid email required" }, { status:400 });

    const ts = new Date().toLocaleString("en-IN", { timeZone:"Asia/Kolkata" });

    const internal = `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:600px;margin:0 auto">
<div style="background:#0d1f2d;padding:20px;border-radius:8px 8px 0 0">
  <h2 style="color:#fff;margin:0;font-size:18px">New Lead — TechnoExcel</h2>
  <p style="color:rgba(255,255,255,.5);font-size:12px;margin:4px 0 0">${ts}</p>
</div>
<div style="background:#f8f7f4;padding:20px;border-radius:0 0 8px 8px;border:1px solid #e0ddd8">
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px;width:100px">Name</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;font-weight:600">${name}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px">Email</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8"><a href="mailto:${email}">${email}</a></td></tr>
    ${phone?`<tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px">Phone</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8"><a href="https://api.whatsapp.com/send?phone=${phone.replace(/\D/g,"")}">${phone}</a></td></tr>`:""}
    ${company?`<tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px">Company</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8">${company}</td></tr>`:""}
    ${course?`<tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px">Course</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#EE2354;font-weight:700">${course}</td></tr>`:""}
    ${interest?`<tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px">Interest</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8">${interest}</td></tr>`:""}
    ${message?`<tr><td style="padding:8px 0;border-bottom:1px solid #e0ddd8;color:#666;font-size:12px;vertical-align:top">Message</td><td style="padding:8px 0;border-bottom:1px solid #e0ddd8">${message}</td></tr>`:""}
    <tr><td style="padding:8px 0;color:#666;font-size:12px">Source</td><td style="padding:8px 0">${source}</td></tr>
  </table>
  <div style="margin-top:16px;display:flex;gap:10px">
    <a href="mailto:${email}" style="background:#EE2354;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">Reply by Email</a>
    ${phone?`<a href="https://api.whatsapp.com/send?phone=${phone.replace(/\D/g,"")}&text=Hi ${name.split(" ")[0]}!" style="background:#25D366;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">WhatsApp</a>`:""}
  </div>
</div></body></html>`;

    const autoReply = `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:600px;margin:0 auto">
<div style="background:#0d1f2d;padding:28px;border-radius:8px 8px 0 0;text-align:center">
  <h1 style="color:#fff;font-size:22px;margin:0">Thanks, ${name.split(" ")[0]}!</h1>
  <p style="color:rgba(255,255,255,.5);margin:6px 0 0;font-size:14px">We&apos;ll reply within 2 hours.</p>
</div>
<div style="background:#f8f7f4;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e0ddd8">
  ${course?`<p style="background:#fff;border-left:3px solid #EE2354;padding:10px 14px;margin:0 0 16px;font-size:14px">Your enquiry about <strong>${course}</strong> has been received.</p>`:""}
  <p style="font-size:14px;line-height:1.7;margin:0 0 16px">We&apos;ve received your message and will be in touch shortly.</p>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px">
    <a href="https://api.whatsapp.com/send?phone=918801912200" style="background:#25D366;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">WhatsApp Us</a>
    <a href="tel:+918801912200" style="background:#13293C;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">Call +91 88019 12200</a>
  </div>
  <p style="font-size:12px;color:#999;margin:0">TechnoExcel · Trimulgherry, Hyderabad · connect@technoexcel.in</p>
</div></body></html>`;

    await Promise.all([
      resend.emails.send({ from:"TechnoExcel <noreply@technoexcel.in>", to:[TO], subject:`New Lead: ${name}${course?` — ${course}`:""}${company?` @ ${company}`:""}`, html:internal, replyTo:email }),
      resend.emails.send({ from:"TechnoExcel <noreply@technoexcel.in>", to:[email], subject:course?`Your enquiry about ${course} — TechnoExcel`:"We received your message — TechnoExcel", html:autoReply }),
    ]);
    return NextResponse.json({ success:true });
  } catch(err) {
    console.error("/api/contact error:", err);
    return NextResponse.json({ error:"Failed. Please WhatsApp +91 88019 12200." }, { status:500 });
  }
}
