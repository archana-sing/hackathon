import React, { useState } from 'react';
import Styles from '../styles/Quiz.module.css'

 const quiz = () =>{
    
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const questions = [
		{
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Home Tool Markup Language', isCorrect: false },
				{ answerText: 'Hyperlinks and Text Markup', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is making the Web standards?',
			answerOptions: [
				{ answerText: 'Microsoft', isCorrect: false },
				{ answerText: 'Mozilla', isCorrect: false },
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'The world wide web consortium', isCorrect: true },
			],
		},
		{
			questionText: 'Choose the correct HTML element for the largest heading:',
			answerOptions: [
				{ answerText: '<heading>', isCorrect: false },
				{ answerText: '<h6>', isCorrect: false },
				{ answerText: '<head>', isCorrect: false },
				{ answerText: '<h1>', isCorrect: true },
			],
		},
		{
			questionText: 'What is the correct HTML element for inserting a line break?',
			answerOptions: [
				{ answerText: '<break>', isCorrect: false },
				{ answerText: '<br>', isCorrect: true },
				{ answerText: '<lb>', isCorrect: false },
				{ answerText: '<bl>', isCorrect: false },
			],
		},
        {
			questionText: 'What is the correct HTML for adding a background color?',
			answerOptions: [
				{ answerText: '<body style = "background-color : yellow"', isCorrect: true },
				{ answerText: '<body bg = "yellow">', isCorrect: false },
				{ answerText: '<background>yellow</background>', isCorrect: false }
				
			],
		},
	];


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <>
        <div className = {Styles.container}></div>
		<div className={Styles.app}>
			{showScore ? (
				<div className={Styles.score_section}>
					Your score is  : {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className={Styles.question}>
						<div className={Styles.question_count}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={Styles.question_text}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={Styles.answer}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className = {Styles.button} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </>
	);
}
export default quiz
