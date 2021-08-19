import './styles/_core.scss';
import AppWrapper from "./components/AppWrapper";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AppRouter from "./router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useUserData } from "./context/UserContext";

const App = () => {
  const { user, authLogin, getUserPreferences } = useUserData();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const setAuthTokenCookie = (token: string) =>
    setCookie("token", token, { path: "/" });
  const removeAuthTokenCookie = () => removeCookie("token", { path: "/" });

  useEffect(() => {
    if (!cookies.token) return;
    authLogin(removeCookie);
  }, [cookies, authLogin, removeCookie]);

  useEffect(() => {
    if(!user) return
    getUserPreferences()
  }, [getUserPreferences, user])

  return (
    <AppRouter>
      <AppWrapper>
        <Header
          loggedIn={!!cookies.token}
          cookieHandler={removeAuthTokenCookie}
        />
        <Body isLoggedIn={!!cookies.token} cookieHandler={setAuthTokenCookie} />
        <Footer />
      </AppWrapper>
    </AppRouter>
  );
};

export default App;
