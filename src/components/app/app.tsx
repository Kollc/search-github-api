import { Routes, Route } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import ErrorPage from "../pages/error-page/error-page";
import MainPage from "../pages/main-page/main-page";
import ProfilePage from "../pages/profile-page/profile-page";
import RepositoryPage from "../pages/commits-page/commits-page";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={RouteList.Main} element={<MainPage />} />
      <Route path={`${RouteList.Profile}/:login`} element={<ProfilePage />} />
      <Route
        path={`${RouteList.Repository}/:login/:repositoryName`}
        element={<RepositoryPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
