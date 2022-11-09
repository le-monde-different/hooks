
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from './component/Home';
import Description from './component/Description';
import {Routes,Route} from "react-router-dom";


function App(Movies){

return(
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Description/:id' element={<Description/>}></Route>
          </Routes>
        </div>
    
  );
};
export default App;