import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';

// Component

import Home from './components/Home';
// import Menus from './components/Menus';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import Order from './components/Order';
import { createContext } from 'react';
import Reservation from './components/admin/Reservation';
import Contact from './components/Contact';
const data= createContext();

const App=()=> {
 
  const apiKey = '901a78a62228490c93e9cfb31708d4ea';

  return (
<>
     <data.Provider value={apiKey}>
          <Router>
      <Mynavbar/>
       <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          {/* <Route path='/menus' element={<Menus/>}>Menus</Route> */}
          <Route path='veg' element={<Veg/>}>About</Route>
          <Route path='nonveg' element={<Nonveg/>}>About</Route>
          <Route path='contact' element={<Contact/>}>About</Route>
          <Route path='/order/:id' element={<Order/>}>About</Route>
          <Route path='admin/reservation' element={<Reservation/>}>About</Route>
       </Routes>
     </Router>
     </data.Provider>
</>
  );
}

export default App;
