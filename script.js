const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => flipTheSwitch(e.target))
);

function flipTheSwitch(clickedOn) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedOn) {
      fast.checked = false;
    }

    if (cheap === clickedOn) {
      good.checked = false;
    }

    if (fast === clickedOn) {
      cheap.checked = false;
    }
  }
}
