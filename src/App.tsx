import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./common/Loader";
import React from "react";
import Home from "./pages/Home";
import PageTitle from "./components/PageTitle";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="" index element={<Home/>} />
      <Route path="/web">
        <Route
          path="Accueil"
          element={
            <>
              <PageTitle title="Accueil | NG-TECH-IN" />
              <Accueil />
            </>
          }
        />

        <Route
          path="Apropos"
          element={
            <>
              <PageTitle title="Apropos | NG-TECH-IN" />
              <Apropos />
            </>
          }
        />
        <Route
          path="Contact"
          element={
            <>
              <PageTitle title="Contact | NG-TECH-IN" />
              <Contact/>
            </>
          }
        />
        <Route
          path="Service"
          element={
            <>
              <PageTitle title="Service | NG-TECH-IN" />
              <Services />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
