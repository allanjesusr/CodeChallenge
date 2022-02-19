import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getQuiz } from '../helper/getQuiz';
import { ResultsScreen } from './ResultsScreen';
import '../styles/styles.css';

export const QuizScreen =  () => {

    const [actualQuestion, setActualQuestion] = useState(0);
    const [counter, setCounter] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [isFinished, setIsFinished] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate( '/home' );
    }
    
    useEffect(() => {
        getQuiz().then( render => { 
            setQuestions(render);
            setActualQuestion(render[counter]);
        }
        );
    }, []);

    const validateAnswer = ( anwser ) => {
        
        setQuestions( questions.map( quest => {
            if( questions.indexOf( counter ) ) {
                quest.answer = anwser
                return quest
            } else { 
                return quest
            }
        }) );

     
        if ( counter == 9 ) {
            setIsFinished( true );
            console.log( questions );
            return 
        }
        setCounter( counter + 1 );
        setActualQuestion( questions[counter + 1] );
    }

    return (
        <div className="quiz-container animate__animated animate__slideInLeft">
            {  
                questions.length > 0 && isFinished == false && 
                    <>
                        <h1> { actualQuestion.category } </h1>
                        <div className='question'>{ actualQuestion.question }
                            <div>
                                <button className='btn btn-space' onClick={ () => validateAnswer( "true" ) }>True</button>
                                <button className='btn' onClick={ () => validateAnswer( "false" ) }>False</button>
                            </div>
                        </div>
                        <div className='counter'>
                            <span>{ counter + 1 } of 10</span>
                        </div>
                        <button 
                            className='btn'
                            onClick={ handleClick }
                            >
                            <i className="fa-solid fa-circle-arrow-left"></i> Home
                        </button>
                    </>
            } 

            { 
                questions.length == 0 &&  
                    <div >
                        Loading...
                    </div>
            }

            {
                isFinished == true &&
                <ResultsScreen questions={ questions }/>
            
            }
        </div> 
    )
}
