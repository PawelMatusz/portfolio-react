import React from "react";

import Heading from "../Heading/Heading";
import Wrapper from "../Wrapper/Wrapper";
import Card from "./Card/Card";

interface ProjectsInterface {
    name: String,
    description: String,
    techStack: String[],
    id: number,
}

export default function Projects() {
    const projects:ProjectsInterface[] = [
        {
            "name":'36-week-challenge-shop',
            "description": '36-week-challenge-shop',
            "techStack": ['css','html','js'],
            "id":1,
        },
        {
            "name":'36-week-challenge-shodasfafsdp',
            "description": '36-week-challfasdfsafgsdfgfdenge-shop',
            "techStack": ['css','html','js'],
            "id":2,
        },
    ]
  return (
    <section className='projects'>
        <Wrapper>
            <Heading >Projects</Heading>
            {projects.map(project => <Card key={project.id} projectInfo={project}></Card>)}
        </Wrapper>
    </section>
  )
}
