import React from "react";

const Paragraphs = ({ textToSplit }) => {
  const splitText = textToSplit.split("\n");
  return (
    <div>
      {splitText.map((item, index) => {
        const splitString = item.split('*');
        const finalString = [];
        
        splitString.forEach((substring, index) => {
          const fontStyle = index % 2 === 0 ? 'normal' : 'italic';
          const textElement = (
            <span key={index} style={{fontStyle: fontStyle}}>{substring}</span>
          )
          finalString.push(textElement);
        })

        return (
          <div key={index}>
            <p>{finalString}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Paragraphs;
