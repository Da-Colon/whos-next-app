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
import SignupSteps from './components/account/Signup';

const App = () => {
  const { user, authLogin, getUserPreferences, loginState, signupState, cookies, removeCookie }  = useUserStore();
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
        <SignupSteps />
      </Modal>
      <div className="app-wrapper">
        <Header
          isloggedIn={!!cookies.token}
          cookieHandler={removeAuthTokenCookie}
        />
        <Body isLoggedIn={!!cookies.token} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
