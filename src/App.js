import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';


// Component

import Home from './components/Home';
import About from './components/About';

const App=()=> {
  return (
<>
    <Router>
      <Mynavbar/>
       <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/about' element={<About/>}>About</Route>
       </Routes>
     </Router>
</>
  );
}

export default App;
