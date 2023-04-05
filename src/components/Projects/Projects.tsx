import React from "react";
import { useEffect, useState } from 'react';

import Heading from "../Heading/Heading";
import Wrapper from "../Wrapper/Wrapper";
import Card from "./Card/Card";

import { octokit } from '../Octokit/Octokit.cfg';
import { link } from "fs";


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

    const [repositories , setRepositories] = useState<any[]>([])

    useEffect(()=> {
      const onFetchData = (data:any):void => {
        setRepositories(data)
    }   
      const fetchGithubRepos = async () => {
      const data = await octokit.request('GET /users/PawelMatusz/repos', {
          username: 'PawelMatusz',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
        const repos = await data.data
        console.log(repos)
        onFetchData(repos);
      }
      fetchGithubRepos()
    },[])
  return (
    <section className='projects'>
        <Wrapper>
            <Heading >Projects</Heading>
            
                {repositories.map(repo => <li>{repo.name}</li>)}
            
            {projects.map(project => <Card key={project.id} projectInfo={project}></Card>)}
        </Wrapper>
    </section>
  )
}
