import ProjectList from './ProjectList';
import { useState } from 'react';
import './Work.css';
const allProjects = [
    {
        name: 'Space Explorers',
        search: 'JavaScript',
        technology: 'React, Node, Express, MongoDB,Styled Components',
        urlCode: 'https://github.com/treneff/space_explorers',
        urlImg: './assets/Space-explorers.jpeg',
    },
    {
        name: 'Budgeten',
        search: 'JavaScript',
        technology: 'Vanilla JS, CSS, HTML',
        urlCode: 'https://github.com/treneff/Budgeten',
        urlImg: './assets/Budgeten.jpeg',
    },
    {
        name: 'Trenello Task Manager',
        search: 'Python',
        technology: 'Python, Flask, Jinja, PostgreSQL',
        urlCode: 'https://github.com/treneff/trenello_task_manager',
        urlImg: './assets/Trenello.jpeg',
    },
    {
        name: 'Flags Marketplace',
        search: 'JavaScript',
        technology: 'React, CSS',
        urlCode: 'https://github.com/treneff/flags_marketplace_react',
        urlImg: './assets/flags.jpeg',
    },
    {
        name: 'Portfolio website',
        search: 'JavaScript',
        technology: 'React, CSS',
        urlCode: 'https://github.com/treneff/portfolio-react',
        urlImg: './assets/portfolio.jpeg',
    },
];

const Work = () => {
    const [projectsToDisplay] = useState(allProjects);
    return (
        <section className='projects-section'>
            <h1>Projects</h1>

            <ProjectList projectsToDisplay={projectsToDisplay} />
        </section>
    );
};

export default Work;
