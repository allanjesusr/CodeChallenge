import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/HomeScreen"
import { QuizScreen } from "../components/QuizScreen"
import { ResultsScreen } from "../components/ResultsScreen"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <HomeScreen /> } />
                <Route path="/quiz" element={ <QuizScreen /> } />
                <Route path="/results" element={ <ResultsScreen /> } />
                
                <Route path="/*" element={ <HomeScreen /> } />
            </Routes>
        </BrowserRouter>
    );
}

