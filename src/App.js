import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import LandingPage from "./components/LandingPage"
import AllCars from "./components/AllCars"
import CarID from "./components/CarID"
import CarMake from "./components/CarMake"
import AddCar from "./components/AddCar"
import UpdateCar from "./components/UpdateCar"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= "/" element={<LandingPage />} />
        <Route exact path= "/AllCars" element={<AllCars />} />
        <Route exact path= "/CarID" element={<CarID />} />
        <Route exact path= "/CarMake" element={<CarMake />} />
        <Route exact path= "/AddCar" element={<AddCar />} />
        <Route exact path= "/UpdateCar" element={<UpdateCar />} />
      </Routes>
  </Router>
  );
}

export default App;
