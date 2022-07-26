import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/Header";
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path="/" element={<h1>Hey i am the chat</h1>}/>
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