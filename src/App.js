import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import MinhasNotas from "./pages/MinhasNotas";
import NavBarra from "./components/layout/NavBarra";
import NovaNota from "./pages/NovaNota";
import Container from "./components/layout/Container";
//import Footer from "./components/layout/Footer"

function App() {
  return (
    <Router>
      <NavBarra/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MinhasNotas" element={<MinhasNotas/>}/>
          <Route path="/Novanota" element={<NovaNota/>}/>
        </Routes>
      </Container >
    
    </Router>
  );
}

export default App;
