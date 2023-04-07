import React, { useState } from "react";
import openai from 'openai';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  openai.apiKey = "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"; // Replace with your actual API key

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    setMessages([...messages, { message: input, sender: "user" }]);

    try {
      const response = await openai.completions.create({
        engine: "davinci", // Change this to the GPT-3 engine you want to use
        prompt: input,
        maxTokens: 50, // Change this to the maximum number of tokens in the response
        n: 1,
        stop: ["\n"],
      });

      setMessages([
        ...messages,
        { message: response.choices[0].text, sender: "bot" },
      ]);
    } catch (err) {
      console.log(err);
    }

    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === "user" ? (
              <p>{message.message}</p>
            ) : (
              <p style={{ textAlign: "right" }}>{message.message}</p>
            )}
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
