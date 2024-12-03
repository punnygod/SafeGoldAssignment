"use client"
import React, { useState } from "react";
import styles from "./fAQ.module.css";

type FAQData = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQData[];
};

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={styles.question}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
