// Observer to change pConfirmRedirectTime time
const target = document.querySelector("#divConfirmRedirectModal");
const config = {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true,
};
var modalPresentObserver = new MutationObserver(function (mutations) {
  $("#pConfirmRedirectTime > span:nth-child(2)").text(addMinutesToTime(queueViewModel.ticket.windowStartTime(), 5));
  modalPresentObserver.disconnect();
});

modalPresentObserver.observe(target, config);

// Function to add minutes to a given time
function addMinutesToTime(time, minutesToAdd) {
  timeSpaceRemoved = time.split(" ");
  console.log("time", time);
  // Split the input time into hours and minutes
  let [hours, minutes] = timeSpaceRemoved[0].split(":").map(Number);

  // Create a new Date object starting at the beginning of today
  let date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  console.log("date before update", date);
  // Add the specified number of minutes
  date.setMinutes(date.getMinutes() + minutesToAdd);
  console.log("date after 5 minutes added", date);
  // Get the new hours and minutes
  let newHours = date.getHours();
  let newMinutes = date.getMinutes();
  console.log("new time", newMinutes);
  // Format the hours and minutes to ensure two digits
  newHours = newHours.toString().padStart(2, "0");
  newMinutes = newMinutes.toString().padStart(2, "0");
  // console.log(`until: ${newHours}:${newMinutes}`);
  // Return the new time as a string
  return `${newHours}:${newMinutes}${timeSpaceRemoved[1]}`;
}
