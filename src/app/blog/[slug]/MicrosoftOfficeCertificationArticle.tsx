import React from "react";
import article from "./data/microsoft-office-certification.json";

type Link = { text: string; url: string };
type Block = { type: "paragraph"; text: string; style: string | null; links: Link[] } | { type: "table"; rows: string[][] };

const LISTS: Record<string, number> = {
  "It assesses skills including:": 5,
  "It focuses on advanced Excel skills, including:": 4,
  "Decide whether your career requires:": 4,
  "Open Excel and actually complete tasks such as:": 6,
  "For example, someone new to Excel should first understand:": 7,
  "Depending on your career, you may also benefit from learning:": 10,
  "Use realistic datasets such as:": 6,
};

function LinkedText({ text, links }: { text: string; links: Link[] }) {
  const meaningful = links.filter(link => link.text.trim() && link.text !== ".");
  if (!meaningful.length) return <>{text}</>;
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  meaningful.forEach((link, index) => {
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
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead><tr>{rows[0].map((cell, index) => <th key={index} scope="col">{cell}</th>)}</tr></thead>
        <tbody>{rows.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function MicrosoftOfficeCertificationArticle() {
  // The first body paragraph is already displayed by the article template as its lead excerpt.
  const blocks = (article.blocks as Block[]).slice(6);
  const faqStart = blocks.findIndex(block => block.type === "paragraph" && block.text === "Frequently Asked Questions");
  const beforeFaq = blocks.slice(0, faqStart);
  const faqAndAfter = blocks.slice(faqStart + 1);
  const finalStart = faqAndAfter.findIndex(block => block.type === "paragraph" && block.text === "Final Takeaway");
  const faqBlocks = faqAndAfter.slice(0, finalStart);
  const finalBlocks = faqAndAfter.slice(finalStart);

  const renderBlocks = (items: Block[]) => {
    const output: React.ReactNode[] = [];
    for (let i = 0; i < items.length; i += 1) {
      const block = items[i];
      if (block.type === "table") {
        output.push(<ArticleTable key={`table-${i}`} rows={block.rows} />);
        continue;
      }
      if (block.style === "Heading2") output.push(<h2 key={i}>{block.text}</h2>);
      else if (block.style === "Heading3") output.push(<h3 key={i}>{block.text}</h3>);
      else {
        output.push(<p key={i}><LinkedText text={block.text} links={block.links} /></p>);
        const listLength = LISTS[block.text];
        if (listLength) {
          const list = items.slice(i + 1, i + 1 + listLength).filter((item): item is Extract<Block, { type: "paragraph" }> => item.type === "paragraph");
          output.push(<ul key={`list-${i}`}>{list.map((item, index) => <li key={index}>{item.text}</li>)}</ul>);
          i += listLength;
        }
      }
    }
    return output;
  };

  const faqs: { question: string; answer: string }[] = [];
  for (let i = 0; i < faqBlocks.length - 1; i += 2) {
    const question = faqBlocks[i];
    const answer = faqBlocks[i + 1];
    if (question.type === "paragraph" && answer.type === "paragraph") faqs.push({ question: question.text, answer: answer.text });
  }

  return (
    <>
      {renderBlocks(beforeFaq)}
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div>
      {renderBlocks(finalBlocks)}
    </>
  );
}
