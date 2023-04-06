import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./_app.scss";
import LoginPage from "./Pages/LoginPage/LoginPage";
import NotFound from "./Pages/NotFoundPage/NotFound";
import { useSelector } from "react-redux";
import WatchPage from "./Pages/WatchPage/WatchPage";
import Search from "./Pages/Search/SearchPage";

const LayoutHome = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleSidebarToggle = () => toggleSidebar((value) => !value);
  return (
    <>
      <div className="App">
        <Header handleSidebarToggle={handleSidebarToggle} />
        <div className="app__container">
          <Sidebar
            sidebar={sidebar}
            handleSidebarToggle={handleSidebarToggle}
          />
          <Container fluid className="app_main ">
            <HomePage />
          </Container>
        </div>
      </div>
    </>
  );
};

const LayoutWatch = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleSidebarToggle = () => toggleSidebar((value) => !value);
  return (
    <>
      <div className="App">
        <Header handleSidebarToggle={handleSidebarToggle} />
        <div className="app__container">
          <Sidebar
            sidebar={sidebar}
            handleSidebarToggle={handleSidebarToggle}
          />
          <Container fluid className="app_main ">
            <WatchPage />
          </Container>
        </div>
      </div>
    </>
  );
};

const LayoutSearch = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleSidebarToggle = () => toggleSidebar((value) => !value);
  return (
    <>
      <div className="App">
        <Header handleSidebarToggle={handleSidebarToggle} />
        <div className="app__container">
          <Sidebar
            sidebar={sidebar}
            handleSidebarToggle={handleSidebarToggle}
          />
          <Container fluid className="app_main ">
            <Search />
          </Container>
        </div>
      </div>
    </>
  );
};

function App() {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!accessToken ? <LoginPage /> : <LayoutHome />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/search/:query" element={<LayoutSearch />} />
        <Route path="/watch/:id" element={<LayoutWatch />} />
      </Routes>
    </>
  );
}

export default App;
