import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DefaultTheme from "./Themes/DefaultTheme";
import Home from "./Components/Home";

const theme = DefaultTheme;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
