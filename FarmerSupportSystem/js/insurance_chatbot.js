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
      if (msg.includes("crop")) {
        addMessage(
          "bot",
          "🌾 Crop insurance schemes help protect your crops from natural calamities. Check the Crop Insurance cards above for details."
        );
      } else if (msg.includes("life")) {
        addMessage(
          "bot",
          "🧑‍🌾 Life insurance provides coverage for the farmer's life. Explore life insurance schemes in the grid above."
        );
      } else if (msg.includes("livestock")) {
        addMessage(
          "bot",
          "🐄 Livestock insurance protects your animals. Look for the livestock insurance cards above."
        );
      } else if (msg.includes("accident")) {
        addMessage(
          "bot",
          "🚑 Accident insurance gives coverage against accidental injuries. Check the accident insurance section."
        );
      } else if (msg.includes("filter") || msg.includes("type")) {
        addMessage(
          "bot",
          "🔍 You can filter schemes by type using the quick buttons above: Crop, Life, Livestock, Accident. " +
          "To filter by source, use the dropdowns in the cards: <b>Central</b> for central govt schemes, <b>Maharashtra</b> for state schemes, or <b>All</b> to view everything."
        );
      } else if (msg.includes("central")) {
        addMessage(
          "bot",
          "🏛️ Central schemes are provided by the Government of India. Use the dropdown on each insurance card and select <b>Central</b> to see only central schemes."
        );
      } else if (msg.includes("maharashtra") || msg.includes("state")) {
        addMessage(
          "bot",
          "🌟 Maharashtra schemes are state-level schemes. Select <b>Maharashtra</b> in the dropdown to filter state insurance schemes."
        );
      } else if (msg.includes("all")) {
        addMessage(
          "bot",
          "📋 Selecting <b>All</b> will display both central and state insurance schemes together."
        );
      } else if (msg.includes("hi") || msg.includes("hello")) {
        addMessage(
          "bot",
          "Hello 👋 I can help you navigate the insurance schemes page. Ask me about scheme types, or how to filter by <b>Central</b>, <b>Maharashtra</b>, or <b>All</b>."
        );
      } else {
        addMessage(
          "bot",
          "Ask me about <b>Crop</b>, <b>Life</b>, <b>Livestock</b>, <b>Accident</b> insurance, or how to filter by <b>Central</b>, <b>Maharashtra</b>, <b>All</b>."
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
  quickBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      addMessage("user", btn.textContent);
      botResponse(action);
    });
  });
});
