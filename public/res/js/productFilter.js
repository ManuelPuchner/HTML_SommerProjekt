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
  $(".AIO").toggle();
  removeParams();
});
$("#showAIRcheckbox").click(() => {
  $(".AIR").toggle();
  removeParams();
});
$("#showFANcheckbox").click(() => {
  $(".FAN").toggle();
  removeParams();
});
$("#showCASEcheckbox").click(() => {
  $(".CASE").toggle();
  removeParams();
});

function removeParams() {
  if(window.location.search) {
    window.history.pushState({}, document.title, window.location.href.replace(window.location.search, ""));
  }
}