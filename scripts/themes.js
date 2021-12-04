import { matrixWorld } from "./game.js";

export const themeSelect = document.querySelector("#theme-select");
console.log(themeSelect);
const themes = {
  night: { changes: ["sky"], class: "night" },
  beach: {
    changes: ["dirt", "snow"],
    urls: { ground: { name: "sand", url: "url('')" } },
  },
  winter: {
    changes: ["dirt", "sand"],
    urls: { ground: { name: "snow", url: "url('')" } },
  },
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
function drawSand(block) {
  if (block.node.getAttribute("data-type") === "sky") {
    block.node.classList.remove("sky");
    block.node.classList.add("night");
    block.node.setAttribute("data-type", "night");
  }
}
themeSelect.addEventListener("change", (e) => {
  drawTheme(matrixWorld, e.target.value);
});
