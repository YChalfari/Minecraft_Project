const toolElements = document.querySelectorAll(".tool-wrap");
toolElements.forEach((tool) =>
  tool.addEventListener("click", (e) => {
    // activeTool.activeType=e.target
    console.log(e.target);
  })
);
export const tools = {
  axe: { extracts: ["trunk", "leaves"] },
  shovel: { extracts: ["dirt", "grass"] },
  pickaxe: { extracts: ["rock"] },
};
export let activeTool = { activeType: "", activeHTML: "" };
//pass this to event listener click
