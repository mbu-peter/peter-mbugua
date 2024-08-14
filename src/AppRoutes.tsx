import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./layoutes/Layout";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import AboutMePage from "./pages/about";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/project"
          element={
            <Layout>
              <ProjectsPage />
            </Layout>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <Layout>
              <SingleProjectPage />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <AboutMePage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
