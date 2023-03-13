import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingOne() {
  return (
    <Router>
    {/**Espera un conjunto de rutas */}
      <Routes> 
        {/**Cargamos una ruta exacta de la raíz del componente HomePage */}
        <Route path='/' element={ <HomePage/> } />
        {/*404 - Page Not Found */}
        <Route path='*' element= { <NotFoundPage/> } />

      </Routes>
    </Router>  
  );
}

export default AppRoutingOne;
