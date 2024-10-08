queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");

  if (pageid == "before") {
  }

  if (pageid == "queue") {
    //Create new elements for expectedServiceTime. overwrite issues can cause the original elements to momentarily display inaccurate times.
    if ($(".expectedServiceTime").length === 0) {
      $(`<span class="expectedServiceTime"></span>`).insertAfter("#MainPart_lbExpectedServiceTimeText");
    }
    //Hide if expectedServiceTime if queue is paused
    if (queueViewModel.layout.queueIsPausedVisible() === true) {
      $(".expectedServiceTime").hide();
    } else {
      $(".expectedServiceTime").show();
    }
    //Get ISO service time
    const isoTimeString = queueViewModel.options.inqueueInfo.ticket.expectedServiceTimeUTC;

    //run conversion function
    convertISOTimeToLocalTime(isoTimeString);
  }

  if (pageid == "after") {
  }

  if (pageid == "error") {
    var errorid = $("body").attr("data-errorid");

    if (errorid == "4") {
    }

    if (errorid == "5") {
    }
  }
});

queueViewModel.modelUpdated(function (data) {
  //Continue updating expectedServiceTime when model waiting room updates.
  const isoTimeString = data.ticket.expectedServiceTimeUTC;
  convertISOTimeToLocalTime(isoTimeString);

  //Hide if expectedServiceTime if queue is paused
  if (data.ticket.queuePaused === true) {
    $(".expectedServiceTime").hide();
  } else {
    $(".expectedServiceTime").show();
  }
});

function convertISOTimeToLocalTime(isoTimeString) {
  // Create a Date object from the ISO 8601 string (interpreted as UTC)
  const utcDate = new Date(isoTimeString);

  // Format the time to display hours and minutes in 12-hour format (standard time)
  const localTime = utcDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format (standard time)
  });

  // Get the time zone abbreviation separately
  const timeZone = utcDate
    .toLocaleString("en-US", {
      timeZoneName: "short", // Only show the time zone abbreviation
    })
    .split(" ")
    .pop(); // Extract the time zone abbreviation from the string

  //update new expectedServiceTime element
  $(".expectedServiceTime").text(localTime.replace(/\s/g, ""));
  return { localTime, timeZone };
}
