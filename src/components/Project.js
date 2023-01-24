import GitHubIcon from '@mui/icons-material/GitHub';

const Project = ({ project }) => {
    return (
        <div className='projects-category'>
            <div className='project-info'>
                <h2>{project.name}</h2> <p>{project.technology}</p>
                <a href={project.urlCode} title="Link to project github" target="_blank" rel="noreferrer" >
                    <GitHubIcon />
                </a>
            </div>
            <div className='project-background'><img src={project.urlImg} alt={project.name} /></div>
        </div>
    );
};

export default Project;
