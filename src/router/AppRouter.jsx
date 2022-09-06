import {privateRoutes, publicRoutes} from "./routes";
import {Navigate, Redirect, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

export const AppRouter = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    // const [user] = useAuthState(auth)
    return isAuth ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Route path='*' element={<Navigate to='/home'/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        )
};
