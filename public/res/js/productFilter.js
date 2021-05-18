const category = new URLSearchParams(window.location.search).get("q");
const categories = ["AIO", "AIR", "FAN", "CASE"];
if (category != null) {
  for (let i = 0; i < categories.length; i++) {
    if (category != categories[i]) {
      document.getElementById(`show${categories[i]}checkbox`).checked = false;
      $(`.${categories[i]}`).toggle();
    }
  }
}
$("#showAIOcheckbox").click(() => {
  $(".AIO").toggle(this.checked);
  removeParams();
});
$("#showAIRcheckbox").click(() => {
  $(".AIR").toggle(this.checked);
  removeParams();
});
$("#showFANcheckbox").click(() => {
  $(".FAN").toggle(this.checked);
  removeParams();
});
$("#showCASEcheckbox").click(() => {
  $(".CASE").toggle(this.checked);
  removeParams();
});

function removeParams() {
  if(window.location.search)
  window.history.pushState({}, window.location.href.replace(window.location.search, ""));
}