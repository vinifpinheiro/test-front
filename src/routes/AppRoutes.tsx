import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/Private/MainPage';
import { AuthProvider , AuthContext } from '../contexts/auth';
import {useContext} from 'react'

const AppRoutes = () => {
  const Private = ({ children }: { children: any }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <Private>
                {" "}
                <MainPage />{" "}
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;