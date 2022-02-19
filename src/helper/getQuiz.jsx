export const getQuiz = async() => {

    const url = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const quiz = results.map( questions => {
        return {
            category: questions.category,
            correct: questions.correct_answer.toLowerCase(),
            difficulty: questions.difficulty,
            question: questions.question,
            answer: null
        }
    });

    return quiz;
}