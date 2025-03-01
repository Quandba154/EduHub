import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router/index.router";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { Fragment } from "react";

function App() {
  return (
    <div className="bg-[#F5F3EA]">
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
