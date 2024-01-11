import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Addons from './pages/Addons';
import FAQ from './pages/FAQ';
import Perks from './pages/Perks';
import Supports from './pages/Support';

function App() {
  return (
   
    <BrowserRouter>
    <Header/>
    <SideBar>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/addons' element={<Addons/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/perks' element={<Perks/>}></Route>
        <Route path='/supports' element={<Supports/>}></Route>
      </Routes>
    </SideBar>
    </BrowserRouter>
  );
}

export default App;
