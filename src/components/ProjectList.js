import Project from './Project';
import { useState } from 'react';
const allProjects =[
    { name: 'Amazing Project', technology: 'react', index: 1 },
    { name: 'Great Project', technology: 'css', index: 2 },
    { name: 'Phe Project', technology: 'python', index: 4 },
    { name: 'Phenomenal Project', technology: 'python', index: 5 },
    { name: 'Phenomenal Project', technology: 'python', index: 6 },
    { name: 'Phenomenal Project', technology: 'python', index: 7 },
    { name: 'Phenomenal Project', technology: 'python', index: 8 },
]
const ProjectList = () => {
    //define a state to hold all projects in an array
    const [projectsToDisplay, setProjectsToDisplay] = useState(allProjects);
    const filterProjects = (event) =>{
        console.log(projectsToDisplay)
        const newProjectsToDisplay = allProjects.filter((project) =>{
            return project.technology === event.target.innerHTML
        })
        setProjectsToDisplay(newProjectsToDisplay)
    }

    const projects = projectsToDisplay.map((project) => {
        return <Project key={project.index} name={project.name} technology={project.technology} />;
    });


    return (
        <>
            <div onClick={filterProjects} >css</div>
            <div onClick={filterProjects} >python</div>
            <div onClick={filterProjects} >react</div>
            <ul>{projects}</ul>
        </>
    );
};

export default ProjectList;
