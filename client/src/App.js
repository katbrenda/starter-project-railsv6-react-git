import './App.css';
import NavBar from './components/shared/NavBar';
import { Routes, Route} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';



function App() {
  return (
    <div>
      <NavBar />
      <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      </>
    </div>
  );
}

export default App;
