import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DefaultTheme from "./Themes/DefaultTheme";
import Home from "./Components/Home";
import MainPageSectionFive from "./Components/MainPage/MainPageSectionFive";
import AppNavbar from "./Components/AppNavbar";
import AppFooter from "./Components/AppFooter";

const theme = DefaultTheme;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppNavbar/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/careerandlife' element={<MainPageSectionFive/>}/>
                </Routes>
            </Router>
            <AppFooter/>
        </ThemeProvider>
    );
}

export default App;
