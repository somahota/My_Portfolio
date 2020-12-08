import React from "react";

const Title = ({ title, textAlignment, marginAlignment }) => {
  return (
    <span className="section-title" style={{ textAlign: textAlignment }}>
      <h2>{title || "default title"} </h2>
    </span>
  );
};

export default Title;
