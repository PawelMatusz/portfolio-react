import React from "react";
import Stack from "./tech-stack.interface"

export default function TechStack() {
  const stack:Stack[] = [
    {
      name: "html",
      icon: "icon",
    },
    {
      name: "html",
      icon: "icon",
    },
    {
      name: "html",
      icon: "icon",
    },
    {
      name: "html",
      icon: "icon",
    },
  ];
  return (
    <div>
      {stack.map((tech) => (
        <li>{tech.name}</li>
      ))}
    </div>
  );
}
