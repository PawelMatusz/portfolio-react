import React from "react";
import Stack from "./tech-stack.interface";
import Wrapper from "../Wrapper/Wrapper";
import Heading from "../Heading/Heading";

import "./tech-stack.scss";

export default function TechStack() {
const stack:Stack[] = [
{
  name: "html",
  icon: "icon",
},
{
  name: "css",
  icon: "icon",
},
{
  name: "js",
  icon: "icon",
},
{
  name: "angular",
  icon: "icon",
},
{
  name: "react",
  icon: "icon",
},
];
return (
<section className="tech-stack">
<Heading>Skills</Heading>
<Wrapper>
  <ul className="tech-stack__list">
  {stack.map((tech,index) => (
    <li key={index}>{tech.name}</li>
  ))}
  </ul>

</Wrapper>
</section>
);
}
