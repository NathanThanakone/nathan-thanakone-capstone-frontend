import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import AnalyticsPage from "./pages/AnalyticsPage";
import GoalsPage from "./pages/GoalsPage";
import TasksPage from './pages/TasksPage';
import TimerPage from './pages/TimerPage';

const GoalsURL = "http://localhost:8080/goals";

function App() {
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${GoalsURL}`)
      .then(response => {
        setGoalsList(response.data);
      }) 
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <section className='App__container'>
          <section className='App__nav-container'>
            <NavBar />
          </section>
          <section className='App__page-container'>
            <Routes>
              <Route path="/" element={<AnalyticsPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/goals" element={<GoalsPage goalsList={goalsList} />} />
              <Route path="/timer" element={<TimerPage />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
