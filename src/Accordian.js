import React, { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { title: "Dynamic Section 1", content: "Content for dynamic section 1" },
    { title: "Dynamic Section 2", content: "Content for dynamic section 2" },
    { title: "Dynamic Section 3", content: "Content for dynamic section 3" },
  ];

  const toggleAccordian = (index) => {
    setActiveIndex(activeIndex == index ? null : index);
  };
  return (
    <div>
      <div>
        <h2>This is Accodian </h2>
        {data.map((item, index) => (
          <div key={index}>
            <div onClick={toggleAccordian()}></div>
            <h3>{item.title}</h3>
            {activeIndex === index && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
