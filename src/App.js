
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from './component/Home';
import {Routes,Route} from "react-router-dom";


function App(Movies){

return(
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Description/:id' element={<description/>}></Route>
          </Routes>
        </div>
    
  );
};
export default App;