import SocialItem from './SocialItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const SocialItems = () => {
    return (
        <nav className='social-nav'>
            <ul>
                <SocialItem link={'https://github.com/treneff/'}>
                    <GitHubIcon />
                </SocialItem>
                <SocialItem link='https://www.linkedin.com/in/treneff/'>
                    <LinkedInIcon />
                </SocialItem>
                <SocialItem link='mailto:treneff@protonmail.com'>
                    <EmailIcon />
                </SocialItem>
                <li>
                        <a className='resume-button' href='resume.pdf' target='_blank'>
                            <div>Resume</div>
                        </a>
                    </li>
            </ul>
        </nav>
    );
};

export default SocialItems;
