import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css';
import QuizController from './components/QuizController';
import Questions from './components/Questions';

export default function App() {
  return (
    <BrowserRouter >
        <div className='main-bg'>
            <Routes location={location}>
              <Route path="/" element={<QuizController />} />
              <Route path="/question" element={<Questions />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
