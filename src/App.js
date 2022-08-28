import './App.css';
import AddHouse from './Components/AddHouse';
import Hero from './Components/Hero';
import ListedHouse from './Components/ListedHouse';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Favourite from './Components/Favourite';

function App() {
  return <BrowserRouter>
  <Navbar />
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/addhouse' element = {<AddHouse />}></Route>
        <Route path='/favourite' element = {<Favourite />}></Route>
      </Routes>
      
    </div>
    <Footer />
  </BrowserRouter>


}

export default App;
