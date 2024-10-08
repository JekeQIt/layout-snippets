function separateWaitTime(waitTime) {
  var whichIsIn = waitTime.split(" ");
  console.log(whichIsIn);

  if (whichIsIn[0] === "less") {
    $("#MainPart_lbWhichIsIn_new").html(`Less than a minute`);
  } else if (whichIsIn[0] === "more") {
    $("#MainPart_lbWhichIsIn_new").html(`More than an hour`);
  } else {
    $("#MainPart_lbWhichIsIn_new").html(`
          <span class="minutes">${whichIsIn[0]}</span>
          <span class="label">${whichIsIn[1]}</span>
        `);
  }
}
