import {Header} from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";
import {Container} from "@mui/material";

function App() {
    return (
        <div className={'app'}>
            <BrowserRouter>
                <Header/>
                <Container maxWidth="lg" sx={{marginTop:10}}>
                    <AppRouter/>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
