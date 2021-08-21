import './styles/_core.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useUserStore } from "./context/UserContext";
import Modal from './components/UI/Modal';
import { EAccountState } from './context/UserContext/useAccountManagement';
import Login from './components/account/Login';

const App = () => {
  const { user, authLogin, getUserPreferences, loginState, signupState, cookies, setCookie, removeCookie }  = useUserStore();
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
      <Modal isVisible={loginState !== EAccountState.None}>
        <Login />
      </Modal>
      <Modal isVisible={signupState !== EAccountState.None}>
        <div></div>
      </Modal>
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
