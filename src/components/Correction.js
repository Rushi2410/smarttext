import React, { useState } from "react";
import axios from "axios";

const Correction = () => {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const handleCorrection = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-4",
          prompt: `Correct the grammar and improve the clarity of this text:\n"${text}"`,
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      setCorrectedText(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error correcting text:", error);
    }
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here..."
      />
      <button onClick={handleCorrection}>Correct Text</button>
      <p><strong>Corrected Text:</strong> {correctedText}</p>
    </div>
  );
};

export default Correction;
