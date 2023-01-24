import Project from './Project';

const ProjectList = ({ projectsToDisplay }) => {
    const projects = projectsToDisplay.map((project,index) => {
        return <Project key={index} project ={project} />;
    });

    return <div className='projects-container'>{projects}</div>;
};

export default ProjectList;
