import { drawElement } from "./draw.js";
import { themes, themeSelect } from "./themes.js";
export const tools = {
  active: "",
  activeNode: "",
  previouslyActiveNode: "",
  axe: { extracts: "tree" },
  shovel: { extracts: "ground" },
  pickaxe: { extracts: "rock" },
  inventory: "",
};

const inventory = document.querySelector(".inventory");
const toolElements = document.querySelectorAll(".tool-wrap");
// inventory
inventory.addEventListener("click", (e) => {
  //deselect inventory
  if (tools.activeNode === inventory) {
    inventory.classList.toggle("inventory-active");
    tools.previouslyActiveNode = "";
    tools.active = "";
    tools.activeNode = "";
    return;
  }
  //remove focus from active tool
  if (tools.active && tools.active != "inventory" && tools.inventory) {
    tools.activeNode.classList.toggle("active");
  }
  if (tools.previouslyActiveNode != inventory && tools.inventory) {
    inventory.classList.toggle("inventory-active");
    tools.activeNode = inventory;
    tools.previouslyActiveNode = inventory;
    tools.active = "inventory";
  }
});
//tools
toolElements.forEach((tool) =>
  tool.addEventListener("click", () => {
    if (tools.active === "inventory") {
      inventory.classList.toggle("inventory-active");
    }
    if (!tools.active || tools.active !== tool.getAttribute("data-tool")) {
      tools.active = tool.getAttribute("data-tool");
      tools.node = tool;
      if (tools.previouslyActiveNode) {
        tools.previouslyActiveNode.classList.remove("active");
      }
      tools.activeNode = tool;
      tools.previouslyActiveNode = tool;
      tool.classList.add("active");
    } else {
      tools.active = "";
      tool.classList.remove("active");
    }
  })
);
function resetInventory() {
  inventory.classList.remove(tools.inventory);
  inventory.classList.toggle("inventory-active");
  tools.inventory = tools.active = tools.previouslyActiveNode = "";
  tools.activeNode = "";
}
export function extractElement(e) {
  let elementCategory = e.target.getAttribute("data-category");
  let elementType = e.target.getAttribute("data-type");
  //building from inventory logic
  if (tools.activeNode === inventory && tools.inventory) {
    console.log(isSpaceEmpty(e.target));
    if (isSpaceEmpty(e.target)) {
      drawElement(e.target, tools.inventory);
      resetInventory();
    } else {
      inventory.classList.toggle("inventory-alert");
      setTimeout(() => {
        inventory.classList.toggle("inventory-alert");
      }, 300);
    }
  }

  //check tool logic for extraction
  if (tools.activeNode != inventory) {
    if (tools.active && tools[tools.active].extracts === elementCategory) {
      tools.inventory = e.target.getAttribute("data-type");
      e.target.className = "";
      if (themes.dayOrNight === "day") {
        e.target.setAttribute("data-type", "sky");
        e.target.setAttribute("data-category", "empty");
        e.target.className = "sky";
      }
      if (themes.dayOrNight === "night") {
        e.target.setAttribute("data-type", "night");
        e.target.setAttribute("data-category", "empty");
        e.target.className = "night";
      }

      if (inventory.classList.length > 1)
        inventory.classList.remove(inventory.className.split(" ").pop());
      inventory.classList.add(elementType);
    } else {
      if (tools.activeNode && tools.activeNode != inventory) {
        tools.activeNode.classList.toggle("alert");
        setTimeout(() => {
          tools.activeNode.classList.toggle("alert");
        }, 300);
      }
    }
  }
}

//check if theres an item under or  touching so inventory can place
function isItemUnder(block, matrix) {}
//check if block is empty
const isSpaceEmpty = (block, matrix) =>
  block.getAttribute("data-category") === "empty" ? true : false;
