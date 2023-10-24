import React from "react";
import Todoapp from "./component/Todoapp/Todoapp";
import About from "./component/About/about";
import Header from "./component/header/header";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
      <Header/>
     <Routes>
     
     <Route  path="/" element={<Todoapp/> } />
      <Route path="/about" element={<About/>} />
      </Routes>
     </Router>
      
    </div>
    
    
 
  );
}

export default App;