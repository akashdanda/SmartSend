document.getElementById("generate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { type: "getEmail" }, async (email) => {
    if (!email) return;

    const apiKey = "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";
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: `Reply to this email:\nSubject: ${email.subject}\nFrom: ${email.from}\n\n${email.body}` }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;
    document.getElementById("output").value = reply || "No response.";
  });
});
