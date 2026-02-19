// ===== SIMPLE KISAN ASSISTANT (GUIDE MODE) =====
document.addEventListener("DOMContentLoaded", () => {

  const chatbotButton = document.getElementById("chatbotButton");
  const chatbox = document.getElementById("chatbox");
  const closeChat = document.getElementById("closeChat");
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const sendChat = document.getElementById("sendChat");
  const quickBtns = document.querySelectorAll(".quick-btn");

  if (!chatbox) return;

  // ===== OPEN / CLOSE CHAT =====
  chatbotButton.addEventListener("click", () => {
    chatbox.style.display = "flex";
    chatInput.focus();
  });

  closeChat.addEventListener("click", () => {
    chatbox.style.display = "none";
  });

  // ===== ADD MESSAGE =====
  function addMessage(sender, message) {
    const div = document.createElement("div");
    div.classList.add("chat-message", sender);
    div.innerHTML = message;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // ===== TYPING EFFECT =====
  function showTyping(callback) {
    const typing = document.createElement("div");
    typing.classList.add("chat-message", "bot");
    typing.innerHTML = "<i>Typing...</i>";
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typing.remove();
      callback();
    }, 600);
  }

  // ===== BOT RESPONSE =====
  function botResponse(message) {
    const msg = message.toLowerCase();

    showTyping(() => {

      if (msg.includes("scheme")) {
        addMessage("bot",
          "📋 To view government schemes, please go to the <b>Government Schemes</b> section on the homepage."
        );
      }
      else if (msg.includes("loan") || msg.includes("kcc")) {
        addMessage("bot",
          "💰 For loan information, please visit the <b>Financial Support</b> section of the website."
        );
      }
      else if (msg.includes("subsidy")) {
        addMessage("bot",
          "💸 Subsidy details are available inside the <b>Government Schemes</b> section."
        );
      }
      else if (msg.includes("insurance")) {
        addMessage("bot",
          "🌾 For crop insurance details, check the <b>Government Schemes</b> section."
        );
      }
      else if (msg.includes("hi") || msg.includes("hello")) {
        addMessage("bot",
          "Hello 👋 I can guide you to schemes, loans, subsidies, and insurance sections. Just type your question or use the buttons below."
        );
      }
      else {
        addMessage("bot",
          "Please ask about <b>schemes</b>, <b>loans</b>, <b>subsidies</b>, or <b>insurance</b>."
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

  // ===== QUICK BUTTONS =====
  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      addMessage("user", btn.textContent);

      switch (action) {
        case "schemes":
          botResponse("scheme");
          break;
        case "loans":
          botResponse("loan");
          break;
        case "subsidy":
          botResponse("subsidy");
          break;
        case "insurance":
          botResponse("insurance");
          break;
      }
    });
  });

});
