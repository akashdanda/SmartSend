const express = require("express")
const app = express()
require('dotenv').config();

const PORT = 3000
const API_KEY = process.env.API_KEY;

app.use(express.json())


app.post('/generate', async (req, res) => {
  const { subject, from, body } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Reply to this email:\nSubject: ${subject}\nFrom: ${from}\n\n${body}` }
      ]
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});