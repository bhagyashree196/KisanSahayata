document.addEventListener("DOMContentLoaded", () => {
  const chatbotButton = document.getElementById("chatbotButton");
  const chatbox = document.getElementById("chatbox");
  const closeChat = document.getElementById("closeChat");
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const sendChat = document.getElementById("sendChat");
  const quickBtns = document.querySelectorAll(".quick-btn");

  if (!chatbox) return;

  // Open / Close
  chatbotButton.addEventListener("click", () => {
    chatbox.style.display = "flex";
    chatInput.focus();
  });

  closeChat.addEventListener("click", () => {
    chatbox.style.display = "none";
  });

  // Add message
  function addMessage(sender, message) {
    const div = document.createElement("div");
    div.classList.add("chat-message", sender);
    div.innerHTML = message;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Typing effect
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

  // Bot response logic
  function botResponse(message) {
    const msg = message.toLowerCase();

    showTyping(() => {
      if (msg.includes("central")) {
        addMessage("bot", "📋 You can view <b>Central Schemes</b> by selecting 'Central' in the Scheme Type dropdown above the grid.");
      } else if (msg.includes("state") || msg.includes("maharashtra")) {
        addMessage("bot", "🏞️ State-specific schemes are listed under 'State (Maharashtra)'. Use the filter to see state schemes.");
      } else if (msg.includes("all")) {
        addMessage("bot", "🌏 Selecting 'All' will display both Central and State schemes together in the grid.");
      } else if (msg.includes("filter") || msg.includes("dropdown")) {
        addMessage("bot", "🔍 Use the Scheme Type dropdown to filter schemes by Central, State, or All.");
      } else if (msg.includes("search")) {
        addMessage("bot", "🔎 You can type your district or village in the search bar to narrow down schemes for your area.");
      } else if (msg.includes("hi") || msg.includes("hello")) {
        addMessage("bot", "Hello 👋 I can help you navigate the schemes page: filter by type, view details, or search by location.");
      } else {
        addMessage("bot", "Ask me about <b>Central</b>, <b>State</b>, <b>All</b>, or how to <b>filter/search</b> schemes.");
      }
    });
  }

  // Send message
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

  // Quick buttons
  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      addMessage("user", btn.textContent);
      botResponse(action);
    });
  });
});
