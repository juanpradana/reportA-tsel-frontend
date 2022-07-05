import {BrowserRouter, Route, Routes} from 'react-router-dom'

import SignupPage from './pages/Auth/Signup'
import LoginPage from './pages/Auth/Login'

import Overview from './pages/User/Overview';
import Network from './pages/User/Network';
import Power from './pages/User/Power';
import Transport from './pages/User/Transport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/network" element={<Network />} />
        <Route path="/power" element={<Power />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
