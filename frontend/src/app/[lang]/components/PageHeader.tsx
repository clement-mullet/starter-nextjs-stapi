import React from "react";

interface PageHeaderProps {
  heading: string;
  text?: string;
}

export default function PageHeader({ heading, text }: PageHeaderProps) {
  return (
    <div>
      {text && <span>{text}</span>}
      <h2>{heading}</h2>
    </div>
  );
}
