import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Overview from './pages/Overview';
import Network from './pages/Network';
import Power from './pages/Power';
import Transport from './pages/Transport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/network" element={<Network />} />
        <Route path="/power" element={<Power />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
