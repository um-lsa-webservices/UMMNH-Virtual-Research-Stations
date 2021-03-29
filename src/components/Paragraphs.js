import React from "react";

const Paragraphs = ({ textToSplit }) => {
  const splitText = textToSplit.split("\n");
  return (
    <div>
      {splitText.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Paragraphs;
