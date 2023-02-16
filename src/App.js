import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Header  from './components/Header'
import  Footer  from './components/Footer'
import Home from './Home'
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path={'/:cat'} element={<Home />} />
            <Route path={`/*`} element={<NotFound />} />
          </Routes>    
        <Footer/>
    </BrowserRouter>
  );
}

export default App;