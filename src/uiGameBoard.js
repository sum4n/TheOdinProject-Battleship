function uiGameBoard(id) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.setAttribute("id", id);

  gameBoardContainer.textContent = id + " Board";

  for (let i = 0; i <= 9; i++) {
    let columnDiv = addColumnDiv(gameBoardContainer);
    for (let j = 0; j <= 9; j++) {
      addRowDiv(columnDiv, [i, j]);
    }
  }

  return gameBoardContainer;
}

export { uiGameBoard };

function addColumnDiv(parentDiv) {
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("columnCell");

  parentDiv.appendChild(columnDiv);

  return columnDiv;
}

function addRowDiv(parentDiv, array) {
  // do not know why JSON.stringfy is needed twice here.
  array = JSON.stringify(array);
  const rowDiv = document.createElement("div");
  //   rowDiv.classList.add("rowDiv");
  // rowDiv.textContent = array;
  // rowDiv.setAttribute("id", JSON.stringify(array));
  rowDiv.classList.add("cell");
  rowDiv.setAttribute("id", JSON.stringify(array));
  parentDiv.appendChild(rowDiv);

  return rowDiv;
}
