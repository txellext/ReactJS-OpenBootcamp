import  {useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage.jsx/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])


  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >|| HOME | </Link>
          <Link to='/about' >| ABOUT | </Link>
          <Link to='/faqs' >| FAQs || </Link>
          <Link to='/404' >| Not Existing Route | </Link>
          <Link to='/login' >| Login || </Link>
        </aside>

        <main>
          {/**Espera un conjunto de rutas */}
          <Routes> 
            {/**Cargamos una ruta exacta de la raíz del componente HomePage */}
            <Route path='/' element={ <HomePage/> } />
            <Route path='/login' element = { logged ? <HomePage /> : <LoginPage /> } >
            </Route>
            {/*404 - Page Not Found */}
            <Route path='*' element= { <NotFoundPage/> } />
            <Route path='about' element={ <AboutPage />} />
            <Route path='/tasks' element={ <TaskPage />} />
            <Route path="faqs" element={ <AboutPage />} />
            <Route path='/profile' element={ 
              logged ? 
              <ProfilePage /> 
              : 
              (<Navigate to='/login' />) }>
                {
                  !logged ?
                  alert('You must be logged in. Redirecting to Home..')
                  :
                  null
                }
              </Route>
            <Route path='/tasks/:id' element={ <TaskDetailPage/> } />
          </Routes>
        </main>
      </div>
    </Router>  
  );
}

export default AppRoutingOne;
