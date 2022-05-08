import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useUserStore } from "./context/UserContext";
import Modal from "./components/layout/Modal";
import Login from "./components/account/Login";
import SignupSteps from "./components/account/Signup";
import { AccountState } from "./context/typescript/users.enums";
import "./styles/_core.scss";

const App = () => {
  const { user, authLogin, loadUserPreferences, loginState, signupState, cookies, removeCookie } =
    useUserStore();
  const removeAuthTokenCookie = () => removeCookie("token", { path: "/" });

  useEffect(() => {
    if (!cookies.token) return;
    authLogin(removeCookie);
  }, [cookies, authLogin, removeCookie]);

  useEffect(() => {
    if (!user && !cookies.token) return;
    loadUserPreferences();
  }, [loadUserPreferences, user, cookies]);

  return (
    <Router>
      <Modal isVisible={loginState !== AccountState.None}>
        <Login />
      </Modal>
      <Modal isVisible={signupState !== AccountState.None}>
        <SignupSteps />
      </Modal>
      <div className="app-wrapper">
        <Header isloggedIn={!!cookies.token} cookieHandler={removeAuthTokenCookie} />
        <Body isLoggedIn={!!cookies.token} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
