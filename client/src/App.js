import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'materialize-css';
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Profile from './views/Profile';
import AdminPlatform from './views/AdminPlatform';
import Game from './views/Game';
// import jobListing from './views/jobListing';
// import SavedJobs from './views/SavedJobs';

// import { useUserContext } from './contexts/UserContext';
// import { useAuth0 } from './react-auth0-spa';
// import UserInfo from './components/UserInfo';
// import CoverPage from './components/CoverPage';
// import Resume from './components/Resume';

// styles/
import './App.css';

const App = () => {
  // const { loading, isAuthenticated } = useAuth0();

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div id='app'>
   {/* <NavBar /> */}
      <div className='row'>
        <Switch>
          {/* {isAuthenticated ? (
            <Route exact path='/' component={Home} />
          ) : ( */}
            <Route>
              <NavBar />
              <Home />
              {/* <Footer /> */}
            </Route>
          {/* )} */}

          <PrivateRoute
            exact
            path='/userinfo'
            // component={UserInfo}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/game' 
            component={Game}
            ></PrivateRoute>
          <PrivateRoute 
            exact
            path='/profile' 
            component={Profile}
          ></PrivateRoute>
          <PrivateRoute 
            exact
            path='/admin' 
            component={AdminPlatform}
          ></PrivateRoute>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
