import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App;
