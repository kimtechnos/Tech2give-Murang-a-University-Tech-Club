import "./assets/globals.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Leadership from "./pages/Leadership/Leadership";
import Events from "./pages/Events/Events";
import Tracks from "./pages/Tracks/Tracks";
const App = () => {
  return (
    <>
      {/*  */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
