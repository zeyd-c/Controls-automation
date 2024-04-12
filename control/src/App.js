import Login from './Components/Login';
import Assets from './Components/Assets';
import Controls from './Components/Controls';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
  <Routes>
    <Route  path="/login" element = {<Login/>}/>
    <Route  path="/controls" element = {<Controls/>}/>
    <Route  path="/assets" element = {<Assets/>}/>
  </Routes>
    
 
  );
}

export default App;
