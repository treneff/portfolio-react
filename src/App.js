import Header from './components/Header/Header';
import Main from './containers/Main';
import Footer from './components/Footer/Footer';
import { HashRouter as Router } from 'react-router-dom';
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
