import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

export const HomeScreen = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/quiz');
    }

    return (
        <div className="animate__animated animate__zoomIn">
            <div className='container'>
                <h1 className="welcome-title">Welcome to the Trivia Challenge!</h1>
                <h2>You will be presented with 10 true or false questions</h2>
                <div className='w-btn'>
                    <p>Can you Score 100%?</p>
                    <button 
                        className='btn'
                        onClick={ handleClick }
                    >
                        ¡Begin!
                    </button>
                </div>
            </div>
        </div>
    );
}
