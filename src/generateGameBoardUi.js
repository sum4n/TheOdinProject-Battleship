function generateGameBoardUi(id) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.setAttribute("id", id);

  gameBoardContainer.textContent = id + " Board";

  for (let i = 0; i <= 9; i++) {
    let columnDiv = addColumnDiv(gameBoardContainer);
    for (let j = 0; j <= 9; j++) {
      addRowDiv(columnDiv, [i, j], id);
    }
  }

  return gameBoardContainer;
}

function addColumnDiv(parentDiv) {
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("columnCell");

  parentDiv.appendChild(columnDiv);

  return columnDiv;
}

function addRowDiv(parentDiv, array, classname) {
  // do not know why JSON.stringfy is needed twice here.
  array = JSON.stringify(array);
  const rowDiv = document.createElement("div");

  // 'array' class for targetting. Add this before 'cell' for gameLoop() 'index' targeting.
  rowDiv.classList.add(JSON.stringify(array));

  // 'cell' class for styling
  rowDiv.classList.add(classname + "Cell");

  parentDiv.appendChild(rowDiv);

  return rowDiv;
}

function generateDraggablePlayerShips() {
  const dragShipContainer = document.createElement("div");
  dragShipContainer.setAttribute("id", "dragShipContainer");

  dragShipContainer.textContent = "Drop ships on your board.";

  const dropShipDiv = document.createElement("div");
  dropShipDiv.setAttribute("id", "dropShipDiv");

  let ship1 = generateShipCells(2, "ship1");
  let ship2 = generateShipCells(3, "ship2");
  let ship3 = generateShipCells(3, "ship3");
  let ship4 = generateShipCells(4, "ship4");
  let ship5 = generateShipCells(5, "ship5");

  dropShipDiv.append(ship1, ship2, ship3, ship4, ship5);

  dragShipContainer.appendChild(dropShipDiv);

  return dragShipContainer;
}

function generateShipCells(quantity, shipName) {
  const dragShip = document.createElement("div");
  dragShip.setAttribute("draggable", true);
  dragShip.setAttribute("id", shipName);
  dragShip.classList.add("dragHorizontal", "dragDiv");

  for (let i = 1; i <= quantity; i++) {
    let dragCell = document.createElement("div");
    dragCell.classList.add("dragCell");

    dragShip.append(dragCell);
  }

  return dragShip;
}

export { generateGameBoardUi, generateDraggablePlayerShips };
