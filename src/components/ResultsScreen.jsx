import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ResultsScreen =  ( props ) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }
    
    const questions = props.questions;
    const score = props.questions.reduce(( sum, question ) => ( question.answer == question.correct ) ? sum + 1 : sum, 0);
    var counter = 0;
    const listItems = questions.map(( question ) => {
        counter ++
     if ( question.answer == question.correct  ) {
         return <li key={ counter } className='answer-correct ' >{question.question}</li>
     } else {
         return <li key={ counter } className="answer-incorrect">{question.question}</li>

     } 
    }
    );

    return (
            <div className='animate__animated animate__fadeIn result-container'>
                    <h1>Results</h1>
                    <h2> Your Scored: {score} </h2>
                    <ul>
                        {listItems}
                    </ul>
                
                    <button 
                        className='btn'
                        onClick={ handleClick }
                    >
                        Play Again?
                    </button>
                
            </div>

        
    )
}
