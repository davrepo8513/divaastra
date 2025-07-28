import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border rounded-lg divide-y">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium">{item.title}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 text-gray-700 bg-gray-50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;



// <Accordion
//   items={[
//     { title: "Section 1", content: "This is the first section content." },
//     { title: "Section 2", content: "This is the second section content." },
//   ]}
// />;
