import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Componend/js/Contact';
import Header from './Componend/js/Header';
import Home from './Componend/js/Home';
import NotFound from './Componend/js/NotFound';
import Service from './Componend/js/Service';
import WorkedSide from './Componend/js/WorkedSide';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/worked' element={<WorkedSide></WorkedSide>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
