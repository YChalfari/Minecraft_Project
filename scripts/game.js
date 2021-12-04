import { drawElement } from "./draw.js";
import { extractElement } from "./tools.js";
export const matrixWorld = [];
const startMenu = document.querySelector(".start-menu");
const startMenuBtn = document.querySelector(".start-btn");
const gameBoard = document.querySelector(".game-board");

function matrixGenerator(arr, rows, cols, blocktype) {
  for (let i = 1; i <= rows; i++) {
    arr.push(Array(cols).fill(blocktype));
  }
}

function drawGame(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((element, j) => {
      let blockObj = {
        type: "",
        position: { x: "", y: "" },
        node: "",
        category: "",
      };
      if (i < 14) blockObj.type = "sky";
      if ((i >= 6 && i <= 7 && j >= 4 && j <= 8) || (i === 7 && j === 3))
        blockObj.type = "cloud";
      if (i >= 7 && i <= 9 && j >= 13 && j <= 15) blockObj.type = "leaves";
      if (i >= 10 && i <= 13 && j === 14) blockObj.type = "trunk";
      if ((i === 13 && j >= 2 && j <= 4) || (i === 12 && j === 3))
        blockObj.type = "leaves";
      if ((i === 13 && j >= 11 && j <= 12) || (j === 18 && i === 13))
        blockObj.type = "rock";
      if (i === 14) blockObj.type = "grass";
      if (i > 14) blockObj.type = "dirt";
      let newElement = document.createElement("div");
      gameBoard.appendChild(newElement);
      newElement.addEventListener("click", (e) => {
        extractElement(e);
      });
      drawElement(newElement, blockObj.type);
      blockObj.node = newElement;
      blockObj.position.x = j;
      blockObj.position.y = i;
      arr[i][j] = blockObj;
    });
  }
  console.log(matrixWorld);
}
matrixGenerator(matrixWorld, 20, 20);
drawGame(matrixWorld);
startMenuBtn.addEventListener("click", () => startMenu.classList.add("hidden"));
