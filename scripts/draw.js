export function drawElement(block, type) {
  switch (type) {
    case "dirt":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;
    case "sky":
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;
    case "cloud":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;
    case "rock":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;
    case "grass":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;
    case "trunk":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;
    case "leaves":
      block.classList.add("element");
      block.classList.add(`${type}`);
      block.setAttribute("data-type", type);
      break;

    default:
      break;
  }
}
export function drawDirt() {
  const dirtBlock = document.createElement("div");
  dirtBlock.classList.add("dirt");
}
