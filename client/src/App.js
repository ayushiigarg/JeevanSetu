import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
function App() {
  return (
    <div>
       <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </div>
  );
}

export default App;
