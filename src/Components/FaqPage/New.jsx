import React, { useState } from 'react';

const New = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  return (
    <div>
      {accordionData.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {section.title}
          </div>
          {index === activeIndex && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default New;
