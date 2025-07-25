document.getElementById("generate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { type: "getEmail" }, async (email) => {
    if (!email) return;

    const response = await fetch("http://localhost:3000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: email.subject,
        from: email.from,
        body: email.body
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;
    document.getElementById("output").value = reply || "No response.";
  });
});
