import './styles/_core.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
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
    <Router>
      <div className="app-wrapper">
        <Header
          isloggedIn={!!cookies.token}
          cookieHandler={removeAuthTokenCookie}
        />
        <Body isLoggedIn={!!cookies.token} cookieHandler={setAuthTokenCookie} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
