import { themes } from "./themes.js";
export function drawElement(block, type) {
  switch (type) {
    case "dirt":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "ground");
      block.setAttribute("data-type", type);
      break;
    case "sky":
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "empty");
      block.setAttribute("data-type", type);
      themes.dayOrNight = "day";
      break;
    case "cloud":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "empty");
      block.setAttribute("data-type", type);
      break;
    case "rock":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "rock");
      block.setAttribute("data-type", type);
      break;
    case "grass":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "ground");
      block.setAttribute("data-type", type);
      break;
    case "trunk":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "tree");
      block.setAttribute("data-type", type);
      break;
    case "leaves":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "tree");
      block.setAttribute("data-type", type);
      break;
    case "snow":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "ground");
      block.setAttribute("data-type", type);
      break;
    case "sand":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "ground");
      block.setAttribute("data-type", type);
      break;
    case "snow-grass":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "ground");
      block.setAttribute("data-type", type);
      break;
    case "night":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-category", "empty");
      block.setAttribute("data-type", type);
      themes.dayOrNight = "night";
      break;

    default:
      break;
  }
}
export function drawDirt() {
  const dirtBlock = document.createElement("div");
  dirtBlock.classList.add("dirt");
}
