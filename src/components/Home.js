import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <section>
            <h1>Hi, my name is</h1>
            <h2 className='intro-name'>George Trenev</h2>
            <div className='intro-info '>
                <p>
                    A junior front-end developer and a{' '}
                    <a
                        className='external-ref'
                        href='https://codeclan.com/'
                        rel='noreferrer'
                        target={'_blank'}>
                        CodeClan{' '}
                    </a>
                    student always looking for a new challenge.
                </p>
            </div>
            <Link to='/about'>
                <div className='intro-button '>Learn more about me!</div>
            </Link>
        </section>
    );
};

export default Home;
