import Home from "./Components/Home/Home";
import SignInForm from "./Components/SignIn/SignInForm";
import SignUpForm from "./Components/SignUp/SignUpForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import NotRequireAuth from "./Components/RequireAuth/NotRequireAuth";
import Spinner from "./Components/Spinner/Spinner";
import NotFound from "./Components/NotFound/NotFound";
import { useContext } from "react";
import { UserContext } from "./Context/User.Context";
import Details from "./Components/Details/Details";

const App = () => {
  const { checkingAuth } = useContext(UserContext);

  return (
    <Routes>
      <Route element={<NotRequireAuth />}>
        <Route path="/" element={checkingAuth ? <Spinner /> : <Home />} />
        <Route path="/home" element={checkingAuth ? <Spinner /> : <Home />} />
        <Route
          path="/signin"
          element={checkingAuth ? <Spinner /> : <SignInForm />}
        />
        <Route
          path="/signup"
          element={checkingAuth ? <Spinner /> : <SignUpForm />}
        />
      </Route>
      <Route element={<RequireAuth />}>
        <Route
          path="/dashboard"
          element={checkingAuth ? <Spinner /> : <Dashboard />}
        />
        <Route
          path="/profile"
          element={checkingAuth ? <Spinner /> : <Profile />}
        />
        <Route
          path="/user/trades/:tradeId"
          element={checkingAuth ? <Spinner /> : <Details />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
