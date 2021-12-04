export const tools = {
  active: "",
  activeNode: "",
  previouslyActiveNode: "",
  axe: { extracts: ["trunk", "leaves"] },
  shovel: { extracts: ["dirt", "grass"] },
  pickaxe: { extracts: ["rock"] },
  inventory: "",
};

const inventory = document.querySelector(".inventory");
const toolElements = document.querySelectorAll(".tool-wrap");

inventory.addEventListener("click", (e) => {
  if (tools.activeNode === inventory) {
    inventory.classList.toggle("inventory-active");
    tools.previouslyActiveNode = "";
    tools.active = "";
    return;
  }
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

toolElements.forEach((tool) =>
  tool.addEventListener("click", () => {
    if (tools.active === "inventory")
      inventory.classList.toggle("inventory-active");
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
export function extractElement(e) {
  let elementType = e.target.getAttribute("data-type");
  //building from inventory logic
  if (tools.active === "inventory" && tools.inventory) {
    console.log(isSpaceEmpty(e.target));
    if (isSpaceEmpty(e.target)) {
      e.target.className = tools.inventory;
      e.target.setAttribute("data-type", tools.inventory);
      inventory.classList.remove(tools.inventory);
      inventory.classList.toggle("inventory-active");
      tools.inventory = tools.active = tools.previouslyActiveNode = "";
      console.log(tools);
    } else {
      inventory.classList.toggle("inventory-alert");
      setTimeout(() => {
        inventory.classList.toggle("inventory-alert");
      }, 300);
    }
  }

  //check tool logic for extraction
  if (tools.activeNode != inventory) {
    if (tools.active && tools[tools.active].extracts.includes(elementType)) {
      tools.inventory = e.target.getAttribute("data-type");
      e.target.className = "";
      e.target.setAttribute("data-type", "sky");
      e.target.classList.add("sky");
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
  block.getAttribute("data-type") === "sky" ? true : false;
