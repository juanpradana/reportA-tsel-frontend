import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Overview from './pages/overview';
import Network from './pages/network';
import Power from './pages/power';
import Transport from './pages/transport';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/network" element={<Network />} />
        <Route path="/power" element={<Power />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
