import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom'
import './App.css';
import QuizController from './components/QuizController';
import Questions from './components/Questions';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function App() {
    const location = useLocation();
  return (
    <BrowserRouter >
        <div className='main-bg'>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300} // Duration of the transition
          >
            <Routes location={location}>
              <Route path="/" element={<QuizController />} />
              <Route path="/question" element={<Questions />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
        </div>
    </BrowserRouter>
  )
}
