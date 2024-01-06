"use client";

import { QAndA } from "@/constants/q-and-a";
import { useState } from "react";

const QandA = () => {
  const [answer, setAnswer] = useState<string>("");
  return (
    <div className="flex-1 flex justify-between h-[calc(100vh-300px)] gap-4">
      {/* Question */}
      <div className="flex-[0.3]  p-4 h-full bg-white shadow-md dark:bg-transparent">
        <h3 className="poppins">Questions</h3>
        {QAndA.map((q) => {
          return (
            <ol type="1" className=" flex flex-col my-4" key={q.question}>
              <li
                className="cursor-pointer hover:underline"
                onClick={() => setAnswer(q.answer)}
              >
                <p className="p-text text-muted-foreground">{q.question}</p>
              </li>
            </ol>
          );
        })}
      </div>

      {/* Answer */}
      <div className="flex-[0.7] p-4 h-full border">
        <p className="p-text">{answer}</p>
      </div>
    </div>
  );
};

export default QandA;
