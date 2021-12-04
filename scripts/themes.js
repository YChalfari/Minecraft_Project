import { matrixWorld } from "./game.js";

export const themeSelect = document.querySelector("#theme-select");
console.log(themeSelect);
const themes = {
  night: { sky: "black" },
  beach: { dirt: "url('')", trunk: "url('')", leaves: "url('')" },
  winter: { dirt: "url('')", trunk: "url('')", leaves: "url('')" },
};
const chosenThemes = {
  night: "",
  beach: "",
  winter: "",
};
function drawTheme(arr, theme) {
  matrixWorld.forEach((row, i) => {
    row.forEach((block, j) => {
      if (theme === "night") {
        drawNight(block);
      }
    });
  });
}

function drawNight(block) {
  if (block.node.getAttribute("data-type") === "sky") {
    block.node.classList.remove("sky");
    block.node.classList.add("night");
    block.node.setAttribute("data-type", "night");
  }
  if (block.node.getAttribute("data-type") === "cloud") {
    block.node.classList.remove("sky");
    block.node.classList.add("night-cloud");
    block.node.setAttribute("data-type", "night-cloud");
  }
}
themeSelect.addEventListener("change", (e) => {
  drawTheme(matrixWorld, e.target.value);
});
