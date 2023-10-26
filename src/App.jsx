import { Route, Routes } from "react-router-dom";
import Navbarr from "./components/Navbarr";

import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";

const App = () => {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contacto"
          element={<ContactPage />}
        />
      </Routes>
    </div>
  );
};
export default App;