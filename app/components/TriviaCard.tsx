'use client'

import { decodeHTML } from "@/utils/decodeHTML";
import { useState } from "react";

function TriviaCard(props: any) {
    const { question, answer } = props;
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="border-4 border-yellow-500 p-4 bg-slate-100 rounded-md m-3 flex flex-col justify-center items-center text-center max-w-80 w-full h-full max-h-60 min-h-60">
            <p className="text-black text-md font-bold">{decodeHTML(question)}</p>
            <button type="button" onClick={() => setShowAnswer(!showAnswer)} className="bg-green-400 uppercase font-bold text-white mt-4 text-sm w-24 h-8 rounded-md hover:bg-blue-400 ease-in shadow-md">Answer</button>
            <div className="">{showAnswer && <p className="text-black italic text-sm mt-4">{answer}</p>}</div>
        </div>
    )
}

export default TriviaCard;