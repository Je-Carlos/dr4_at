import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import AT11 from "./components/Questions/AT11";
import AT12 from "./components/Questions/AT12";
import AT13 from "./components/Questions/AT13";
import AT14 from "./components/Questions/AT14";
import AT21 from "./components/Questions/AT21";
import AT22 from "./components/Questions/AT22";
import AT23 from "./components/Questions/AT23";
import AT24 from "./components/Questions/AT24";
import AT31 from "./components/Questions/AT31";
import AT32 from "./components/Questions/AT32";
import AT33 from "./components/Questions/AT33";
import AT34 from "./components/Questions/AT34";
import Menu from "./components/Questions/Menu";
import AdminPage from "./components/Questions/AdminPage";
import AT43 from "./components/Questions/AT43";
import AT44 from "./components/Questions/AT44";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/at11"
            element={
              <AT11
                pergunta="Qual time de futebol foi fundado em 1910?"
                resposta="Corinthians"
              />
            }
          />
          <Route path="/at12" element={<AT12 />} />
          <Route path="/at13" element={<AT13 />} />
          <Route path="/at14" element={<AT14 />} />
          <Route path="/at21" element={<AT21 />} />
          <Route path="/at22" element={<AT22 />} />
          <Route path="/at23" element={<AT23 />} />
          <Route path="/at24" element={<AT24 />} />
          <Route path="/at31" element={<AT31 />} />
          <Route path="/at32" element={<AT32 />} />
          <Route path="/at33" element={<AT33 />} />
          <Route path="/at34" element={<AT34 />} />
          <Route
            path="/admin-on"
            element={<AdminPage initialChecked={true} />}
          />
          <Route
            path="/admin-off"
            element={<AdminPage initialChecked={false} />}
          />
          <Route path="/at43" element={<AT43 initialCountry="Brazil" />} />
          <Route path="/at44" element={<AT44 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
