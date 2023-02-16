import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { tmp } from './components/tmp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} elemment={<tmp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
