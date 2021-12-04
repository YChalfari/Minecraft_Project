import { matrixWorld } from "./game.js";

export const themeSelect = document.querySelector("#theme-select");

export const themes = {
  normal: { changes: ["snow", "sand", "grass"], class: "dirt" },
  day: { changes: ["night"], class: "sky" },
  night: { changes: ["sky", "cloud"], class: "night" },
  beach: {
    changes: ["dirt", "snow", "grass"],
    class: "sand",
    urls: { ground: { name: "sand", url: "url('')" } },
  },
  winter: {
    changes: ["dirt", "sand", "grass"],
    class: "snow",
    urls: { ground: { name: "snow", url: "url('')" } },
  },
  dayOrNight: "",
};
function drawTheme(arr, theme) {
  theme === "day"
    ? (themes.dayOrNight = "day")
    : theme === "night"
    ? (themes.dayOrNight = "night")
    : "";
  console.log(themes.dayOrNight);
  matrixWorld.forEach((row, i) => {
    row.forEach((block, j) => {
      if (
        themes[theme].changes.includes(block.node.getAttribute("data-type"))
      ) {
        if (block.node.classList.length > 1)
          block.node.classList.remove(block.node.className.split(" ").pop());
        block.node.classList.add(themes[theme].class);
        block.node.setAttribute("data-type", themes[theme].class);
        if (block.node.getAttribute("data-category") === "empty") {
          block.node.className = themes[theme].class;
        }
      }
    });
  });
}

themeSelect.addEventListener("change", (e) => {
  drawTheme(matrixWorld, e.target.value);
});
