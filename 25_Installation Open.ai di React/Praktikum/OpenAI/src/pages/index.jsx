import React, { useEffect } from "react";
import { useState } from "react";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Index() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "You are a helpfull assistant" + prompt }],
      });
      const choice = response.choices[0].message.content
      setResult([choice]);
      console.log(result)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-gray-200 mt-32 w-3/5 text-center">
          <div className="font-bold text-xl">OPEN AI MODEL</div>
          <div className="mt-5">
            <label
              htmlFor=""
              className="font-semibold
                  "
            >
              Enter Promp Below
            </label>
          </div>
          <div className="mt-3">
            <textarea
              name=""
              id=""
              cols="80"
              rows="10"
              placeholder="Enter Your Promt Here"
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
            ></textarea>
          </div>
          <div>
            <button
              className="bg-sky-400 rounded m-5 w-24 h-10"
              onClick={handleSubmit}
              disabled={isLoading || prompt.length === 0}
            >
              {isLoading ? "Generating... " : "Generate"}
            </button>
          </div>
          <div className="m-11">
            <p className="m-3 font-medium">OPEN AI</p>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </>
  );
}
