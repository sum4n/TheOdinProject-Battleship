function gameFinishModal(msg) {
  const modalDiv = document.createElement("div");
  modalDiv.setAttribute("id", "modalDiv");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modalContent");

  const winnerMsg = document.createElement("p");
  winnerMsg.setAttribute("id", "winnerMsg");
  winnerMsg.textContent = msg;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.setAttribute("id", "playAgainBtn");
  playAgainBtn.textContent = "Play Again";

  playAgainBtn.addEventListener("click", () => {
    console.log("Clicked");
  });

  modalContent.append(winnerMsg, playAgainBtn);

  modalDiv.appendChild(modalContent);

  return modalDiv;
}

export { gameFinishModal };
