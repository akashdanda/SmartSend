setTimeout(() => {
  const emailBody = document.querySelector("div.a3s.aiL"); 
  const subjectEl = document.querySelector("h2.hP");
  const fromEl = document.querySelector(".gD");

  const content = {
    subject: subjectEl?.innerText || "",
    from: fromEl?.getAttribute("email") || "",
    body: emailBody?.innerText || ""
  };
  console.log(content)

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "getEmail") {
      sendResponse(content);
    }
  });
}, 4000);
