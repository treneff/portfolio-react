import Header from './components/Header/Header';
import Main from './containers/Main';
import Footer from './components/Footer/Footer';
import './Animations.css'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Header />
            <Main />
            <Footer />
        </Router>
    );
}

export default App;
