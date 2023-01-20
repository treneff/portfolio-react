import './Skills.css';
import StorageIcon from '@mui/icons-material/Storage';

const Skills = () => {
    return (
        <section className='skills-section'>
            <h1>Skills</h1>
            <div className='skills-container'>
                <div className='skills-category'>
                    <h2>Javascript</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>Vanilla.js</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>Node</li>
                    </ul>
                </div>
                <div className='skills-category'>
                    <h2>Python</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Styled Components</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className='skills-category'>
                    <h2>Databases</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Styled Components</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className='skills-category'>
                    <StorageIcon />
                    <h2>Technologies</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Styled Components</li>
                        <li>HTML</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
