export function drawElement(block, type) {
  switch (type) {
    case "dirt":
      block.classList.add("dirt");
      break;
    case "sky":
      block.classList.add("sky");
      break;
    case "cloud":
      block.classList.add("cloud");
      break;
    case "rock":
      block.classList.add("rock");
      break;
    case "grass":
      block.classList.add("grass");
      break;
    case "trunk":
      block.classList.add("trunk");
      break;
    case "leaves":
      block.classList.add("leaves");
      break;

    default:
      break;
  }
}
export function drawDirt() {
  const dirtBlock = document.createElement("div");
  dirtBlock.classList.add("dirt");
}
