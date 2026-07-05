"use client";
import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-list" role="list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item${openIndex === i ? " open" : ""}`}
          role="listitem"
        >
          <button
            className="faq-question"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            id={`faq-q-${i}`}
            aria-controls={`faq-a-${i}`}
          >
            {item.q}
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div
            className="faq-answer"
            id={`faq-a-${i}`}
            role="region"
            aria-labelledby={`faq-q-${i}`}
          >
            <p className="faq-answer-inner">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
