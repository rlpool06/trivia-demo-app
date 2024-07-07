'use client'

import { useState } from "react";
import TriviaCard from "./TriviaCard";

function CardContainer(props: any) {
    const { data } = props;
    const [questionNumber, setQuestionNumber] = useState(1);
		const questionIndex = questionNumber - 1;

    const totalQuestions = data?.results?.length;
		const currentQuestion = data?.results[questionIndex];

    const nextQuestion = () => {
      if(questionNumber < totalQuestions) {
        setQuestionNumber(questionNumber + 1);
      }
    };
  
    const prevQuestion = () => {
			if(questionNumber > 1){
				setQuestionNumber(questionNumber - 1);
			}
    }

    return (
			<div className="flex items-center w-full justify-center">
				<button
					disabled={questionNumber === 1}
					type="button"
					onClick={() => prevQuestion()}
					className="w-8 h-8 bg-slate-300 rounded-full mb-8 disabled:opacity-30 shadow-md hover:shadow-lg"
				>
					{'<'}
				</button>
				<div className="flex flex-col items-center w-full max-w-96">
					<TriviaCard
						key={questionNumber}
						question={currentQuestion?.question}
						answer={currentQuestion?.correct_answer}
					/>
					<p className="text-black font-bold">{questionNumber} of {totalQuestions}</p>
				</div>
				<button
					disabled={questionNumber === totalQuestions}
					type="button"
					onClick={() => nextQuestion()}
					className="w-8 h-8 bg-slate-300 rounded-full mb-8 disabled:opacity-30 shadow-md hover:shadow-lg"
				>
					{'>'}
				</button>
			</div>
    );
}

export default CardContainer;