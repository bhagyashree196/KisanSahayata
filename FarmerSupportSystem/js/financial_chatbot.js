document.addEventListener("DOMContentLoaded", () => {
  const chatbotButton = document.getElementById("chatbotButton");
  const chatbox = document.getElementById("chatbot-box");
  const closeChat = document.getElementById("close-chatbot");
  const chatBody = document.getElementById("chatbot-messages");
  const chatInput = document.getElementById("user-input");
  const sendChat = document.getElementById("send-btn");

  if (!chatbox || !chatbotButton) return;

  // ===== OPEN / CLOSE CHAT =====
  chatbotButton.addEventListener("click", () => {
    chatbox.style.display = "flex"; // show popup
    chatInput.focus();
  });

  closeChat.addEventListener("click", () => {
    chatbox.style.display = "none"; // hide popup
  });

  // ===== ADD MESSAGE =====
  function addMessage(sender, message) {
    const div = document.createElement("div");
    div.classList.add(sender === "bot" ? "bot-msg" : "user-msg");
    div.innerHTML = message;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // ===== TYPING EFFECT =====
  function showTyping(callback) {
    const typing = document.createElement("div");
    typing.classList.add("bot-msg");
    typing.innerHTML = "<i>Typing...</i>";
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;
    setTimeout(() => {
      typing.remove();
      callback();
    }, 500);
  }

  // ===== BOT RESPONSE =====
  function botResponse(message) {
    const msg = message.toLowerCase();
    showTyping(() => {
      if (msg.includes("loan") || msg.includes("kcc")) {
        addMessage("bot",
          "💰 Loans like KCC provide low-interest credit. Check all loan cards above."
        );
      } else if (msg.includes("subsidy")) {
        addMessage("bot",
          "💸 Subsidies support irrigation, seeds, fertilizers, and equipment. See the grid above."
        );
      } else if (msg.includes("grant") || msg.includes("financial")) {
        addMessage("bot",
          "📋 Grants and financial assistance schemes are shown above. Explore by type."
        );
      } else if (msg.includes("filter") || msg.includes("type")) {
        addMessage("bot",
          "🔍 Filter schemes by <b>Central</b> (Govt of India), <b>Maharashtra</b> (State), or <b>All</b> to view everything."
        );
      } else if (msg.includes("hi") || msg.includes("hello")) {
        addMessage("bot",
          "Hello 👋 I can guide you on <b>loans</b>, <b>subsidies</b>, <b>grants</b>, or filtering by <b>Central</b>, <b>Maharashtra</b>, <b>All</b>."
        );
      } else {
        addMessage("bot",
          "Ask me about <b>loans</b>, <b>subsidies</b>, <b>grants</b>, or filters <b>Central</b>, <b>Maharashtra</b>, <b>All</b>."
        );
      }
    });
  }

  // ===== SEND MESSAGE =====
  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage("user", message);
    chatInput.value = "";
    botResponse(message);
  }

  sendChat.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
