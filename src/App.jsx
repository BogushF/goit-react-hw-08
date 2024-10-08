import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
