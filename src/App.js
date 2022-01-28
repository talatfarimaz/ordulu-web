import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DefaultTheme from "./Themes/DefaultTheme";
import Home from "./Components/Home";
import AppNavbar from "./Components/AppNavbar";
import AppFooter from "./Components/AppFooter";
import CareerAndLife from "./Components/CareerAndLife";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Contracts from "./Components/Contracts";
import Products from "./Components/Products";
import Jobs from "./Components/Jobs";
import About from "./Components/About";

const theme = DefaultTheme;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppNavbar/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/careerandlife' element={<CareerAndLife/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/contracts/:code' element={<Contracts/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/jobs' element={<Jobs/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </Router>
            <AppFooter/>
        </ThemeProvider>
    );
}

export default App;
