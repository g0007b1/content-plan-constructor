import {Header} from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";
import {Container, createTheme} from "@mui/material";


// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#dd33fa"
//         }
//     },
//     typography: {
//         fontFamily: "Quicksand",
//         fontWeightLight: 400,
//         fontWeightRegular: 500,
//         fontWeightMedium: 600,
//         fontWeightBold: 700
//     }
// });

function App() {
    return (
        <div className={'app'}>
            {/*<ThemeProvider theme={theme}>*/}
                <BrowserRouter>
                    <Header/>
                    <Container maxWidth="lg" sx={{marginTop: 10}}>
                        <AppRouter/>
                    </Container>
                </BrowserRouter>
            {/*</ThemeProvider>*/}
        </div>
    );
}

export default App;
