import { drawElement } from "./draw.js";
import { tools } from "./tools.js";
import { Elements } from "./resources.js";
const gameBoard = document.querySelector(".game-board");
const matrixWorld = [];
const dirtBlock = {
  type: "dirt",
  url: "",
  class: "",
};

function matrixGenerator(arr, rows, cols, blocktype) {
  for (let i = 1; i <= rows; i++) {
    arr.push(Array(cols).fill(blocktype));
  }
}

matrixGenerator(matrixWorld, 20, 20);
function startGame(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((element, j) => {
      let blockObj = {};
      if (i < 14) arr[i][j] = "sky";
      if ((i >= 6 && i <= 7 && j >= 4 && j <= 8) || (i === 7 && j === 3))
        arr[i][j] = "cloud";
      if (i >= 7 && i <= 9 && j >= 13 && j <= 15) arr[i][j] = "leaves";
      if (i >= 10 && i <= 13 && j === 14) arr[i][j] = "trunk";
      if ((i === 13 && j >= 2 && j <= 4) || (i === 12 && j === 3))
        arr[i][j] = "leaves";
      if ((i === 13 && j >= 11 && j <= 12) || (j === 18 && i === 13))
        arr[i][j] = "rock";
      if (i === 14) arr[i][j] = "grass";
      if (i > 14) arr[i][j] = "dirt";
      let newElement = document.createElement("div");

      gameBoard.appendChild(newElement);
      newElement.addEventListener("click", (e) => console.log(e.target));
      // newElement.addEventListener("mouseover", (e) => console.log(e.target));

      drawElement(newElement, arr[i][j]);
      if (!newElement.classList.contains("sky"))
        newElement.classList.add("element");
    });
  }
}
startGame(matrixWorld);

// function mainClickEvent(e) {
//   const element = e.target;
//   drawCloud(){if not cloud checkInventory()}
//   drawInventory(){if inventory is active}
//   drawElement()
// }
