import './App.css';

import Header from './components/Header';
import MobilesDetails from './components/mobilesDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<MobilesDetails />} />
   </Routes>
  </>
  );
}

export default App;
