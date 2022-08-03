import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/Header";
import SideBar from './components/Sidebar';
import Chat from './components/Chat';

// sidebar -> flex: 0.3
// Chat -> flex: 0.7
function App() {
  return (
    <div className="App">
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path="/" element={<Chat />}/>
            </Routes>
          </AppBody>
        </>
    </div>
  );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;