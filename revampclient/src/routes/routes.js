import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

const AquaRoutes = () => {
  const AquaRouteVariables = [
    {
      name: "Home",
      path: "/",
      component: <Home />,
    },
  ];
  return (
    <>
      <Router>
        <Routes>
        {AquaRouteVariables.map((r, i) => (
          <Route key={i} path={r.path} element={r.component}/>
        ))}
        </Routes>
      </Router>
    </>
  );
};

export default AquaRoutes;
