import './Skills.css';

const Skills = () => {
    return (
        <section className='skills-section'>
            <h1>Skills</h1>
            <div className='skills-container'>
                <div className='skills-category'>
                    <h2>Languages</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className='skills-category'>
                    <h2>Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>TailwindCSS</li>
                        <li>Flask</li>
                        <li>Jinja</li>
                        <li>Spring</li>
                    </ul>
                </div>
                <div className='skills-category'>
                    <h2>Technologies</h2>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>ComandLine</li>
                        <li>IntelliJ IDEA</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
