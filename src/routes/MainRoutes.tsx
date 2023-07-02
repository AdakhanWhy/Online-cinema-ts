import { Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import MoviesPage from '../pages/MoviesPage';
import LoginPage from '../pages/LoginPage';
import MoviePage from '../pages/MoviePage';

const MainRoutes = () => {
    const publicRoutes = [
        {id: 1, path: '/', element: <HomePage />},
        {id: 2, path: '/*', element: <NotFoundPage />},
        {id: 3, path: '/movies', element: <MoviesPage />},
        {id: 4, path: '/movies/:id', element: <MoviePage />},
        {id: 5, path: '/aboutus', element: <AboutUsPage />},
        {id: 6, path: '/contactus', element: <ContactUsPage />},
        {id: 7, path: '/login', element: <LoginPage />},
        {id: 8, path: '/favorite', element: <></> },
    ]

    return(
        <Routes>
            {publicRoutes.map(route => (
                <Route key={route.id} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default MainRoutes;