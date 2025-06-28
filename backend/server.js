require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",  // Replace with your site if deploying
        "X-Title": "ai-chat-app"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages
      })
    });

    const data = await response.json();
    console.log("🔍 OpenRouter Response:", data); 
    const reply = data.choices?.[0]?.message?.content || "No reply.";
    res.json({ reply });
  } catch (err) {
    console.error("OpenRouter Error:", err);
    res.status(500).json({ error: "Failed to get response from OpenRouter." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
