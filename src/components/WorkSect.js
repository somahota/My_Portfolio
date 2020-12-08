import React from "react";

const WorkSect = ({ title, textAlignment, marginAlignment }) => {
  return (
    <span className="section-title" style={{ textAlign: textAlignment}}>
      <h3>{title || "default title"}</h3>
	     <div className="underline" style={{ margin: marginAlignment }}></div>
    </span>
  );
};

export default WorkSect;