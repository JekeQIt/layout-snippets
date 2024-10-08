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
  console.log("time", time);
  meridiemRemoved = time.split(" "); //the theme uses the character u+202f, which is not the typical space character

  if (time.indexOf(" ") >= 0) {
    console.log("common space");
    meridiemRemoved = time.split(" "); //for preview purposes. Ive added a check for the common space character. To properly test, set queueViewModel.ticket.windowStartTime(***insert time that reflects queue. example "12:34 PM");
  }

  // Split the input time into hours and minutes
  let [hours, minutes] = meridiemRemoved[0].split(":").map(Number);

  // Create a new Date object starting at the beginning of today
  let date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  // Add the specified number of minutes
  date.setMinutes(date.getMinutes() + minutesToAdd);
  // Get the new hours and minutes
  let newHours = date.getHours();
  let newMinutes = date.getMinutes();
  // Determine AM or PM suffix
  let suffix = newHours >= 12 ? "p.m." : "a.m.";

  // Convert hours from 24-hour to 12-hour format
  newHours = newHours % 12 || 12;

  // Format the hours and minutes to ensure two digits
  newMinutes = newMinutes.toString().padStart(2, "0");

  // Format the hours and minutes to ensure two digits
  newHours = newHours.toString().padStart(2, "0");
  newMinutes = newMinutes.toString().padStart(2, "0");
  // console.log(`until: ${newHours}:${newMinutes}`);
  console.log(`${newHours}:${newMinutes} ${suffix}`);
  // Return the new time as a string in 12-hour format with AM/PM suffix
  return `${newHours}:${newMinutes} ${suffix}`;
}
