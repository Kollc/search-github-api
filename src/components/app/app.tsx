import { Routes, Route } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import ErrorPage from "../pages/error-page/error-page";
import MainPage from "../pages/main-page/main-page";
import ProfilePage from "../pages/profile-page/profile-page";
import RepositoryPage from "../pages/repository-page/repository-page";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={RouteList.Main} element={<MainPage />} />
      <Route path={RouteList.Profile} element={<ProfilePage />} />
      <Route path={RouteList.Repository} element={<RepositoryPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;