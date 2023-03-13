import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >|| HOME | </Link>
          <Link to='/about' >| ABOUT | </Link>
          <Link to='/faqs' >| FAQs || </Link>
          <Link to='/404' >| Not Existing Route || </Link>
        </aside>

        <main>
          {/**Espera un conjunto de rutas */}
          <Routes> 
            {/**Cargamos una ruta exacta de la raíz del componente HomePage */}
            <Route path='/' element={ <HomePage/> } />
            {/*404 - Page Not Found */}
            <Route path='*' element= { <NotFoundPage/> } />
            <Route path='about' element={ <AboutPage />} />
            <Route path="faqs" element={ <AboutPage />} />
            <Route path='/profile' element={ <ProfilePage /> } />
          </Routes>
        </main>
      </div>
    </Router>  
  );
}

export default AppRoutingOne;
