import React from 'react';
import {useNavigate} from 'react-router-dom';
import './QuizController.css'

export default function QuizController() {
    const navigate = useNavigate();

    function hanldeQuizApp(){
        navigate('/question')
    }
  return (
    <div>
      <button className='start-button' onClick={hanldeQuizApp}>Start</button>
    </div>
  )
}
