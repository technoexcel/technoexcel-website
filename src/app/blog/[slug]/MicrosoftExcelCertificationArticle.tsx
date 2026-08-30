import React from "react";
import article from "./data/microsoft-excel-certification.json";

type Link = { text: string; url: string };
type Paragraph = { type: "paragraph"; text: string; style: string | null; links: Link[] };
type Block = Paragraph | { type: "table"; rows: string[][] };

const LISTS: Record<string, number> = {
  "Microsoft lists these core areas:": 5,
  "For a professional Excel learner, the broader skill set can include:": 12,
  "Ask yourself:": 6,
  "Excel is particularly relevant to roles involving:": 9,
};

function LinkedText({ text, links }: { text: string; links: Link[] }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  links.filter(link => link.text.trim()).forEach((link, index) => {
    const start = text.indexOf(link.text, cursor);
    if (start < 0) return;
    parts.push(text.slice(cursor, start));
    parts.push(<a key={`${link.url}-${index}`} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>);
    cursor = start + link.text.length;
  });
  parts.push(text.slice(cursor));
  return <>{parts}</>;
}

function ArticleTable({ rows }: { rows: string[][] }) {
  return <div className="article-table-wrap"><table className="article-table"><thead><tr>{rows[0].map((cell, i) => <th key={i} scope="col">{cell}</th>)}</tr></thead><tbody>{rows.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export default function MicrosoftExcelCertificationArticle() {
  const blocks = article.blocks as Block[];
  const content = blocks.slice(8); // URL metadata, H1 and opening summary are handled by the page shell.
  const faqStart = content.findIndex(block => block.type === "paragraph" && block.text === "Frequently Asked Questions");
  const finalStart = content.findIndex(block => block.type === "paragraph" && block.text === "Final Takeaway");
  const beforeFaq = content.slice(0, faqStart);
  const faqBlocks = content.slice(faqStart + 1, finalStart);
  const finalBlocks = content.slice(finalStart);

  const renderBlocks = (items: Block[]) => {
    const output: React.ReactNode[] = [];
    for (let i = 0; i < items.length; i += 1) {
      const block = items[i];
      if (block.type === "table") { output.push(<ArticleTable key={`table-${i}`} rows={block.rows} />); continue; }
      if (block.style === "Heading2") output.push(<h2 key={i}>{block.text}</h2>);
      else if (block.style === "Heading3") output.push(<h3 key={i}>{block.text}</h3>);
      else {
        output.push(<p key={i}><LinkedText text={block.text} links={block.links} /></p>);
        const listLength = LISTS[block.text];
        if (listLength) {
          const list = items.slice(i + 1, i + 1 + listLength).filter((item): item is Paragraph => item.type === "paragraph");
          output.push(<ul key={`list-${i}`}>{list.map((item, index) => <li key={index}><LinkedText text={item.text} links={item.links} /></li>)}</ul>);
          i += listLength;
        }
      }
    }
    return output;
  };

  const faqs: { question: Paragraph; answer: Paragraph }[] = [];
  for (let i = 0; i < faqBlocks.length - 1; i += 2) {
    const question = faqBlocks[i]; const answer = faqBlocks[i + 1];
    if (question.type === "paragraph" && answer.type === "paragraph") faqs.push({ question, answer });
  }

  return <>
    {renderBlocks(beforeFaq)}
    <h2>Frequently Asked Questions</h2>
    <div className="faq-list">{faqs.map((faq, i) => <details key={i}><summary>{faq.question.text}</summary><p><LinkedText text={faq.answer.text} links={faq.answer.links} /></p></details>)}</div>
    {renderBlocks(finalBlocks)}
  </>;
}
