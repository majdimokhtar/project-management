import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.css'

//pages
import Create from "./pages/create/Create"
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"
import Signup from "./pages/signup/Signup"
import Projects from "./pages/projects/Projects"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const {user , authIsReady} = useAuthContext()
  return (
    <div className="App">
      {authIsReady&& (
      <BrowserRouter>
      {user &&  <Sidebar/>}
      <div className='container'>
      <Navbar/>
      <Switch>
      <Route exact path='/'>
       {user && <Dashboard/>}
       {!user && <Redirect to="/login"/>}
      </Route>

      <Route path='/login'>
       {!user && <Login/>}
       {user && <Redirect to="/"/>}
      </Route>
      
      <Route path='/signup'>
      {user && <Redirect to="/"/>}
       {!user && <Signup/>}
      </Route>

      <Route path='/create'>
      {user && <Create/>}
       {!user && <Redirect to="/login"/>}
      </Route>

      <Route path='/projects/:id'>
      {user && <Projects/>}
       {!user && <Redirect to="/login"/>}
      </Route>

      </Switch>
      </div>
      {user &&<OnlineUsers/> }
      </BrowserRouter>
            )}

    </div>
  );
}

export default App
