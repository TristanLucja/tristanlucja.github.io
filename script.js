function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMsg");

  const users = {
    tristan123: "Tristan 💙",
    lucja123: "Lucja 💖"
  };

  if (users[password]) {
    const userName = users[password];
    document.body.innerHTML = `
      <h1 id="welcome" style="text-align: center;">Welcome, ${userName}</h1>
    `;

    setTimeout(() => {
      document.body.innerHTML = `
        <h2 style="text-align: center; color: #000000ff;">Tristan and Lucja forever 💛</h2>
        <div style="text-align: center; margin-top: 20px;">
          <button onclick="addMemory()">+ Add Memory</button>
          <div id="memoryList" style="margin-top: 20px;"></div>
        </div>
      `;
    }, 1500); // 1.5 seconds
  } else {
    errorMsg.textContent = "Oops! Wrong password.";
  }
}

function addMemory() {
  const memory = prompt("Write a memory:");
  if (memory) {
    const list = document.getElementById("memoryList");
    const item = document.createElement("p");
    item.textContent = `💬 ${memory}`;
    list.appendChild(item);
  }
}
