import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

// Components
import Header from "./components/Header";
import SideBar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

// redux
import { useSelector } from 'react-redux';

// sidebar -> flex: 0.3
// Chat -> flex: 0.7
const App = () => {

  const userFromStore = useSelector((state) => state.counter.user)

  return (
    <div className="App">
        {userFromStore ? (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Routes>
                <Route path="/" element={<Chat />}/>
              </Routes>
            </AppBody>
          </>
        ) : (
          <Login/>
        )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;