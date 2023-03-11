import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Tabcordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      title: 'Accordion 1',
      content: 'Accordion 1 Content',
    },
    {
      title: 'Accordion 2',
      content: 'Accordion 2 Content',
    },
    {
      title: 'Accordion 3',
      content: 'Accordion 3 Content',
    },
  ];
  
  return (
    <div className="border border-gray-400 rounded">
      <button
        className="w-full p-2 text-left font-medium text-gray-700 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className="float-right w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {isOpen ? (
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          ) : (
            <path d="M5 6.291l-5.125 5.125a.999.999 0 000 1.414L5 13.709l5.125 5.125a.999.999 0 101.414-1.414L6.414 13.5 10 9.914 13.586 13.5l-5.125-5.125a.999.999 0 00-1.414 0z" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-200">
          {content}
        </div>
      )}
    </div>
  );
};

const AccordionList: React.FC<{ items: AccordionProps[] }> = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <Tabcordion key={index} title={item.title} content={item.content} />
    ))}
  </div>
);

export default Tabcordion;
