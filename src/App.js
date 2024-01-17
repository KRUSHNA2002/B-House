import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';


// Component

import Home from './components/Home';
import Menus from './components/Menus';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import Order from './components/Order';

const App=()=> {
  return (
<>
    <Router>
      <Mynavbar/>
       <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          {/* <Route path='/menus' element={<Menus/>}>Menus</Route> */}
          <Route path='veg' element={<Veg/>}>About</Route>
          <Route path='nonveg' element={<Nonveg/>}>About</Route>
          <Route path='/order/:id' element={<Order/>}>About</Route>
       </Routes>
     </Router>
</>
  );
}

export default App;
