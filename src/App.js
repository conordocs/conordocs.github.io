import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Nailedit from "../src/pages/Nailedit";
import CouchPotato from "./pages/CouchPotato";
import Realtor from "./pages/Realtor";
import Booking from "./pages/Booking";
import Netflix from "./pages/Netflix";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/nailedit" exact element={<Nailedit />}></Route>
      <Route path="/couchpotato" exact element={<CouchPotato />}></Route>
      <Route path="/realtor" exact element={<Realtor />}></Route>
      <Route path="/booking" exact element={<Booking />}></Route>
      <Route path="/netflix" exact element={<Netflix />}></Route>
    </Routes>
  );
}

export default App;
