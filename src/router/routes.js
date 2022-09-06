import {
    BOARD_ROUTE,
    LOGIN_ROUTE,
    ME_ROUTE,
    REGISTER_ROUTE,
    TEST_ROUTE,
    HOME_ROUTE,
    UNLOGINNED_ROUTE
} from "../utils/consts";
import {LoginPage} from "../pages/LoginPage";
import {ContentPlanPage} from "../pages/ContentPlanPage";
import {TitleList} from "../components/TItleList";
import {HomePage} from "../pages/HomePage";
import {RegistrationPage} from "../pages/RegistrationPage";
import {WelcomePage} from "../pages/WelcomePage";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <LoginPage/>
    },
    {
        path: REGISTER_ROUTE,
        Component: <RegistrationPage/>
    },
    {
        path: UNLOGINNED_ROUTE,
        Component: <WelcomePage/>
    }

]

export const privateRoutes = [
    {
        path: ME_ROUTE,
        Component: <ContentPlanPage/>
    },
    {
        path: TEST_ROUTE,
        Component: <TitleList/>
    },
    {
        path: BOARD_ROUTE,
        Component: <ContentPlanPage/>
    },
    {
        path: HOME_ROUTE,
        Component: <HomePage/>
    }
]