import './App.css';
import { Navigate , Route , Routes } from 'react-router-dom';


//components
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/login'  element={<Login/>}/>
         <Route path='/signup'  element={<SignUp/>}/>
         <Route path='/'  element={<Navigate to="/signup"/>}/>
       </Routes>
    </div>
  );
}

export default App;
