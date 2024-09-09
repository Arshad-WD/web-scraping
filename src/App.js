import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Dashboard from './components/Dashboard';
import Message from './components/notification';
import Login from './components/login';
import Guide from './components/Guide';
import Vulnerability from './components/Vulnerability';
import Setting from './components/Setting';
import NotFound from './components/error404';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/message" element={<Message />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/vulnerability" element={<Vulnerability />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
