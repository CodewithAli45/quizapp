import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Question.css'

export default function Questions() {
    const [optionSelected, setOptionSelected] =useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(!optionSelected){
                navigate('/')
            }
        }, 5000);
        return () => clearTimeout(timeoutId)
    }, [optionSelected, navigate]);

    const handleOptionSelect = () => {
        setOptionSelected(true);
    }
  return (
    <div className='question-container'>
      <div className="question">
        <div style={{color: 'blue', fontWeight: 'bold', fontSize: '24px', padding: '5px', borderRadius: '50%', border: '1px solid black', display: 'flex', alignItems: 'enter', justifyContent: 'center', margin: '5px', backgroundColor: 'yellow'}}>1. </div>
        <div style={{textAlign: 'justify'}}>A queuing system has one single server workstation that admits an infinitely long queue. The rate of arrival of jobs tothe queuing system follows the Poission distribution with a mean of 5 jobs/hr. ther service time of the server is expontentiially distributed with a mean of 6 minutes. In steady state operation of the queuing system, the probability that server is not busy at any point in time is </div>
      </div>
      <div className='options'>
        <button className='opt' onClick={handleOptionSelect}>Option - 1</button>
        <button className='opt' onClick={handleOptionSelect}>Option - 2</button>
        <button className='opt' onClick={handleOptionSelect}>Option - 3</button>
        <button className='opt' onClick={handleOptionSelect}>Option - 4</button>
      </div>
    </div>
  )
}
