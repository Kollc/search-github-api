import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { RouteList } from "../../../consts/routes";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  getRepositoriesListByNicknameAction,
  getUserInfoAction,
} from "../../../store/user-process/api-actions";
import {
  getUserInfo,
  getUserInfoLoadingStatus,
} from "../../../store/user-process/selector";
import RepositoryTable from "../../repository-table/repository-table";
import Spinner from "../../spinner/spinner";
import UserInfo from "../../user-info/user-info";

function ProfilePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserInfo);
  const { login } = useParams();
  const loading = useAppSelector(getUserInfoLoadingStatus);

  useEffect(() => {
    if (login) {
      dispatch(getUserInfoAction(login));
      dispatch(getRepositoriesListByNicknameAction(login));
    }
  }, [login]);

  if (loading || !login) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to={RouteList.Main} />;
  }

  return (
    <main className="px-4 bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative bg-gradient-to-b to-green-800 from-yellow-500">
      <div className="mt-4 flex items-start justify-between">
        <div className="flex flex-col w-full md:space-y-4">
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            <UserInfo user={user} />
            <div className="w-full">
              <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <RepositoryTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
