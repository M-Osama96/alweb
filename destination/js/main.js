// const tab = document.querySelector(".tabs");
// const tabButtons = tab.querySelectorAll('[role="tab"]');
// const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

// function tabClickHandler(e) {
//   //Hide All Tabpane
//   tabPanels.forEach((panel) => {
//     panel.hidden = "true";
//   });

//   //Deselect Tab Button
//   tabButtons.forEach((button) => {
//     button.setAttribute("aria-selected", "false");
//   });

//   //Mark New Tab
//   e.currentTarget.setAttribute("aria-selected", "true");

//   //Show New Tab
//   const { id } = e.currentTarget;

//   const currentTab = tabPanels.find(
//     (panel) => panel.getAttribute("aria-labelledby") === id
//   );

//   currentTab.hidden = false;
// }

// tabButtons.forEach((button) => {
//   button.addEventListener("click", tabClickHandler);
// });
const tab = document.querySelector(".tabs");
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
  // Hide all panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // Deselect all tabs
  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
  });

  // Mark current tab
  e.currentTarget.setAttribute("aria-selected", "true");

  // Show all panels linked to current tab
  const { id } = e.currentTarget;
  const currentTabs = tabPanels.filter(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );

  currentTabs.forEach((panel) => (panel.hidden = false));
}

tabButtons.forEach((button) => {
  button.addEventListener("click", tabClickHandler);
});
