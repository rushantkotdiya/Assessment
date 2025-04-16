import React, { useState } from 'react';

// Sample accordion data
const accordionData = [
  { title: 'Section 1', content: 'This is the content of section 1.' },
  { title: 'Section 2', content: 'This is the content of section 2.' },
  { title: 'Section 3', content: 'This is the content of section 3.' },
];

const Accordion = () => {
  // State to keep track of the currently active accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle click event on accordion title
  const handleToggle = (index) => {
    console.clear(); // Clear previous logs for clarity
    console.log(`Accordion ${index + 1} clicked`);

    // Toggle logic: collapse if already active, expand if not
    if (activeIndex === index) {
      setActiveIndex(null);
      console.log(`Accordion ${index + 1} collapsed`);
    } else {
      setActiveIndex(index);
      console.log(`Accordion ${index + 1} expanded`);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' }}>
      {accordionData.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: '#f7f7f7',
              padding: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>

          {/* Conditional rendering of accordion body */}
          {activeIndex === index && (
            <div style={{ padding: '15px', backgroundColor: '#fff' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
