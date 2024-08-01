import "./locales/i18n";
import { useContext, useEffect } from "react";
import { Cookies } from "react-cookie";
import { ErrorBoundary } from "react-error-boundary";
import "reactflow/dist/style.css";
import "./App.css";
import AlertDisplayArea from "./alerts/displayArea";
import CrashErrorComponent from "./components/crashErrorComponent";
import FetchErrorComponent from "./components/fetchErrorComponent";
import LoadingComponent from "./components/loadingComponent";
import {
  FETCH_ERROR_DESCRIPION,
  FETCH_ERROR_MESSAGE,
  LANGFLOW_ACCESS_TOKEN_EXPIRE_SECONDS,
  LANGFLOW_ACCESS_TOKEN_EXPIRE_SECONDS_ENV,
} from "./constants/constants";
import { AuthContext } from "./contexts/authContext";
import {
  useAutoLogin,
  useRefreshAccessToken,
} from "./controllers/API/queries/auth";
import { useGetHealthQuery } from "./controllers/API/queries/health";
import { useGetVersionQuery } from "./controllers/API/queries/version";
import { setupAxiosDefaults } from "./controllers/API/utils";
import useTrackLastVisitedPath from "./hooks/use-track-last-visited-path";
import Router from "./routes";
import { Case } from "./shared/components/caseComponent";
import useAlertStore from "./stores/alertStore";
import useAuthStore from "./stores/authStore";
import { useDarkStore } from "./stores/darkStore";
import useFlowsManagerStore from "./stores/flowsManagerStore";
import { useFolderStore } from "./stores/foldersStore";

export default function App() {
  useTrackLastVisitedPath();
  const isLoading = useFlowsManagerStore((state) => state.isLoading);
  const { login, setUserData, getUser } = useContext(AuthContext);
  const setAutoLogin = useAuthStore((state) => state.setAutoLogin);
  const setLoading = useAlertStore((state) => state.setLoading);
  const refreshStars = useDarkStore((state) => state.refreshStars);
  const dark = useDarkStore((state) => state.dark);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const cookies = new Cookies();
  const logout = useAuthStore((state) => state.logout);

  const refreshToken = cookies.get("refresh_token");

  const { mutate: mutateAutoLogin } = useAutoLogin();

  useGetVersionQuery();

  const isLoadingFolders = useFolderStore((state) => state.isLoadingFolders);
  const { mutate: mutateRefresh } = useRefreshAccessToken();

  const isLoginPage = location.pathname.includes("login");

  const {
    data: healthData,
    isFetching: fetchingHealth,
    isError: isErrorHealth,
    refetch,
  } = useGetHealthQuery();

  useEffect(() => {
    if (!dark) {
      document.getElementById("body")!.classList.remove("dark");
    } else {
      document.getElementById("body")!.classList.add("dark");
    }
  }, [dark]);

  useEffect(() => {
    mutateAutoLogin(undefined, {
      onSuccess: async (user) => {
        if (user && user["access_token"]) {
          user["refresh_token"] = "auto";
          login(user["access_token"], "auto");
          setUserData(user);
          setAutoLogin(true);
          fetchAllData();
          // mutateRefresh({ refresh_token: refreshToken });
        }
      },
      onError: (error) => {
        if (error.name !== "CanceledError") {
          setAutoLogin(false);
          if (!isLoginPage) {
            if (!isAuthenticated) {
              setLoading(false);
              useFlowsManagerStore.setState({ isLoading: false });
              logout();
            } else {
              mutateRefresh({ refresh_token: refreshToken });
              fetchAllData();
              getUser();
            }
          }
        }
      },
    });
  }, []);

  useEffect(() => {
    const envRefreshTime = LANGFLOW_ACCESS_TOKEN_EXPIRE_SECONDS_ENV;
    const automaticRefreshTime = LANGFLOW_ACCESS_TOKEN_EXPIRE_SECONDS;

    const accessTokenTimer = isNaN(envRefreshTime)
      ? automaticRefreshTime
      : envRefreshTime;

    const intervalId = setInterval(() => {
      if (isAuthenticated && !isLoginPage) {
        mutateRefresh({ refresh_token: refreshToken });
      }
    }, accessTokenTimer * 1000);

    return () => clearInterval(intervalId);
  }, [isLoginPage]);

  const fetchAllData = async () => {
    setTimeout(async () => {
      await Promise.all([refreshStars(), fetchData()]);
    }, 1000);
  };

  const fetchData = async () => {
    return new Promise<void>(async (resolve, reject) => {
      if (isAuthenticated) {
        try {
          await setupAxiosDefaults();
          resolve();
        } catch (error) {
          console.error("Failed to fetch data:", error);
          reject();
        }
      }
    });
  };

  const isLoadingApplication = isLoading || isLoadingFolders;

  return (
    //need parent component with width and height
    <div className="flex h-full flex-col">
      <ErrorBoundary
        onReset={() => {
          // any reset function
        }}
        FallbackComponent={CrashErrorComponent}
      >
        <>
          {
            <FetchErrorComponent
              description={FETCH_ERROR_DESCRIPION}
              message={FETCH_ERROR_MESSAGE}
              openModal={
                isErrorHealth ||
                (healthData &&
                  Object.values(healthData).some((value) => value !== "ok"))
              }
              setRetry={() => {
                refetch();
              }}
              isLoadingHealth={fetchingHealth}
            ></FetchErrorComponent>
          }

          <Case condition={isLoadingApplication}>
            <div className="loading-page-panel">
              <LoadingComponent remSize={50} />
            </div>
          </Case>

          <Case condition={!isLoadingApplication}>
            <Router />
          </Case>
        </>
      </ErrorBoundary>
      <div></div>
      <div className="app-div">
        <AlertDisplayArea />
      </div>
    </div>
  );
}
